// Draws public/og.png, the picture shown when someone shares a link to the site
// (LinkedIn, chat apps and so on). Run again after changing the name or tagline.
//
//   npm run share-image

import { join } from "node:path";
import { chromium } from "playwright";
import { ROOT } from "./lib/content.ts";

const html = `<!doctype html>
<html><head><style>
  body { margin: 0; width: 1200px; height: 630px; display: flex; flex-direction: column; justify-content: center;
         padding: 0 96px; box-sizing: border-box; background: #fdfcf9; color: #1d1d1f;
         font-family: "Segoe UI", system-ui, -apple-system, sans-serif; border-top: 16px solid #2b59c3; }
  .name { font-size: 40px; font-weight: 700; color: #2b59c3; margin-bottom: 28px; }
  .line { font-size: 68px; font-weight: 700; line-height: 1.15; max-width: 1000px; }
  .sub { font-size: 30px; color: #5b5b63; margin-top: 32px; }
</style></head><body>
  <div class="name">📖 Programmer's Bible</div>
  <div class="line">From knowing how to use a browser to understanding how it all works.</div>
  <div class="sub">Free, open, with sources · programmersbible.com</div>
</body></html>`;

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
await page.setContent(html);
const out = join(ROOT, "public", "og.png");
await page.screenshot({ path: out });
await browser.close();
console.log(out);
