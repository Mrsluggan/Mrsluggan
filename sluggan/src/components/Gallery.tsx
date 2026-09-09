import { photos } from "../data/photos.ts";
import sizes from "../data/photo-sizes.json";

// Vite resolves every file in the folder to its hashed, cache-busted URL.
// Dropping a picture in src/assets/photos/ is enough for it to be found here;
// src/data/photos.ts decides which ones are shown, and in what order.
const urls = import.meta.glob<string>("../assets/photos/*.webp", {
    eager: true,
    query: "?url",
    import: "default",
});

const urlFor = (file: string) => urls[`../assets/photos/${file}`];
// photo-sizes.json holds [width, height] per file; TypeScript widens the
// JSON arrays to number[], which is all we need to index.
const sizeFor = (file: string): number[] | undefined =>
    (sizes as Record<string, number[]>)[file];

function Gallery() {
    // A picture listed in photos.ts but missing from the folder would render a
    // broken frame, so skip it rather than show a hole.
    const items = photos.filter((p) => urlFor(p.file));

    if (items.length === 0) {
        return <p className="gallery-empty">Nothing here yet.</p>;
    }

    return (
        <div className="gallery">
            {items.map((p, i) => {
                const size = sizeFor(p.file);
                return (
                    <figure className="shot" key={p.file}>
                        <img
                            src={urlFor(p.file)}
                            alt={p.alt}
                            width={size?.[0]}
                            height={size?.[1]}
                            /* the first couple are above the fold on most screens */
                            loading={i < 2 ? "eager" : "lazy"}
                            fetchPriority={i === 0 ? "high" : undefined}
                            decoding="async"
                        />
                        {(p.place || p.year) && (
                            <figcaption>
                                {p.place}
                                {p.place && p.year && " "}
                                {p.year && <span className="shot-year">· {p.year}</span>}
                            </figcaption>
                        )}
                    </figure>
                );
            })}
        </div>
    );
}

export default Gallery;
