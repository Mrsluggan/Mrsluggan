#!/usr/bin/env node
/**
 * Turns whatever you dumped in photos-src/ into web-sized WebP in
 * src/assets/photos/, and records the dimensions in src/data/photo-sizes.json
 * so the gallery can reserve space and the page doesn't jump while loading.
 *
 *   npm run photos:build
 *
 * Originals stay in photos-src/, which is gitignored — the repo only ever
 * carries the converted files. Anything you want to keep but not publish goes
 * in photos-src/skipped/; only the top level is read.
 *
 * Two things worth knowing about what this does to a phone photo:
 *
 *   - EXIF is dropped, so GPS coordinates and timestamps aren't published.
 *   - EXIF orientation is *applied* first. A portrait shot off an iPhone is
 *     usually stored landscape with an "rotate 90°" tag; strip the tag without
 *     baking in the rotation and every one of those ends up on its side.
 */

import sharp from "sharp";
import { existsSync, mkdirSync, readdirSync, readFileSync, rmSync, statSync, writeFileSync } from "node:fs";
import { basename, extname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));
const SRC = join(root, "photos-src");
const OUT = join(root, "src/assets/photos");
const SIZES = join(root, "src/data/photo-sizes.json");
const MANIFEST = join(root, "src/data/photos.ts");

/**
 * Longest edge in the output. The gallery never shows a picture wider than
 * about 340 CSS px on desktop or 340 on a phone, so 1200 still leaves room for
 * a 3x display. Going higher just costs bytes nobody sees.
 */
const MAX_EDGE = 1200;
const QUALITY = 80;
const INPUTS = new Set([".jpg", ".jpeg", ".png", ".heic", ".heif", ".tif", ".tiff", ".webp"]);

const kb = (n) => `${Math.round(n / 1024)}KB`;

/** photos-src/My Photo 01.JPG -> my-photo-01.webp */
const webpName = (original) =>
    `${basename(original, extname(original))
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "")}.webp`;

if (!existsSync(SRC)) {
    mkdirSync(SRC, { recursive: true });
    console.log(`Created ${SRC}. Put your originals there and run this again.`);
    process.exit(0);
}

mkdirSync(OUT, { recursive: true });

const originals = readdirSync(SRC, { withFileTypes: true })
    .filter((e) => e.isFile() && INPUTS.has(extname(e.name).toLowerCase()))
    .map((e) => e.name);
if (originals.length === 0) {
    console.log("photos-src/ is empty — nothing to convert.");
    process.exit(0);
}

const sizes = existsSync(SIZES) ? JSON.parse(readFileSync(SIZES, "utf8")) : {};
const added = [];
let savedFrom = 0;
let savedTo = 0;

for (const original of originals) {
    const from = join(SRC, original);
    const name = webpName(original);
    const to = join(OUT, name);

    // .rotate() with no angle means "apply whatever the EXIF orientation says",
    // and it has to come before .resize() so the fit is measured on the upright
    // image. sharp writes no metadata unless asked, so EXIF stops here.
    const { width, height } = await sharp(from)
        .rotate()
        .resize({
            width: MAX_EDGE,
            height: MAX_EDGE,
            fit: "inside",
            withoutEnlargement: true,
        })
        .webp({ quality: QUALITY, effort: 6 })
        .toFile(to);

    const before = statSync(from).size;
    const after = statSync(to).size;
    savedFrom += before;
    savedTo += after;

    const isNew = !(name in sizes);
    sizes[name] = [width, height];
    if (isNew) added.push({ name, original });

    console.log(`  ${original} → ${name}  ${width}×${height}  ${kb(before)} → ${kb(after)}`);
}

// Take a picture out of photos-src/ and it should leave the site too, rather
// than lingering in the repo as an orphan nobody links to.
const expected = new Set(originals.map(webpName));
const removed = [];
for (const f of readdirSync(OUT).filter((f) => f.endsWith(".webp"))) {
    if (expected.has(f)) continue;
    rmSync(join(OUT, f));
    delete sizes[f];
    removed.push(f);
}

writeFileSync(SIZES, `${JSON.stringify(sizes, null, 2)}\n`);

console.log(
    `\n${originals.length} picture(s): ${kb(savedFrom)} → ${kb(savedTo)} ` +
    `(${Math.round((1 - savedTo / savedFrom) * 100)}% smaller)`
);

if (removed.length > 0) {
    console.log(`\nDropped ${removed.length} no longer in photos-src/:`);
    for (const f of removed) console.log(`  ${f}`);
    console.log(`\nRemove their rows from src/data/photos.ts too.`);
}

// Anything converted but not yet listed still won't show up — the manifest
// decides what's on the page, so print the rows to paste.
const manifest = existsSync(MANIFEST) ? readFileSync(MANIFEST, "utf8") : "";
const unlisted = added.filter(({ name }) => !manifest.includes(name));

if (unlisted.length > 0) {
    console.log(`\nAdd these to src/data/photos.ts to put them on the page:\n`);
    for (const { name } of unlisted) {
        console.log(`    {
        file: "${name}",
        alt: "TODO: describe what's in the picture",
        place: "TODO",
        year: ${new Date().getFullYear()},
    },`);
    }
}
