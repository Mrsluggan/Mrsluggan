import { photos } from "../data/photos.ts";
import sizes from "../data/photo-sizes.json";

// hashed urls for everything in the folder; photos.ts picks what's shown
const urls = import.meta.glob<string>("../assets/photos/*.webp", {
    eager: true,
    query: "?url",
    import: "default",
});

const urlFor = (file: string) => urls[`../assets/photos/${file}`];
// [width, height] per file
const sizeFor = (file: string): number[] | undefined =>
    (sizes as Record<string, number[]>)[file];

function Gallery() {
    // skip anything listed but missing rather than render a broken frame
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
                            /* first couple are above the fold */
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
