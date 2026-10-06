import './assets/App.css';
import Navbar from "./components/Navbar.tsx";
import Footer from "./components/Footer.tsx";
import { useReveal } from "./hooks/useReveal.ts";
import { projects } from "./generated/projects.ts";
import { projectUrl, type Project } from "./projects.ts";

/** One case study, /projekt/<slug>/. */
function ProjectPage({ project: p }: { project: Project }) {
    useReveal();
    const i = projects.findIndex((x) => x.slug === p.slug);
    const prev = projects[i - 1];
    const next = projects[i + 1];

    const facts: [string, React.ReactNode][] = [];
    if (p.client) facts.push(["Kund", p.client]);
    if (p.role) facts.push(["Min roll", p.role]);
    if (p.tech.length) facts.push(["Teknik", p.tech.join(", ")]);
    if (p.link) {
        facts.push(["Länk", (
            <a href={p.link} target="_blank" rel="noopener">
                {p.link.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "")} ↗
            </a>
        )]);
    }

    return (
        <>
            <a href="#main" className="skip-link">Hoppa till innehållet</a>
            <Navbar variant="page" current="/projekt/" />
            <main id="main" tabIndex={-1}>
                <article className="section case-page">
                    <header className="case-head reveal">
                        <p className="eyebrow">
                            <a href="/projekt/" className="case-back">Projekt</a>
                            {[p.kind, p.year].filter(Boolean).map((s) => <span key={s}> · {s}</span>)}
                        </p>
                        <h1 className="section-title">{p.title}</h1>
                        <p className="section-lead">{p.summary}</p>
                    </header>

                    {facts.length > 0 && (
                        <dl className="case-facts reveal">
                            {facts.map(([k, v]) => (
                                <div key={k}><dt>{k}</dt><dd>{v}</dd></div>
                            ))}
                        </dl>
                    )}

                    {p.cover && (
                        <figure className="case-cover">
                            <img
                                src={p.cover.src}
                                srcSet={p.cover.srcset}
                                sizes="(max-width: 1200px) 100vw, 1160px"
                                width={p.cover.width}
                                height={p.cover.height}
                                alt={`Skärmbild från ${p.client || p.title}`}
                                fetchPriority="high"
                            />
                        </figure>
                    )}

                    <div className="case-body" dangerouslySetInnerHTML={{ __html: p.html }} />

                    <aside className="case-cta">
                        <div>
                            <h2>Vill du ha något liknande?</h2>
                            <p>Berätta vad du behöver, så får du en kostnadsfri offert med fast pris.</p>
                        </div>
                        <a href="/#contact" className="btn">Kostnadsfri offert</a>
                    </aside>

                    <nav className="case-nav" aria-label="Fler projekt">
                        {prev ? <a href={projectUrl(prev)}>← {prev.title}</a> : <a href="/projekt/">← Alla projekt</a>}
                        {next && <a href={projectUrl(next)} className="case-nav-next">{next.title} →</a>}
                    </nav>
                </article>
            </main>
            <Footer />
        </>
    );
}

export default ProjectPage;
