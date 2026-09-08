import { useState, useEffect } from "react";
import snail from "../assets/snail.svg";

const links = [
    { label: "about", href: "#about" },
    { label: "playground", href: "#playground" },
    { label: "experience", href: "#employment" },
    { label: "contact", href: "#contact" },
];

const Navbar = () => {
    const [active, setActive] = useState("about");
    const [scrolled, setScrolled] = useState(false);
    const [progress, setProgress] = useState(0);

    const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        document.getElementById(href.slice(1))?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        const onScroll = () => {
            const y = window.scrollY;
            setScrolled(y > 20);

            const docH = document.documentElement.scrollHeight - window.innerHeight;
            setProgress(docH > 0 ? (y / docH) * 100 : 0);

            const mark = y + window.innerHeight / 3;
            let current = links[0].href.slice(1);
            for (const { href } of links) {
                const el = document.getElementById(href.slice(1));
                if (el && el.offsetTop <= mark) current = href.slice(1);
            }
            setActive(current);
        };
        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll();
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <nav
            className={`navbar${scrolled ? " scrolled" : ""}`}
            style={{ ["--scroll" as string]: `${progress}%` }}
            role="navigation"
        >
            <a href="#about" className="brand" onClick={(e) => scrollTo(e, "#about")}>
                <img src={snail} alt="" />
                <span>
                    sluggan
                    <br />
                    <span className="brand-sub">// slow but steady</span>
                </span>
            </a>

            <ul className="nav-links">
                {links.map(({ label, href }) => (
                    <li key={href}>
                        <a
                            href={href}
                            onClick={(e) => scrollTo(e, href)}
                            className={active === href.slice(1) ? "active" : ""}
                            aria-current={active === href.slice(1) ? "true" : undefined}
                        >
                            {label}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
