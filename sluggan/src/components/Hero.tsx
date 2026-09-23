import { useContent } from "../content.ts";

function Hero() {
    const t = useContent().hero;

    return (
        <section id="top" className="hero">
            <div className="hero-main reveal">
                <p className="hero-kicker">{t.kicker}</p>

                <h1>
                    {t.h1a}
                    <span className="accent">{t.h1b}</span>
                </h1>

                <p className="hero-intro">{t.intro}</p>

                <div className="hero-actions">
                    <a
                        className="btn btn-primary"
                        href="#contact"
                        onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
                    >
                        {t.ctaPrimary}
                    </a>
                    <a
                        className="link-arrow"
                        href="#services"
                        onClick={(e) => { e.preventDefault(); document.getElementById("services")?.scrollIntoView({ behavior: "smooth" }); }}
                    >
                        {t.ctaSecondary} <span>→</span>
                    </a>
                </div>
            </div>

            <aside className="hero-aside reveal">
                <p className="hero-aside-label">{t.asideLabel}</p>
                <ul className="hero-aside-list">
                    {t.asideItems.map((item, i) => (
                        <li key={item}><span className="n">{String(i + 1).padStart(2, "0")}</span> {item}</li>
                    ))}
                </ul>
                <p className="hero-aside-note">{t.asideNote}</p>
            </aside>
        </section>
    );
}

export default Hero;
