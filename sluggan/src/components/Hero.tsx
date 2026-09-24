function Hero() {
    return (
        <section id="top" className="hero">
            <div className="hero-main reveal">
                <p className="hero-kicker">Sluggan · Uppsala, Sverige</p>

                <h1>
                    Jag bygger system,
                    <span className="accent">hemsidor och appar.</span>
                </h1>

                <p className="hero-intro">
                    Jag heter Eric och driver Sluggan i Uppsala. Jag jobbar med
                    systemutveckling — backend i C#/.NET och Java, fullstack med React
                    och TypeScript — och tar både konsultuppdrag hos företag och egna
                    projekt åt småföretag som behöver en hemsida eller app.
                </p>

                <div className="hero-actions">
                    <a
                        className="btn btn-primary"
                        href="#consult"
                        onClick={(e) => { e.preventDefault(); document.getElementById("consult")?.scrollIntoView({ behavior: "smooth" }); }}
                    >
                        Anlita mig som utvecklare
                    </a>
                    <a
                        className="link-arrow"
                        href="#services"
                        onClick={(e) => { e.preventDefault(); document.getElementById("services")?.scrollIntoView({ behavior: "smooth" }); }}
                    >
                        Jag behöver en hemsida <span>→</span>
                    </a>
                </div>
            </div>

            <aside className="hero-aside reveal">
                <p className="hero-aside-label">Det jag bygger</p>
                <ul className="hero-aside-list">
                    <li><span className="n">01</span> Systemutveckling & konsultuppdrag</li>
                    <li><span className="n">02</span> Hemsidor & webbapplikationer</li>
                    <li><span className="n">03</span> Mobilappar</li>
                </ul>
                <p className="hero-aside-note">
                    En person, direkt kontakt, och ett tydligt pris eller arvode
                    bestämt i förväg.
                </p>
            </aside>
        </section>
    );
}

export default Hero;
