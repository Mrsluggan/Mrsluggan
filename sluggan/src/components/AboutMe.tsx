import profileImg from "../assets/profile.webp";
import Typewriter from "./Typewriter.tsx";

const ROLES = [
    "software engineer",
    "C#/.NET & Java",
    "BLE/WiFi positioning",
    "slow but steady",
];

function AboutMe() {
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
                        <Typewriter words={ROLES} className="hero-typed" />
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
                        <img
                            src={profileImg}
                            alt="Eric Österberg"
                            width={800}
                            height={1166}
                            fetchPriority="high"
                            decoding="async"
                        />
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
