import { useEffect, useState } from "react";
import profileImg from "../assets/profile.jpg";

const ROLES = [
    "backend developer",
    "Java & Spring Boot",
    "API architect",
    "slow but steady",
];

function useTypewriter(words: string[]) {
    const [text, setText] = useState("");
    const [wordIdx, setWordIdx] = useState(0);
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        const word = words[wordIdx];
        const done = !deleting && text === word;
        const empty = deleting && text === "";

        const delay = done ? 1600 : empty ? 300 : deleting ? 45 : 85;

        const t = setTimeout(() => {
            if (done) { setDeleting(true); return; }
            if (empty) { setDeleting(false); setWordIdx((i) => (i + 1) % words.length); return; }
            setText((cur) =>
                deleting ? cur.slice(0, -1) : word.slice(0, cur.length + 1)
            );
        }, delay);

        return () => clearTimeout(t);
    }, [text, deleting, wordIdx, words]);

    return text;
}

function AboutMe() {
    const typed = useTypewriter(ROLES);

    return (
        <section id="about" className="hero">
            <div className="hero-grid">
                <div className="hero-text reveal">
                    <span className="hero-status">
                        <span className="status-dot" />
                        Open to new opportunities
                    </span>

                    <h1>
                        Eric <span className="accent">Österberg</span>
                    </h1>

                    <p className="hero-tagline">
                        <span className="hero-typed">{typed}</span>
                    </p>

                    <p className="hero-intro">
                        I build backend systems that are boring in the best way — the kind
                        that just keep running. Java, Spring Boot, and databases that don't
                        fall over under load. <em>The simplest things are often the truest.</em>
                    </p>

                    <div className="hero-actions">
                        <a className="btn btn-primary" href="#projects"
                           onClick={(e) => { e.preventDefault(); document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }); }}>
                            ▸ See my work
                        </a>
                        <a className="btn" href="https://github.com/Mrsluggan" target="_blank" rel="noopener noreferrer">
                            GitHub ↗
                        </a>
                        <a className="btn" href="https://www.linkedin.com/in/eric-osterberg" target="_blank" rel="noopener noreferrer">
                            LinkedIn ↗
                        </a>
                    </div>

                    <div className="hero-chips">
                        <span className="chip"><span>›</span> Java</span>
                        <span className="chip"><span>›</span> Spring Boot</span>
                        <span className="chip"><span>›</span> PostgreSQL</span>
                        <span className="chip"><span>›</span> React + TS</span>
                        <span className="chip"><span>›</span> REST APIs</span>
                    </div>
                </div>

                <div className="hero-portrait reveal">
                    <div className="frame">
                        <img src={profileImg} alt="Eric Österberg" />
                    </div>
                    <span className="portrait-badge">HELLO, I'M SLUGGAN</span>
                </div>
            </div>

            <a href="#projects" className="scroll-hint"
               onClick={(e) => { e.preventDefault(); document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }); }}>
                <span>scroll</span>
                <span className="arrow">↓</span>
            </a>
        </section>
    );
}

export default AboutMe;
