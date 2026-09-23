function Hero() {
    return (
        <section id="top" className="hero">
            <div className="hero-inner reveal">
                <span className="hero-status">
                    <span className="status-dot" />
                    Based in Uppsala, Sweden
                </span>

                <h1>
                    Web and app development<br />
                    for <span className="accent">small businesses</span>.
                </h1>

                <p className="hero-intro">
                    I'm Eric, and I run Sluggan AB. I build websites and apps for small
                    businesses and private customers who need something that works, without
                    going through a big agency or a long sales process. Tell me what you're
                    trying to do, and we'll figure out together what actually makes sense to
                    build.
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
