/** What the Worker receives from Cloudflare: bindings from wrangler.jsonc and secrets (.dev.vars locally). */
export interface Env {
  /** The built site (dist/). */
  ASSETS: Fetcher;
  /** Cloudflare D1: accounts and reading progress. */
  DB: D1Database;
  GOOGLE_CLIENT_ID: string;
  GOOGLE_CLIENT_SECRET: string;
  /** A long random string that signs the session cookie. */
  BETTER_AUTH_SECRET: string;
  /** The site's address, for example https://programmersbible.com (http://localhost:8787 locally). */
  BETTER_AUTH_URL: string;
}
