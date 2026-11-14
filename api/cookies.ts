// A small cookie that tells the site's pages "someone is signed in on this browser", so pages ask for
// reading progress only then. Readers who never sign in send no request at all.
//
// It holds no name and no id, only "1". The session cookie itself (Better Auth's) stays HttpOnly,
// out of reach of page scripts. This one follows it: set when a session cookie is set, cleared when
// the session cookie is cleared or the server finds no session.

import type { Context } from "hono";
import { SESSION_DAYS } from "./auth.ts";

export const SIGNED_IN_COOKIE = "pb_signed_in";

function hint(url: string, on: boolean): string {
  const secure = new URL(url).protocol === "https:" ? "; Secure" : "";
  const age = on ? 60 * 60 * 24 * SESSION_DAYS : 0;
  return `${SIGNED_IN_COOKIE}=${on ? "1" : ""}; Path=/; Max-Age=${age}; SameSite=Lax${secure}`;
}

export function setSignedInHint(c: Context) {
  c.header("Set-Cookie", hint(c.req.url, true), { append: true });
}

export function clearSignedInHint(c: Context) {
  if (c.req.header("Cookie")?.includes(`${SIGNED_IN_COOKIE}=`)) c.header("Set-Cookie", hint(c.req.url, false), { append: true });
}

/** After Better Auth answers: if it set or cleared the session cookie, do the same with the hint. */
export function followSessionCookie(request: Request, response: Response): Response {
  const session = response.headers.getSetCookie().find((c) => /^(__Secure-)?better-auth\.session_token=/.test(c));
  if (!session) return response;
  const cleared = /^[^=]+=;/.test(session) || /max-age=0\b/i.test(session);
  const res = new Response(response.body, response); // Better Auth's headers may be immutable
  res.headers.append("Set-Cookie", hint(request.url, !cleared));
  return res;
}
