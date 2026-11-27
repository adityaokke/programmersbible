// Reading progress for signed-in readers. Every route needs a session and answers 401 without one.
//
//   GET /api/progress          every topic's status and last heading, the last topic, who is signed in,
//                              and their settings (api/preferences.ts)
//   PUT /api/progress/:nodeId  { status?: "visited" | "read", lastHeading?: string | null }
//   GET /api/progress/export   all of the reader's data, as a JSON file

import { desc, eq } from "drizzle-orm";
import { Hono, type Context } from "hono";
import { account, nodeProgress, PROGRESS_STATUSES, session, user, userPreference } from "../db/schema.ts";
import { database } from "./auth.ts";
import { setSignedInHint } from "./cookies.ts";
import { preferencesOf } from "./preferences.ts";
import { fromOtherSite, readObject, requireSession, type Signed } from "./session.ts";

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

export const progress = new Hono<Signed>();

progress.use("*", requireSession);

progress.get("/", async (c) => {
  const userId = c.get("userId");
  const [rows, preferences] = await Promise.all([
    database(c.env)
      .select({ nodeId: nodeProgress.nodeId, status: nodeProgress.status, lastHeading: nodeProgress.lastHeading, updatedAt: nodeProgress.updatedAt })
      .from(nodeProgress)
      .where(eq(nodeProgress.userId, userId))
      .orderBy(desc(nodeProgress.updatedAt)),
    preferencesOf(c.env, userId),
  ]);
  setSignedInHint(c);
  c.header("Cache-Control", "no-store");
  const { name, email, image } = c.get("user");
  return c.json({
    user: { name, email, image: image ?? null },
    lastTopic: rows[0]?.nodeId ?? null,
    nodes: Object.fromEntries(rows.map((r) => [r.nodeId, { status: r.status, lastHeading: r.lastHeading }])),
    preferences,
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
  // Empty if the preferences table is not there yet (deployed before its migration ran).
  const [settings] = await db
    .select({ language: userPreference.preferredLanguage, updatedAt: userPreference.updatedAt })
    .from(userPreference)
    .where(eq(userPreference.userId, userId))
    .catch(() => []);
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
    preferences: settings ?? { language: null },
  });
});

progress.put("/:nodeId", async (c) => {
  if (fromOtherSite(c)) return c.json({ error: "Wrong origin" }, 403);

  const nodeId = c.req.param("nodeId");
  if (nodeId.length > 100 || !NODE_ID.test(nodeId) || !(await publishedTopics(c)).has(nodeId)) {
    return c.json({ error: "Unknown topic" }, 404);
  }

  const read = await readObject(c);
  if ("error" in read) return read.error;
  const { status, lastHeading } = read.body;
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

