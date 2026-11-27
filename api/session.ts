// Shared by the routes for signed-in readers (api/progress.ts, api/preferences.ts): who is asking,
// where the request comes from, and a small JSON body.

import type { Context, MiddlewareHandler } from "hono";
import { createAuth } from "./auth.ts";
import { clearSignedInHint } from "./cookies.ts";
import type { Env } from "./env.ts";

export type Signed = { Bindings: Env; Variables: { userId: string; user: { name: string; email: string; image?: string | null } } };

/** Who is asking: every route behind this needs a session and answers 401 without one. */
export const requireSession: MiddlewareHandler<Signed> = async (c, next) => {
  const found = await createAuth(c.env).api.getSession({ headers: c.req.raw.headers });
  // Also keeps the small "signed in" cookie in step with the session (see cookies.ts).
  if (!found) {
    clearSignedInHint(c);
    return c.json({ error: "Not signed in" }, 401);
  }
  c.set("userId", found.user.id);
  c.set("user", { name: found.user.name, email: found.user.email, image: found.user.image });
  await next();
};

/** True for a request from another website. Changes are same-site only (the session cookie is SameSite=Lax too). */
export function fromOtherSite(c: Context): boolean {
  const origin = c.req.header("Origin");
  return !!origin && origin !== new URL(c.req.url).origin && !isTrustedOrigin(origin);
}

const isTrustedOrigin = (origin: string) =>
  origin === "https://programmersbible.com" || origin === "https://www.programmersbible.com";

const MAX_BODY = 512;

/** The request's JSON object (an empty body counts as {}), or the error response to send. */
export async function readObject(c: Context): Promise<{ body: Record<string, unknown> } | { error: Response }> {
  const text = await c.req.text();
  if (text.length > MAX_BODY) return { error: c.json({ error: "Request too large" }, 413) };
  let body: unknown;
  try {
    body = text ? JSON.parse(text) : {};
  } catch {
    return { error: c.json({ error: "Not JSON" }, 400) };
  }
  if (typeof body !== "object" || body === null || Array.isArray(body)) return { error: c.json({ error: "Expected an object" }, 400) };
  return { body: body as Record<string, unknown> };
}
