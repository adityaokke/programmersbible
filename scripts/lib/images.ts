// Picture sizes for the site: big enough to be sharp, small enough for slow phone connections.

import { readFileSync, writeFileSync } from "node:fs";
import sharp from "sharp";

// Widest a picture needs to be: 1,000 px, or 2,000 px when the node shows a close-up of it.
export const MAX_WIDTH = 1000;
export const MAX_WIDTH_ZOOM = 2000;
// Above this size a picture is worth shrinking (checked by the validator).
export const MAX_BYTES = 450 * 1024;

/**
 * Shrinks a picture in place to at most `maxWidth` pixels wide and recompresses it.
 * SVGs are left as they are. Returns the new size in bytes.
 */
export async function optimizeImage(path: string, maxWidth: number): Promise<number> {
  if (path.endsWith(".svg")) return readFileSync(path).length;
  const input = readFileSync(path);
  let image = sharp(input).rotate(); // apply the camera's orientation before resizing
  const { width = 0 } = await image.metadata();
  // Already small enough: leave it alone. Recompressing a JPEG again only loses quality.
  if (width <= maxWidth && input.length <= MAX_BYTES) return input.length;
  if (width > maxWidth) image = image.resize({ width: maxWidth });
  const output = path.endsWith(".png")
    ? await image.png({ compressionLevel: 9, palette: true }).toBuffer()
    : path.endsWith(".webp")
      ? await image.webp({ quality: 80 }).toBuffer()
      : await image.jpeg({ quality: 80, mozjpeg: true, progressive: true }).toBuffer();
  // Keep the original if recompressing did not help.
  if (output.length < input.length || width > maxWidth) writeFileSync(path, output);
  return Math.min(output.length, input.length);
}
