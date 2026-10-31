// Shrinks every picture in content/images/ to the sizes in scripts/lib/images.ts.
// Pictures with a close-up (zoom) keep up to 2,000 px; others up to 1,000 px.
//
//   npm run optimize-images

import { existsSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";
import { IMAGES_DIR, loadNodes, type Issue } from "./lib/content.ts";
import { MAX_WIDTH, MAX_WIDTH_ZOOM, optimizeImage } from "./lib/images.ts";

const issues: Issue[] = [];
const zoomed = new Set(
  loadNodes(issues).flatMap((n) => n.data.images.filter((i) => i.zoom).map((i) => `${n.data.id}/${i.file}`)),
);

if (existsSync(IMAGES_DIR)) {
  for (const id of readdirSync(IMAGES_DIR)) {
    for (const file of readdirSync(join(IMAGES_DIR, id))) {
      const path = join(IMAGES_DIR, id, file);
      const before = statSync(path).size;
      const after = await optimizeImage(path, zoomed.has(`${id}/${file}`) ? MAX_WIDTH_ZOOM : MAX_WIDTH);
      console.log(`${id}/${file}: ${Math.round(before / 1024)} KB → ${Math.round(after / 1024)} KB`);
    }
  }
}
