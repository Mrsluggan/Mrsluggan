function Hero() {
    return (
        <section id="top" className="hero">
            <div className="hero-inner reveal">
                <span className="hero-status">
                    <span className="status-dot" />
                    Based in Uppsala, Sweden
                </span>

                <h1>
                    Straightforward software,<br />
                    built for <span className="accent">small businesses</span>.
                </h1>

                <p className="hero-intro">
                    Sluggan AB designs and builds websites, web apps and mobile apps for
                    small businesses and individuals — simple, dependable solutions,
                    without the agency overhead.
                </p>

                <div className="hero-actions">
                    <a
                        className="btn btn-primary"
                        href="#contact"
                        onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
                    >
                        Get in touch
                    </a>
                    <a
                        className="btn"
                        href="#services"
                        onClick={(e) => { e.preventDefault(); document.getElementById("services")?.scrollIntoView({ behavior: "smooth" }); }}
                    >
                        See what I do
                    </a>
                </div>

                <div className="hero-chips">
                    <span className="chip">Websites</span>
                    <span className="chip">Web applications</span>
                    <span className="chip">Mobile apps</span>
                </div>
            </div>
        </section>
    );
}

export default Hero;
