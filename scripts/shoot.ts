// Takes screenshots of a node's pictures and diagrams as readers see them, in light and dark
// mode and at phone width, so you can check callouts, close-ups and diagrams by looking.
//
//   SHOW_DRAFTS=true npm run build:site      (first: build the site, drafts included)
//   npm run shoot -- <node-id>
//
// Screenshots are written to generated/shots/<node-id>-<n>-<view>.png.

import { createReadStream, existsSync, mkdirSync, statSync } from "node:fs";
import { createServer } from "node:http";
import { extname, join, normalize } from "node:path";
import { chromium } from "playwright";
import { ROOT } from "./lib/content.ts";

const nodeId = process.argv[2];
if (!nodeId) {
  console.error("Usage: npm run shoot -- <node-id>");
  process.exit(1);
}
const dist = join(ROOT, "dist");
if (!existsSync(join(dist, "node", `${nodeId}.html`))) {
  console.error(`dist/node/${nodeId}.html not found. Build first: SHOW_DRAFTS=true npm run build:site`);
  process.exit(1);
}

// A tiny static server for dist/, so absolute paths like /images/... work.
const types: Record<string, string> = {
  ".html": "text/html", ".css": "text/css", ".js": "text/javascript", ".svg": "image/svg+xml",
  ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".png": "image/png", ".webp": "image/webp",
};
const server = createServer((req, res) => {
  const path = normalize(decodeURIComponent((req.url ?? "/").split("?")[0]!)).replace(/^([/\\])+/, "");
  let file = join(dist, path);
  if (!existsSync(file) || statSync(file).isDirectory()) file = existsSync(`${file}.html`) ? `${file}.html` : join(file, "index.html");
  if (!existsSync(file)) return void res.writeHead(404).end();
  res.writeHead(200, { "Content-Type": types[extname(file)] ?? "application/octet-stream" });
  createReadStream(file).pipe(res);
});
await new Promise<void>((resolve) => server.listen(0, resolve));
const port = (server.address() as { port: number }).port;

const out = join(ROOT, "generated", "shots");
mkdirSync(out, { recursive: true });
const browser = await chromium.launch();
const views = [
  { name: "light", viewport: { width: 1100, height: 900 }, colorScheme: "light" as const },
  { name: "dark", viewport: { width: 1100, height: 900 }, colorScheme: "dark" as const },
  { name: "phone", viewport: { width: 390, height: 844 }, colorScheme: "light" as const },
];
let count = 0;
for (const view of views) {
  const page = await browser.newPage({ viewport: view.viewport, colorScheme: view.colorScheme });
  await page.goto(`http://localhost:${port}/node/${nodeId}`, { waitUntil: "networkidle" });
  const figures = page.locator("figure.picture, figure.diagram");
  const n = await figures.count();
  for (let i = 0; i < n; i++) {
    const path = join(out, `${nodeId}-${i + 1}-${view.name}.png`);
    await figures.nth(i).scrollIntoViewIfNeeded();
    await figures.nth(i).screenshot({ path });
    console.log(path);
    count++;
  }
  await page.close();
}
await browser.close();
server.close();
if (!count) console.log(`No pictures or diagrams found on ${nodeId}.`);
