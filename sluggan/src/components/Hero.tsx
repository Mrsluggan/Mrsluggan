function Hero() {
    return (
        <section id="top" className="hero">
            <div className="hero-main reveal">
                <p className="hero-kicker">Sluggan AB · Uppsala, Sverige</p>

                <h1>
                    Webb- och apputveckling
                    <span className="accent">för småföretag.</span>
                </h1>

                <p className="hero-intro">
                    Jag heter Eric och driver Sluggan AB. Jag bygger webbplatser och appar
                    åt småföretag och privatpersoner som vill ha något som fungerar, utan
                    att gå via en stor byrå eller en lång säljprocess. Berätta vad du vill
                    göra, så funderar vi tillsammans ut vad som faktiskt är vettigt att
                    bygga.
                </p>

                <div className="hero-actions">
                    <a
                        className="btn btn-primary"
                        href="#contact"
                        onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
                    >
                        Få en kostnadsfri offert
                    </a>
                    <a
                        className="link-arrow"
                        href="#services"
                        onClick={(e) => { e.preventDefault(); document.getElementById("services")?.scrollIntoView({ behavior: "smooth" }); }}
                    >
                        Se vad jag gör <span>→</span>
                    </a>
                </div>
            </div>

            <aside className="hero-aside reveal">
                <p className="hero-aside-label">Det jag bygger</p>
                <ul className="hero-aside-list">
                    <li><span className="n">01</span> Webbplatser</li>
                    <li><span className="n">02</span> Webbapplikationer</li>
                    <li><span className="n">03</span> Mobilappar</li>
                </ul>
                <p className="hero-aside-note">
                    En person, direkt kontakt, kostnadsfri offert och ett fast pris som
                    bestäms i förväg.
                </p>
            </aside>
        </section>
    );
}

export default Hero;
