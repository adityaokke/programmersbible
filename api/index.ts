// The site's one Cloudflare Worker. Static files (dist/) are served by Cloudflare directly; only
// /api/* runs this code (run_worker_first in wrangler.jsonc). Reading never depends on it.
//
//   /api/auth/*      sign-in with Google, sign-out, delete account (Better Auth)
//   /api/progress*   reading progress (api/progress.ts)

import { Hono } from "hono";
import { createAuth } from "./auth.ts";
import { followSessionCookie } from "./cookies.ts";
import type { Env } from "./env.ts";
import { progress } from "./progress.ts";

const app = new Hono<{ Bindings: Env }>();

app.on(["GET", "POST"], "/api/auth/*", async (c) => followSessionCookie(c.req.raw, await createAuth(c.env).handler(c.req.raw)));
app.route("/api/progress", progress);
app.all("/api/*", (c) => c.json({ error: "Not found" }, 404));
app.onError((err, c) => {
  console.error(err);
  return c.json({ error: "Something went wrong" }, 500);
});

export default {
  fetch(request, env, ctx) {
    if (new URL(request.url).pathname.startsWith("/api/")) return app.fetch(request, env, ctx);
    return env.ASSETS.fetch(request);
  },
} satisfies ExportedHandler<Env>;
