// Drizzle Kit writes SQL migrations from db/schema.ts: npx drizzle-kit generate
// Wrangler applies them to D1 (see wrangler.jsonc, migrations_dir).
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "sqlite",
  schema: "./db/schema.ts",
  out: "./db/migrations",
});
