import { useContent } from "../content.ts";

function About() {
    const t = useContent().about;

    return (
        <section id="about" className="section">
            <div className="reveal">
                <p className="eyebrow">{t.eyebrow}</p>
                <h2 className="section-title">{t.title}</h2>
                <p className="section-lead">{t.lead}</p>
            </div>

            <div className="about-grid reveal">
                <p className="about-bio">
                    {t.bioParagraphs.map((p, i) => (
                        <span key={p}>
                            {p}
                            {i < t.bioParagraphs.length - 1 && <><br /><br /></>}
                        </span>
                    ))}
                </p>

                <ul className="about-highlights">
                    {t.highlights.map((h) => (
                        <li key={h}>{h}</li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default About;
