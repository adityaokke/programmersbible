# Setting up accounts (sign in with Google)

Accounts and reading progress run in the site's one Cloudflare Worker (`api/`), with a Cloudflare D1
database. Reading never depends on them: if anything below is missing, pages still work, and only
signing in fails.

All commands run from the repository root.

## 1. Create the D1 database (done)

Done on 2026-11-14 with `npx wrangler d1 create programmersbible`. Its id is in `wrangler.jsonc`
(`d1_databases`, binding `DB`). Nothing to do.

## 2. Create the tables in the remote database

```
npx wrangler d1 migrations apply programmersbible --remote
```

This applies the SQL files in `db/migrations/`. Run it again after every change to `db/schema.ts`
(first `npm run db:generate`, which writes a new migration file, then commit it).

## 3. Create the Google OAuth client

In the [Google Cloud console](https://console.cloud.google.com/):

1. Create a project (or pick one), then open **APIs & Services → OAuth consent screen**. Choose
   **External**, set the app name (Programmer's Bible), support email, the home page
   `https://programmersbible.com` and the privacy policy `https://programmersbible.com/privacy`. The site
   asks only for `openid`, `email` and `profile` (Google's non-sensitive scopes). Publish the app (from
   "Testing" to "In production"), or only test users can sign in.
2. Open **APIs & Services → Credentials → Create credentials → OAuth client ID**, type **Web application**.
3. **Authorized JavaScript origins:** `https://programmersbible.com` and `http://localhost:8787`.
4. **Authorized redirect URIs:**
   - `https://programmersbible.com/api/auth/callback/google`
   - `http://localhost:8787/api/auth/callback/google` (for local testing)
5. Copy the **Client ID** and **Client secret**.

## 4. Set the secrets

```
npx wrangler secret put GOOGLE_CLIENT_ID
npx wrangler secret put GOOGLE_CLIENT_SECRET
npx wrangler secret put BETTER_AUTH_SECRET
npx wrangler secret put BETTER_AUTH_URL
```

- `BETTER_AUTH_SECRET`: a long random string, for example the output of `openssl rand -base64 32`.
  It signs the session cookie; changing it later signs everyone out.
- `BETTER_AUTH_URL`: `https://programmersbible.com` (no trailing slash).

For local testing, copy `.dev.vars.example` to `.dev.vars` (never committed) and fill in the same names,
with `BETTER_AUTH_URL=http://localhost:8787`.

## 5. Deploy

```
npm run deploy
```

This validates the content, builds the site into `dist/` and runs `wrangler deploy`, which uploads the
Worker (`api/index.ts`) and the site together.

## 6. Test

On https://programmersbible.com:

1. In a private window, open any topic. The header shows **Sign in**; the browser's developer tools
   show no requests to `/api/` and no cookies.
2. Click **Sign in → Sign in with Google**, choose an account. You come back to the page you started
   from, and the header shows your first name.
3. On a topic, scroll down a few sections, then go to another page. Come back: a
   **Continue from "…"** button appears at the bottom. Click it.
4. Click **Mark as read** at the end of a topic. The First Chapter page shows a ✓ beside it, the map
   shows a ✓ before its name, and the home page shows **Continue reading**.
5. On **/me**: the topic is listed; **Download my data** downloads a JSON file; **Sign out** works.
6. Sign in again, then **Delete my account → Yes, delete my account**. Then check the database is empty
   for that account:

   ```
   npx wrangler d1 execute programmersbible --remote --command "select count(*) from user"
   ```

To watch errors while testing: `npx wrangler tail`.

## Testing locally

```
npm run build                     # the site, into dist/
npm run db:migrate:local          # tables in the local D1 (.wrangler/)
npm run dev:worker                # http://localhost:8787: the site and /api, like production
```

`dev:worker` runs `wrangler dev --infer-origin-from-routes=false`. Without that flag, wrangler shows the
Worker the production domain instead of `localhost:8787`, and sign-in's origin check refuses requests.
With real Google credentials in `.dev.vars`, signing in works locally too (open `http://localhost:8787`,
not `127.0.0.1`).
