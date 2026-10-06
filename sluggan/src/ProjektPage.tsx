import './assets/App.css';
import Navbar from "./components/Navbar.tsx";
import Footer from "./components/Footer.tsx";
import { useReveal } from "./hooks/useReveal.ts";
import { projects } from "./generated/projects.ts";
import { projectUrl } from "./projects.ts";

function ProjektPage() {
    useReveal();

    return (
        <>
            <a href="#main" className="skip-link">Hoppa till innehållet</a>
            <Navbar variant="page" current="/projekt/" />
            <main id="main" tabIndex={-1}>
                <section className="section">
                    <div className="reveal">
                        <p className="eyebrow">Projekt</p>
                        <h1 className="section-title">Vad jag byggt</h1>
                        <p className="section-lead">
                            Ett axplock av vad jag jobbat med. Fler exempel läggs till här
                            efter hand som fler projekt blir klara.
                        </p>
                    </div>

                    <div className="case-list reveal">
                        {projects.map((p) => (
                            <article className={p.cover ? "case-card" : "case-card no-cover"} key={p.slug}>
                                {p.cover && (
                                    <img
                                        className="case-card-img"
                                        src={p.cover.src}
                                        srcSet={p.cover.srcset}
                                        sizes="(max-width: 780px) 100vw, 560px"
                                        width={p.cover.width}
                                        height={p.cover.height}
                                        alt=""
                                        loading="lazy"
                                        decoding="async"
                                    />
                                )}
                                <div className="case-card-text">
                                    <p className="case-meta">{[p.kind, p.year].filter(Boolean).join(" · ")}</p>
                                    <h2 className="case-title">
                                        <a href={projectUrl(p)} className="case-card-link">{p.title}</a>
                                    </h2>
                                    <p className="case-summary">{p.summary}</p>
                                    {p.tech.length > 0 && <p className="case-tech">{p.tech.join(" · ")}</p>}
                                    <span className="link-arrow" aria-hidden="true">Läs mer <span>→</span></span>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}

export default ProjektPage;
