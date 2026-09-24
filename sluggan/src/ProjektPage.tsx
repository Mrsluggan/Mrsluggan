import './assets/App.css';
import Navbar from "./components/Navbar.tsx";
import Footer from "./components/Footer.tsx";
import { useReveal } from "./hooks/useReveal.ts";

const cases = [
    {
        title: "noQ — CMS för en ideell organisation",
        meta: "Volontärarbete · 2024",
        problem:
            "En ideell organisation som hjälper hemlösa i Stockholm behövde kunna publicera nyheter och artiklar på sin hemsida själva, utan att be en utvecklare hårdkoda varje inlägg.",
        role:
            "Byggde CMS:et från grunden, med ansvar för allt från datamodell till färdigt gränssnitt.",
        tech: "React, TypeScript, Tailwind CSS.",
        result:
            "Organisationen kunde själva skriva och publicera nyheter och artiklar, med stöd för formaterad text och bilder.",
    },
    {
        title: "sluggan.com",
        meta: "Eget projekt · 2026",
        problem:
            "Den gamla sajten var en personlig portfolio, inte en verksamhetssajt — behövde byggas om från grunden för att representera Sluggan.",
        role:
            "Design, copy, arkitektur och implementation — helt självständigt, från första wireframe till deploy.",
        tech: "React, TypeScript, Vite, statisk SSG-rendering, GitHub Pages, Web3Forms.",
        result:
            "Snabb, tillgänglig sajt utan tredjepartsberoenden för hosting; SEO-optimerad för svensk söktrafik.",
    },
];

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
                            efter hand som fler konsultprojekt blir klara.
                        </p>
                    </div>

                    <div className="case-list reveal">
                        {cases.map((c) => (
                            <article className="case-tile" key={c.title}>
                                <h2 className="case-title">{c.title}</h2>
                                <p className="case-meta">{c.meta}</p>
                                <div className="case-fields">
                                    <div className="case-field">
                                        <span className="cl">Problem</span>
                                        <p>{c.problem}</p>
                                    </div>
                                    <div className="case-field">
                                        <span className="cl">Min roll</span>
                                        <p>{c.role}</p>
                                    </div>
                                    <div className="case-field">
                                        <span className="cl">Teknik</span>
                                        <p>{c.tech}</p>
                                    </div>
                                    <div className="case-field">
                                        <span className="cl">Resultat</span>
                                        <p>{c.result}</p>
                                    </div>
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
