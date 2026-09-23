function Services() {
    return (
        <section id="services" className="section">
            <div className="reveal">
                <p className="eyebrow">Services</p>
                <h2 className="section-title">What I do</h2>
                <p className="section-lead">
                    Mostly these three things. If what you need doesn't fit neatly into
                    one of them, get in touch anyway — there's a good chance I can still
                    help, or at least point you in the right direction.
                </p>
            </div>

            <div className="services-bento reveal">
                <div className="tile tile-featured">
                    <span className="tile-num">01</span>
                    <h3 className="tile-title">Websites</h3>
                    <p className="tile-desc">
                        If you need a website for your business — something that explains
                        what you do, looks like it belongs to a real company, and you can
                        actually update yourself afterwards — this is usually where I can
                        help the most.
                    </p>
                </div>
                <div className="tile">
                    <span className="tile-num">02</span>
                    <h3 className="tile-title">Web applications</h3>
                    <p className="tile-desc">
                        Sometimes an off-the-shelf tool doesn't quite fit how your business
                        works. I build small, custom web apps to cover that gap — booking
                        systems, internal tools, customer portals.
                    </p>
                </div>
                <div className="tile">
                    <span className="tile-num">03</span>
                    <h3 className="tile-title">Mobile apps</h3>
                    <p className="tile-desc">
                        Apps for iOS and Android, usually for businesses whose customers
                        need something on their phone. Happy to talk through whether an
                        app is the right call before we start.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Services;
