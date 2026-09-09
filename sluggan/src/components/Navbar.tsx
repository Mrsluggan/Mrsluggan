import { useState, useEffect, useRef } from "react";
import snail from "../assets/snail.svg";

/** Sections of the front page. */
const sections = [
    { label: "about", href: "#about" },
    { label: "playground", href: "#playground" },
    { label: "experience", href: "#employment" },
    { label: "contact", href: "#contact" },
];

/** Pages of their own, always plain links. */
const pages = [{ label: "photos", href: "/photos/" }];

type Props = {
    /** "home" scrolls between sections; "sub" links back to them. */
    variant?: "home" | "sub";
    /** href of the current page. a prop, not window.location, because this
     *  renders at build time where there is no window */
    current?: string;
};

const Navbar = ({ variant = "home", current }: Props) => {
    const onHome = variant === "home";
    const [active, setActive] = useState(onHome ? "about" : "");
    const [scrolled, setScrolled] = useState(false);
    const [progress, setProgress] = useState(0);
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

            const docH = document.documentElement.scrollHeight - window.innerHeight;
            setProgress(docH > 0 ? (y / docH) * 100 : 0);

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
            style={{ ["--scroll" as string]: `${progress}%` }}
            aria-label="Main"
        >
            <a
                href={onHome ? "#about" : "/"}
                className="brand"
                onClick={onHome ? (e) => scrollTo(e, "#about") : undefined}
            >
                <img src={snail} alt="" />
                <span>
                    sluggan
                    <br />
                    <span className="brand-sub">// slow but steady</span>
                </span>
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
            </ul>
        </nav>
    );
};

export default Navbar;
