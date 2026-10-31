// Downloads a picture from Wikimedia Commons into content/images/<node-id>/ and prints the
// `images:` entry for the node's frontmatter, with the author and license read from Commons.
// Refuses licenses the content license cannot use.
//
//   npm run fetch-image -- <node-id> "File:Open hard-drive.jpg" [--name open-hard-drive] [--width 2000]
//
// --width: 1000 by default; use 2000 when the node shows a close-up (zoom) of the picture.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { IMAGE_LICENSES } from "../schema/node.ts";
import { IMAGES_DIR } from "./lib/content.ts";
import { MAX_WIDTH, MAX_WIDTH_ZOOM, optimizeImage } from "./lib/images.ts";

const args = process.argv.slice(2);
const option = (name: string) => {
  const i = args.indexOf(`--${name}`);
  return i === -1 ? undefined : args.splice(i, 2)[1];
};
const width = Math.min(Number(option("width") ?? MAX_WIDTH), MAX_WIDTH_ZOOM);
const name = option("name");
const [nodeId = "", rawTitle = ""] = args;
if (!nodeId || !rawTitle) {
  console.error('Usage: npm run fetch-image -- <node-id> "File:Name on Commons.jpg" [--name kebab-name] [--width 2000]');
  process.exit(1);
}
const title = rawTitle.startsWith("File:") ? rawTitle : `File:${rawTitle}`;

async function main(): Promise<number> {
  // Wikimedia asks tools to say who they are.
  const headers = { "User-Agent": "ProgrammersBible/0.1 (https://github.com/adityaokke/programmersbible)" };
  const api = new URL("https://commons.wikimedia.org/w/api.php");
  api.search = new URLSearchParams({
    action: "query",
    format: "json",
    titles: title,
    prop: "imageinfo",
    iiprop: "url|extmetadata|size|mime",
    iiurlwidth: String(width),
  }).toString();

  type ImageInfo = {
    url: string;
    thumburl?: string;
    descriptionurl: string;
    mime: string;
    width: number;
    extmetadata: Record<string, { value: string } | undefined>;
  };
  const data = (await (await fetch(api, { headers })).json()) as {
    query: { pages: Record<string, { missing?: string; imageinfo?: ImageInfo[] }> };
  };
  const page = Object.values(data.query.pages)[0];
  const info = page?.imageinfo?.[0];
  if (!info) {
    console.error(`Not found on Wikimedia Commons: ${title}`);
    return 1;
  }

  const text = (key: string) => (info.extmetadata[key]?.value ?? "").replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();

  // Map Commons' short license name to one of the allowed names, or refuse.
  function license(short: string): (typeof IMAGE_LICENSES)[number] | undefined {
    if (/^public domain$/i.test(short) || /^PD\b/i.test(short)) return "Public domain";
    if (/^CC0/i.test(short)) return "CC0 1.0";
    const cc = short.match(/^CC BY(-SA)? (\d\.\d)/i);
    if (cc) {
      const candidate = `CC BY${cc[1] ? "-SA" : ""} ${cc[2]}`;
      return (IMAGE_LICENSES as readonly string[]).includes(candidate) ? (candidate as (typeof IMAGE_LICENSES)[number]) : undefined;
    }
    return undefined;
  }

  const shortLicense = text("LicenseShortName");
  const allowed = license(shortLicense);
  if (!allowed) {
    console.error(`Refused: the license "${shortLicense}" is not on the allowed list (${IMAGE_LICENSES.join(", ")}).`);
    console.error("Link to the picture in \"See it for yourself\" instead, or find another one.");
    return 1;
  }
  const author = text("Artist") || text("Credit");
  if (!author) {
    console.error(`Refused: Commons gives no author for ${title}. Check the file page by hand.`);
    return 1;
  }

  const ext = { "image/jpeg": "jpg", "image/png": "png", "image/webp": "webp", "image/svg+xml": "svg" }[info.mime];
  if (!ext) {
    console.error(`Unsupported file type ${info.mime}. Use a JPEG, PNG, WebP or SVG file.`);
    return 1;
  }
  const kebab = (name ?? title.replace(/^File:/, "").replace(/\.[a-z0-9]+$/i, ""))
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
  const file = `${kebab}.${ext}`;

  // SVGs are used as they are; other pictures come as Commons' resized copy (or the original if smaller).
  const download = ext === "svg" ? info.url : (info.thumburl ?? info.url);
  const bytes = Buffer.from(await (await fetch(download, { headers })).arrayBuffer());
  const dir = join(IMAGES_DIR, nodeId);
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, file), bytes);
  // Commons may send the original when it is small, or a big PNG: shrink and recompress.
  const size = await optimizeImage(join(dir, file), width);

  const quote = (s: string) => JSON.stringify(s);
  console.error(`Saved content/images/${nodeId}/${file} (${Math.round(size / 1024)} KB, at most ${width}px wide; original ${info.width}px).`);
  console.error("Open it and check it shows what the text needs. Then add this to the node's frontmatter and write the alt text:\n");
  console.log(`images:
    - file: ${file}
      alt: "TODO: describe what the picture shows, for someone who cannot see it."
      source: ${info.descriptionurl}
      author: ${quote(author)}
      license: ${allowed}`);
  console.error(`\nUse it in the text on its own line: ![same alt text](images/${file})`);
  return 0;
}

process.exitCode = await main();
