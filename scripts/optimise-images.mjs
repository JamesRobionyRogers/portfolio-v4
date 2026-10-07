// Writes a resized .webp next to every PNG/JPG in public/images and top-level public/.
// Usage: npm run optimise-images
import { readdir, stat } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const PUBLIC = path.resolve(import.meta.dirname, "..", "public");
const SOURCE = /\.(png|jpe?g)$/i;
const QUALITY = 80;

// Portraits render small, so they get a tighter cap than screenshots.
const maxWidth = (file) =>
  file.includes(`${path.sep}assets${path.sep}`) || /selfportrait/i.test(file) ? 1000 : 1600;

async function listImages(dir, recursive) {
  const files = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory() && recursive) files.push(...(await listImages(full, true)));
    else if (entry.isFile() && SOURCE.test(entry.name)) files.push(full);
  }
  return files;
}

const mtime = (file) => stat(file).then((s) => s.mtimeMs, () => 0);
const kb = (bytes) => `${Math.round(bytes / 1024)}KB`;

const sources = [
  ...(await listImages(PUBLIC, false)),
  ...(await listImages(path.join(PUBLIC, "images"), true)),
];
let before = 0;
let after = 0;

for (const src of sources) {
  const out = src.replace(SOURCE, ".webp");
  if ((await mtime(out)) > (await mtime(src))) continue;

  // Root-level PNGs are flat text graphics: keep full size and go lossless so edges stay crisp.
  const graphic = path.dirname(src) === PUBLIC;
  // rotate() applies EXIF orientation before metadata is stripped.
  const image = sharp(src).rotate();
  if (!graphic) image.resize({ width: maxWidth(src), withoutEnlargement: true });
  const info = await image.webp(graphic ? { lossless: true } : { quality: QUALITY }).toFile(out);

  const size = (await stat(src)).size;
  before += size;
  after += info.size;
  console.log(`${path.relative(PUBLIC, src)}: ${kb(size)} -> ${kb(info.size)}`);
}

console.log(before ? `Total: ${kb(before)} -> ${kb(after)}` : "Nothing to do.");
