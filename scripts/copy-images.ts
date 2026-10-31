// Copies content/images/<node-id>/ to public/images/<node-id>/ so the site can serve them.
// Images live next to the content (same license); public/images is generated and git-ignored.

import { cpSync, existsSync, rmSync } from "node:fs";
import { join } from "node:path";
import { IMAGES_DIR, ROOT } from "./lib/content.ts";

const target = join(ROOT, "public", "images");
rmSync(target, { recursive: true, force: true });
if (existsSync(IMAGES_DIR)) cpSync(IMAGES_DIR, target, { recursive: true });
