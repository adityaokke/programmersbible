// Checks the built site for accessibility problems with axe-core (contrast, labels, headings,
// alt text, keyboard focus and more), in light and dark mode.
//
//   npm run build:site      (first: build the site)
//   npm run a11y
//
// Exits with 1 if any page has a problem, listing each one once with the pages it was found on.

import { createReadStream, existsSync, statSync } from "node:fs";
import { createServer } from "node:http";
import { extname, join, normalize } from "node:path";
import AxeBuilder from "@axe-core/playwright";
import { chromium } from "playwright";
import { ROOT } from "./lib/content.ts";

// One page of each kind, plus topics with pictures, diagrams and code.
const PAGES = [
  "/", "/about", "/privacy", "/search?q=dns", "/timeline", "/map", "/404",
  "/path/first-chapter", "/path/more-to-explore",
  "/node/dns", "/node/cpu", "/node/grace-hopper-and-compilers", "/node/javascript", "/node/byte",
];

const dist = join(ROOT, "dist");
const types: Record<string, string> = {
  ".html": "text/html", ".css": "text/css", ".js": "text/javascript", ".svg": "image/svg+xml",
  ".jpg": "image/jpeg", ".png": "image/png", ".json": "application/json", ".xml": "application/xml",
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

type Found = { help: string; impact: string; url: string; where: Set<string>; examples: Set<string> };
const found = new Map<string, Found>();
const browser = await chromium.launch();
for (const colorScheme of ["light", "dark"] as const) {
  const context = await browser.newContext({ colorScheme, viewport: { width: 1100, height: 900 } });
  const page = await context.newPage();
  for (const path of PAGES) {
    await page.goto(`http://localhost:${port}${path}`, { waitUntil: "networkidle" });
    const result = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "best-practice"]).analyze();
    for (const v of result.violations) {
      const f = found.get(v.id) ?? { help: v.help, impact: v.impact ?? "", url: v.helpUrl, where: new Set(), examples: new Set() };
      f.where.add(`${path} (${colorScheme})`);
      for (const n of v.nodes.slice(0, 3)) f.examples.add(`${n.target.join(" ")}: ${n.failureSummary?.split("\n").slice(1).join(" ").trim()}`);
      found.set(v.id, f);
    }
  }
  await context.close();
}
await browser.close();
server.close();

if (!found.size) console.log(`No accessibility problems found on ${PAGES.length} pages (light and dark).`);
for (const [id, f] of found) {
  console.log(`\n[${f.impact}] ${id}: ${f.help}\n  ${f.url}\n  pages: ${[...f.where].join(", ")}`);
  for (const e of [...f.examples].slice(0, 5)) console.log(`  - ${e}`);
}
process.exit(found.size ? 1 : 0);
