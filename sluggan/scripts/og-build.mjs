#!/usr/bin/env node
/*
 * Renders the og-card html files to the link preview images in public/,
 * by screenshotting them in headless Chrome. Edit the html, re-run, commit
 * the image. Local only; the images are committed so CI doesn't need Chrome.
 */

import { execFileSync } from "node:child_process";
import { existsSync, rmSync, statSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = fileURLToPath(new URL("..", import.meta.url));
const CARDS = [
    { card: "scripts/og-card.html", out: "public/og.png" },
    { card: "scripts/og-card-photos.html", out: "public/og-photos.jpg" },
];
const TMP = join(root, "scripts/.og-raw.png");

// the size every scraper agrees on
const WIDTH = 1200;
const HEIGHT = 630;

const CHROMES = [
    process.env.CHROME,
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    "/Applications/Chromium.app/Contents/MacOS/Chromium",
    "/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge",
    "/usr/bin/google-chrome",
    "/usr/bin/chromium",
].filter(Boolean);

const chrome = CHROMES.find((p) => existsSync(p));
if (!chrome) {
    console.error(
        "No Chrome found. Install Google Chrome, or point CHROME at a binary:\n\n" +
        "  CHROME=/path/to/chrome npm run og:build\n"
    );
    process.exit(1);
}

const kb = (n) => `${Math.round(n / 1024)}KB`;

for (const { card, out } of CARDS) {
    execFileSync(chrome, [
        "--headless",
        "--disable-gpu",
        "--hide-scrollbars",
        // without this a HiDPI Mac renders at 2x
        "--force-device-scale-factor=1",
        `--window-size=${WIDTH},${HEIGHT}`,
        `--screenshot=${TMP}`,
        `file://${join(root, card)}`,
    ], { stdio: ["ignore", "ignore", "ignore"] });

    const raw = statSync(TMP).size;

    // flat colour palettes down fine; the photo wall needs jpeg
    const pipeline = sharp(TMP);
    const { width, height } = await (out.endsWith(".jpg")
        ? pipeline.jpeg({ quality: 82, mozjpeg: true })
        : pipeline.png({ compressionLevel: 9, palette: true, quality: 90 })
    ).toFile(join(root, out));

    rmSync(TMP, { force: true });

    if (width !== WIDTH || height !== HEIGHT) {
        console.error(`${out}: expected ${WIDTH}x${HEIGHT}, got ${width}x${height}.`);
        process.exit(1);
    }

    console.log(`${out}  ${width}×${height}  ${kb(raw)} → ${kb(statSync(join(root, out)).size)}`);
}
