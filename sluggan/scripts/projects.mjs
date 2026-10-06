#!/usr/bin/env node
/*
 * Turns content/projekt/<slug>/index.md (+ images next to it) into
 * src/generated/projects.ts and optimised images in public/img/projekt/<slug>/.
 * Runs before dev and build. Both outputs are generated, so they're gitignored.
 *
 * index.md starts with a frontmatter block:
 *
 *   ---
 *   titel: noQ — CMS för en ideell organisation
 *   kort: En mening som syns i listan och som sökresultatets beskrivning.
 *   kund: noQ
 *   typ: Volontärarbete
 *   år: 2024
 *   roll: Utvecklare, från datamodell till gränssnitt
 *   teknik: React, TypeScript, Tailwind CSS
 *   länk: https://example.com          (valfri)
 *   omslag: omslag.png                 (valfri, bild i samma mapp)
 *   ---
 *
 * The body is Markdown. An image alone on a line becomes a figure with its
 * alt text as caption; several images on consecutive lines become a gallery.
 */

import { existsSync, mkdirSync, readdirSync, readFileSync, rmSync, statSync, writeFileSync } from "node:fs";
import { join, parse } from "node:path";
import { fileURLToPath } from "node:url";
import { Marked } from "marked";
import sharp from "sharp";

const root = fileURLToPath(new URL("..", import.meta.url));
const CONTENT = join(root, "content/projekt");
const IMG_OUT = join(root, "public/img/projekt");
const TS_OUT = join(root, "src/generated/projects.ts");
const WIDTHS = [800, 1600];
const IMAGE_EXT = /\.(png|jpe?g|webp|avif)$/i;

const fail = (msg) => {
    console.error(`projects: ${msg}`);
    process.exit(1);
};

function frontmatter(source, file) {
    const m = source.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
    if (!m) fail(`${file} saknar frontmatter (--- … ---) överst`);
    const data = {};
    for (const line of m[1].split(/\r?\n/)) {
        if (!line.trim() || line.trim().startsWith("#")) continue;
        const i = line.indexOf(":");
        if (i < 0) fail(`${file}: kan inte tolka raden "${line}"`);
        data[line.slice(0, i).trim()] = line.slice(i + 1).trim();
    }
    return { data, body: source.slice(m[0].length) };
}

/** Writes 800/1600 px webp versions (never upscaled) and returns what <img> needs. */
async function optimise(slug, file) {
    const src = join(CONTENT, slug, file);
    if (!existsSync(src)) fail(`${slug}: bilden "${file}" finns inte i mappen`);
    const name = parse(file).name;
    const meta = await sharp(src).metadata();
    const outDir = join(IMG_OUT, slug);
    mkdirSync(outDir, { recursive: true });

    const widths = WIDTHS.filter((w) => w < meta.width);
    if (!widths.length || widths.at(-1) < Math.min(meta.width, WIDTHS.at(-1))) widths.push(Math.min(meta.width, WIDTHS.at(-1)));
    const variants = [];
    for (const w of widths) {
        const out = `${name}-${w}.webp`;
        await sharp(src).resize({ width: w }).webp({ quality: 82 }).toFile(join(outDir, out));
        variants.push({ w, url: `/img/projekt/${slug}/${out}` });
    }
    const largest = variants.at(-1);
    return {
        src: largest.url,
        srcset: variants.map((v) => `${v.url} ${v.w}w`).join(", "),
        width: largest.w,
        height: Math.round((meta.height / meta.width) * largest.w),
        source: src,
    };
}

/** 1200×630 jpg for link previews (LinkedIn, Slack, iMessage). */
async function ogImage(slug, cover) {
    const out = `/img/projekt/${slug}/og.jpg`;
    await sharp(cover.source)
        .resize(1200, 630, { fit: "cover", position: "top" })
        .jpeg({ quality: 82 })
        .toFile(join(root, "public", out));
    return out;
}

const escapeAttr = (s) => String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

function imgTag(img, alt, sizes) {
    return `<img src="${img.src}" srcset="${img.srcset}" sizes="${sizes}" width="${img.width}" height="${img.height}" alt="${escapeAttr(alt)}" loading="lazy" decoding="async">`;
}

async function renderBody(slug, body) {
    // Resolve every image first; marked's renderer is synchronous.
    const images = new Map();
    for (const [, file] of body.matchAll(/!\[[^\]]*\]\(([^)\s]+)/g)) {
        if (/^https?:/.test(file) || images.has(file)) continue;
        images.set(file, await optimise(slug, file));
    }

    const marked = new Marked({
        renderer: {
            paragraph({ tokens }) {
                const imgs = tokens.filter((t) => t.type === "image");
                const onlyImages = imgs.length > 0 && tokens.every((t) => t.type === "image" || (t.type === "text" && !t.text.trim()) || t.type === "br");
                if (!onlyImages) return `<p>${this.parser.parseInline(tokens)}</p>\n`;
                const figures = imgs.map((t) => {
                    const img = images.get(t.href);
                    const tag = img
                        ? imgTag(img, t.text, imgs.length > 1 ? "(max-width: 700px) 100vw, 560px" : "(max-width: 900px) 100vw, 900px")
                        : `<img src="${escapeAttr(t.href)}" alt="${escapeAttr(t.text)}" loading="lazy">`;
                    const caption = t.title || t.text;
                    return `<figure>${tag}${caption ? `<figcaption>${escapeAttr(caption)}</figcaption>` : ""}</figure>`;
                });
                return imgs.length > 1
                    ? `<div class="case-gallery">${figures.join("")}</div>\n`
                    : `${figures[0]}\n`;
            },
            link({ href, title, tokens }) {
                const external = /^https?:/.test(href);
                const t = title ? ` title="${escapeAttr(title)}"` : "";
                const ext = external ? ' target="_blank" rel="noopener"' : "";
                return `<a href="${escapeAttr(href)}"${t}${ext}>${this.parser.parseInline(tokens)}</a>`;
            },
        },
    });
    return marked.parse(body);
}

// ---------- main ----------

rmSync(IMG_OUT, { recursive: true, force: true });
mkdirSync(join(root, "src/generated"), { recursive: true });

const slugs = existsSync(CONTENT)
    ? readdirSync(CONTENT).filter((d) => statSync(join(CONTENT, d)).isDirectory() && !d.startsWith("_"))
    : [];

const projects = [];
for (const slug of slugs) {
    if (!/^[a-z0-9-]+$/.test(slug)) fail(`mappnamnet "${slug}" får bara innehålla a–z, 0–9 och bindestreck (det blir adressen)`);
    const file = join(CONTENT, slug, "index.md");
    if (!existsSync(file)) fail(`${slug}/ saknar index.md`);
    const { data, body } = frontmatter(readFileSync(file, "utf8"), `${slug}/index.md`);
    for (const key of ["titel", "kort", "år"]) {
        if (!data[key]) fail(`${slug}/index.md saknar "${key}:" i frontmatter`);
    }

    const cover = data.omslag ? await optimise(slug, data.omslag) : null;
    projects.push({
        slug,
        title: data.titel,
        summary: data.kort,
        client: data.kund ?? "",
        kind: data.typ ?? "",
        year: data["år"],
        role: data.roll ?? "",
        tech: (data.teknik ?? "").split(",").map((s) => s.trim()).filter(Boolean),
        link: data["länk"] ?? "",
        cover: cover && { src: cover.src, srcset: cover.srcset, width: cover.width, height: cover.height },
        ogImage: cover ? await ogImage(slug, cover) : "",
        html: await renderBody(slug, body),
    });
}

// Newest first; same year keeps folder order.
projects.sort((a, b) => Number(b.year) - Number(a.year));

writeFileSync(
    TS_OUT,
    `// Generated by scripts/projects.mjs from content/projekt/. Don't edit by hand.\n` +
    `import type { Project } from "../projects.ts";\n\n` +
    `export const projects: Project[] = ${JSON.stringify(projects, null, 2)};\n`,
);
console.log(`  projects: ${projects.map((p) => p.slug).join(", ") || "(inga)"}`);
