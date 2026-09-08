import { useEffect, useState } from "react";
import profileImg from "../assets/profile.jpg";

const ROLES = [
    "software engineer",
    "C#/.NET & Java",
    "BLE/WiFi positioning",
    "slow but steady",
];

function prefersReducedMotion() {
    return typeof window !== "undefined" &&
        window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
}

function useTypewriter(words: string[]) {
    const reduced = prefersReducedMotion();
    const [text, setText] = useState(reduced ? words[0] : "");
    const [wordIdx, setWordIdx] = useState(0);
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        if (reduced) return;
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
    }, [text, deleting, wordIdx, words, reduced]);

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
                        Software Engineer at Crystal Alarm · Uppsala
                    </span>

                    <h1>
                        Eric <span className="accent">Österberg</span>
                    </h1>

                    <p className="hero-tagline">
                        <span className="hero-typed">{typed}</span>
                    </p>

                    <p className="hero-intro">
                        I work on the positioning engines behind Crystal Alarm's alarm and
                        security products: indoor BLE and WiFi positioning, the fallback
                        logic between them, API integrations, and some iOS and Android.
                        Mostly C#/.NET these days, Java before that.
                    </p>
                    <p className="hero-motto"><em>The simplest things are often the truest.</em></p>

                    <div className="hero-actions">
                        <a className="btn btn-primary" href="#playground"
                           onClick={(e) => { e.preventDefault(); document.getElementById("playground")?.scrollIntoView({ behavior: "smooth" }); }}>
                            ▸ Poke around
                        </a>
                        <a className="btn" href="https://github.com/Mrsluggan" target="_blank" rel="noopener noreferrer">
                            GitHub ↗
                        </a>
                        <a className="btn" href="https://www.linkedin.com/in/eric-osterberg" target="_blank" rel="noopener noreferrer">
                            LinkedIn ↗
                        </a>
                    </div>

                    <div className="hero-chips">
                        <span className="chip"><span>›</span> C# / .NET</span>
                        <span className="chip"><span>›</span> Spring Boot</span>
                        <span className="chip"><span>›</span> BLE + WiFi positioning</span>
                        <span className="chip"><span>›</span> Cisco Spaces API</span>
                        <span className="chip"><span>›</span> React + TS</span>
                    </div>
                </div>

                <div className="hero-portrait reveal">
                    <div className="frame">
                        <img src={profileImg} alt="Eric Österberg" />
                    </div>
                    <span className="portrait-badge">HELLO, I'M SLUGGAN</span>
                </div>
            </div>

            <a href="#playground" className="scroll-hint"
               onClick={(e) => { e.preventDefault(); document.getElementById("playground")?.scrollIntoView({ behavior: "smooth" }); }}>
                <span>scroll</span>
                <span className="arrow">↓</span>
            </a>
        </section>
    );
}

export default AboutMe;
