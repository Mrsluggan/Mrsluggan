function Hero() {
    return (
        <section id="top" className="hero">
            <div className="hero-main reveal">
                <p className="hero-kicker">Sluggan AB · Uppsala, Sweden</p>

                <h1>
                    Web and app development
                    <span className="accent">for small businesses.</span>
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
            </div>

            <aside className="hero-aside reveal">
                <p className="hero-aside-label">What I build</p>
                <ul className="hero-aside-list">
                    <li><span className="n">01</span> Websites</li>
                    <li><span className="n">02</span> Web applications</li>
                    <li><span className="n">03</span> Mobile apps</li>
                </ul>
                <p className="hero-aside-note">
                    One person, direct communication, a fixed price agreed up front.
                </p>
            </aside>
        </section>
    );
}

export default Hero;
