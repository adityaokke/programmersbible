import { readdirSync, readFileSync } from "node:fs";
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import matter from "gray-matter";

// Topics not yet published show only "being written", so search engines should not list them.
const unpublished = new Set(
  readdirSync("content/nodes")
    .filter((f) => f.endsWith(".md"))
    .map((f) => matter(readFileSync(`content/nodes/${f}`, "utf8")).data)
    .filter((d) => d.status !== "published")
    .map((d) => `/node/${d.id}`),
);

// Static-first: every page is built ahead of time. Reading never needs a server.
export default defineConfig({
  site: "https://programmersbible.com",
  output: "static",
  trailingSlash: "never",
  build: { format: "file" },
  integrations: [
    sitemap({
      filter: (page) => {
        const path = new URL(page).pathname.replace(/\/$/, "");
        return path !== "/404" && path !== "/search" && !unpublished.has(path);
      },
    }),
  ],
});
