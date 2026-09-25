import { useState, useEffect, useRef } from "react";

/** Sections of the front page, reachable by scrolling there. */
const sections = [
    { label: "Konsult", href: "#consult" },
    { label: "Tjänster", href: "#services" },
    { label: "Om mig", href: "#about" },
    { label: "Kontakt", href: "#contact" },
];

/** Pages of their own, always plain links. */
const pages = [{ label: "Projekt", href: "/projekt/" }];

type Props = {
    /** "home" scrolls between sections; "page" links back to them. */
    variant?: "home" | "page";
    /** href of the current page, e.g. "/projekt/" — a prop, not
     *  window.location, because this renders at build time too */
    current?: string;
};

const Navbar = ({ variant = "home", current }: Props) => {
    const onHome = variant === "home";
    const [active, setActive] = useState(onHome ? "consult" : "");
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

            // only the front page has sections to spy on
            if (!onHome) return;
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
    }, [onHome]);

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
            aria-label="Huvudmeny"
        >
            <a
                href={onHome ? "#top" : "/"}
                className="brand"
                onClick={onHome ? (e) => scrollTo(e, "#top") : undefined}
            >
                Sluggan
                <svg className="brand-icon" width="24" height="24" viewBox="0 0 100 100" aria-hidden="true">
                    <path d="M78 55 A28 28 0 1 1 50 22" fill="none" stroke="currentColor" strokeWidth="9" strokeLinecap="round" />
                    <path d="M50 22 A16 16 0 1 1 34 38" fill="none" stroke="currentColor" strokeWidth="9" strokeLinecap="round" />
                </svg>
            </a>

            <button
                ref={toggleRef}
                type="button"
                className="nav-toggle"
                aria-label={open ? "Stäng meny" : "Öppna meny"}
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
                            href={onHome ? href : `/${href}`}
                            onClick={onHome ? (e) => scrollTo(e, href) : undefined}
                            className={active === href.slice(1) ? "active" : ""}
                            aria-current={active === href.slice(1) ? "true" : undefined}
                        >
                            {label}
                        </a>
                    </li>
                ))}
                {pages.map(({ label, href }) => {
                    const here = current === href;
                    return (
                        <li key={href}>
                            <a
                                href={href}
                                className={here ? "active" : ""}
                                aria-current={here ? "page" : undefined}
                            >
                                {label}
                            </a>
                        </li>
                    );
                })}
                <li className="nav-cta-item">
                    <a
                        href={onHome ? "#contact" : "/#contact"}
                        className="btn btn-primary nav-cta"
                        onClick={onHome ? (e) => scrollTo(e, "#contact") : undefined}
                    >
                        Kostnadsfri offert
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
