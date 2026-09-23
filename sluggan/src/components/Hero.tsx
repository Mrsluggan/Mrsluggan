function Hero() {
    return (
        <section id="top" className="hero">
            <div className="hero-inner reveal">
                <p className="hero-kicker">Sluggan AB · Uppsala, Sweden</p>

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
                        className="link-arrow"
                        href="#services"
                        onClick={(e) => { e.preventDefault(); document.getElementById("services")?.scrollIntoView({ behavior: "smooth" }); }}
                    >
                        See what I do <span>→</span>
                    </a>
                </div>

                <p className="hero-chips">
                    <span>Websites</span>
                    <span className="sep">·</span>
                    <span>Web applications</span>
                    <span className="sep">·</span>
                    <span>Mobile apps</span>
                </p>
            </div>
        </section>
    );
}

export default Hero;
