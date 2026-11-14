// Reading progress for signed-in readers. Every route needs a session and answers 401 without one.
//
//   GET /api/progress          every topic's status and last heading, the last topic, and who is signed in
//   PUT /api/progress/:nodeId  { status?: "visited" | "read", lastHeading?: string | null }
//   GET /api/progress/export   all of the reader's data, as a JSON file

import { desc, eq } from "drizzle-orm";
import { Hono, type Context } from "hono";
import { account, nodeProgress, PROGRESS_STATUSES, session, user } from "../db/schema.ts";
import { createAuth, database } from "./auth.ts";
import { clearSignedInHint, setSignedInHint } from "./cookies.ts";
import type { Env } from "./env.ts";

type Signed = { Bindings: Env; Variables: { userId: string; user: { name: string; email: string; image?: string | null } } };

// The topic ids readers can open (published topics), from the built site: dist/topics.json.
// Kept for a few minutes, so a deploy with new topics is picked up without a restart.
let topics: { ids: Set<string>; at: number } | null = null;
async function publishedTopics(c: Context<Signed>): Promise<Set<string>> {
  if (topics && Date.now() - topics.at < 5 * 60_000) return topics.ids;
  const res = await c.env.ASSETS.fetch(new URL("/topics.json", c.req.url));
  if (!res.ok) throw new Error(`topics.json: ${res.status}`);
  const list = (await res.json()) as Record<string, string>;
  topics = { ids: new Set(Object.keys(list)), at: Date.now() };
  return topics.ids;
}

/** A heading id as the site makes them ("how-it-actually-works"); short, letters, digits and dashes. */
const HEADING = /^[\p{L}\p{N}]+(-[\p{L}\p{N}]+)*$/u;
const NODE_ID = /^[a-z0-9]+(-[a-z0-9]+)*$/; // as in schema/node.ts
const MAX_BODY = 512;

export const progress = new Hono<Signed>();

// Who is asking. Also keeps the small "signed in" cookie in step with the session (see cookies.ts).
progress.use("*", async (c, next) => {
  const found = await createAuth(c.env).api.getSession({ headers: c.req.raw.headers });
  if (!found) {
    clearSignedInHint(c);
    return c.json({ error: "Not signed in" }, 401);
  }
  c.set("userId", found.user.id);
  c.set("user", { name: found.user.name, email: found.user.email, image: found.user.image });
  await next();
});

progress.get("/", async (c) => {
  const rows = await database(c.env)
    .select({ nodeId: nodeProgress.nodeId, status: nodeProgress.status, lastHeading: nodeProgress.lastHeading, updatedAt: nodeProgress.updatedAt })
    .from(nodeProgress)
    .where(eq(nodeProgress.userId, c.get("userId")))
    .orderBy(desc(nodeProgress.updatedAt));
  setSignedInHint(c);
  c.header("Cache-Control", "no-store");
  const { name, email, image } = c.get("user");
  return c.json({
    user: { name, email, image: image ?? null },
    lastTopic: rows[0]?.nodeId ?? null,
    nodes: Object.fromEntries(rows.map((r) => [r.nodeId, { status: r.status, lastHeading: r.lastHeading }])),
  });
});

progress.get("/export", async (c) => {
  const db = database(c.env);
  const userId = c.get("userId");
  const [me] = await db.select().from(user).where(eq(user.id, userId));
  const accounts = await db
    .select({ provider: account.providerId, createdAt: account.createdAt })
    .from(account)
    .where(eq(account.userId, userId));
  const sessions = await db
    .select({ createdAt: session.createdAt, expiresAt: session.expiresAt })
    .from(session)
    .where(eq(session.userId, userId));
  const rows = await db
    .select({ topic: nodeProgress.nodeId, status: nodeProgress.status, lastHeading: nodeProgress.lastHeading, updatedAt: nodeProgress.updatedAt })
    .from(nodeProgress)
    .where(eq(nodeProgress.userId, userId))
    .orderBy(desc(nodeProgress.updatedAt));
  c.header("Cache-Control", "no-store");
  c.header("Content-Disposition", 'attachment; filename="programmers-bible-my-data.json"');
  return c.json({
    exportedAt: new Date().toISOString(),
    site: "https://programmersbible.com",
    account: me && {
      name: me.name,
      email: me.email,
      emailVerified: me.emailVerified,
      picture: me.image,
      createdAt: me.createdAt,
      updatedAt: me.updatedAt,
    },
    signInWith: accounts,
    sessions,
    progress: rows,
  });
});

progress.put("/:nodeId", async (c) => {
  // Same-site requests only (the session cookie is SameSite=Lax too).
  const origin = c.req.header("Origin");
  if (origin && origin !== new URL(c.req.url).origin && !isTrustedOrigin(origin)) return c.json({ error: "Wrong origin" }, 403);

  const nodeId = c.req.param("nodeId");
  if (nodeId.length > 100 || !NODE_ID.test(nodeId) || !(await publishedTopics(c)).has(nodeId)) {
    return c.json({ error: "Unknown topic" }, 404);
  }

  const text = await c.req.text();
  if (text.length > MAX_BODY) return c.json({ error: "Request too large" }, 413);
  let body: unknown;
  try {
    body = text ? JSON.parse(text) : {};
  } catch {
    return c.json({ error: "Not JSON" }, 400);
  }
  if (typeof body !== "object" || body === null || Array.isArray(body)) return c.json({ error: "Expected an object" }, 400);
  const { status, lastHeading } = body as Record<string, unknown>;
  if (status !== undefined && !PROGRESS_STATUSES.includes(status as never)) return c.json({ error: "Bad status" }, 400);
  if (lastHeading !== undefined && lastHeading !== null && (typeof lastHeading !== "string" || lastHeading.length > 120 || !HEADING.test(lastHeading))) {
    return c.json({ error: "Bad lastHeading" }, 400);
  }

  // A visit (no status) never turns "read" back into "visited"; only an explicit status changes it.
  const now = new Date();
  const set: Partial<typeof nodeProgress.$inferInsert> = { updatedAt: now };
  if (status !== undefined) set.status = status as (typeof PROGRESS_STATUSES)[number];
  if (lastHeading !== undefined) set.lastHeading = lastHeading as string | null;
  const userId = c.get("userId");
  const [row] = await database(c.env)
    .insert(nodeProgress)
    .values({ userId, nodeId, status: set.status ?? "visited", lastHeading: set.lastHeading ?? null, updatedAt: now })
    .onConflictDoUpdate({ target: [nodeProgress.userId, nodeProgress.nodeId], set })
    .returning({ status: nodeProgress.status, lastHeading: nodeProgress.lastHeading });
  return c.json({ nodeId, ...row });
});

const isTrustedOrigin = (origin: string) =>
  origin === "https://programmersbible.com" || origin === "https://www.programmersbible.com";
