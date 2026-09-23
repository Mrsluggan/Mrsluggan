import { useState, useEffect, useRef } from "react";

const sections = [
    { label: "Tjänster", href: "#services" },
    { label: "Så funkar det", href: "#process" },
    { label: "Om mig", href: "#about" },
    { label: "Frågor", href: "#faq" },
    { label: "Kontakt", href: "#contact" },
];

const Navbar = () => {
    const [active, setActive] = useState("services");
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);
    const navRef = useRef<HTMLElement>(null);
    const toggleRef = useRef<HTMLButtonElement>(null);

    const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        setOpen(false);
        document.getElementById(href.slice(1))?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        const onScroll = () => {
            const y = window.scrollY;
            setScrolled(y > 20);

            const mark = y + window.innerHeight / 3;
            let current = sections[0].href.slice(1);
            for (const { href } of sections) {
                const el = document.getElementById(href.slice(1));
                if (el && el.offsetTop <= mark) current = href.slice(1);
            }
            setActive(current);
        };
        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll();
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // escape or a click outside closes the mobile menu
    useEffect(() => {
        if (!open) return;

        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                setOpen(false);
                toggleRef.current?.focus();
            }
        };
        const onPointerDown = (e: PointerEvent) => {
            if (!navRef.current?.contains(e.target as Node)) setOpen(false);
        };

        document.addEventListener("keydown", onKeyDown);
        document.addEventListener("pointerdown", onPointerDown);
        return () => {
            document.removeEventListener("keydown", onKeyDown);
            document.removeEventListener("pointerdown", onPointerDown);
        };
    }, [open]);

    return (
        <nav
            ref={navRef}
            className={`navbar${scrolled ? " scrolled" : ""}${open ? " menu-open" : ""}`}
            aria-label="Main"
        >
            <a href="#top" className="brand" onClick={(e) => scrollTo(e, "#top")}>
                Sluggan <span className="brand-mark">AB</span>
            </a>

            <button
                ref={toggleRef}
                type="button"
                className="nav-toggle"
                aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}
                aria-controls="nav-menu"
                onClick={() => setOpen((o) => !o)}
            >
                <span className="bars" aria-hidden="true" />
            </button>

            <ul id="nav-menu" className={`nav-links${open ? " open" : ""}`}>
                {sections.map(({ label, href }) => (
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
                <li className="nav-cta-item">
                    <a
                        href="#contact"
                        className="btn btn-primary nav-cta"
                        onClick={(e) => scrollTo(e, "#contact")}
                    >
                        Kostnadsfri offert
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
