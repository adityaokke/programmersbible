import { defineConfig } from "astro/config";

// Static-first: every page is built ahead of time. Reading never needs a server.
export default defineConfig({
  output: "static",
  trailingSlash: "never",
  build: { format: "file" },
});
