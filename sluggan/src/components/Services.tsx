import { useContent } from "../content.ts";

function Services() {
    const t = useContent().services;

    return (
        <section id="services" className="section">
            <div className="reveal">
                <p className="eyebrow">{t.eyebrow}</p>
                <h2 className="section-title">{t.title}</h2>
                <p className="section-lead">{t.lead}</p>
            </div>

            <div className="services-bento reveal">
                {t.tiles.map((tile, i) => (
                    <div className={`tile${i === 0 ? " tile-featured" : ""}`} key={tile.title}>
                        <span className="tile-num">{String(i + 1).padStart(2, "0")}</span>
                        <h3 className="tile-title">{tile.title}</h3>
                        <p className="tile-desc">{tile.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Services;
