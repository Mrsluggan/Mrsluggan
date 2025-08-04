import  { useState, useEffect } from "react";

const Navbar = () => {
    const [, setActiveIndex] = useState(0);

    const links = [
        { label: "About", href: "#about" },
        { label: "Projects", href: "#projects" },
        { label: "Employment", href: "#employment" },
        { label: "Contact", href: "#contact" },
    ];

    const handleClick = (
        e: React.MouseEvent<HTMLAnchorElement>,
        href: string,
        index: number) => {

        e.preventDefault();
        const id = href.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            setActiveIndex(index);
        }
    };

    useEffect(() => {
        const onScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight / 3;

            let currentIndex = 0;
            for (let i = 0; i < links.length; i++) {
                const section = document.getElementById(links[i].href.replace("#", ""));
                if (section) {
                    if (section.offsetTop <= scrollPosition) {
                        currentIndex = i;
                    }
                }
            }

            setActiveIndex(currentIndex);
        };

        window.addEventListener("scroll", onScroll);

        onScroll();

        return () => window.removeEventListener("scroll", onScroll);
    }, [links]);

    return (
        <nav
            role="navigation"
            className="navbar"
            style={{
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)',
                position: 'fixed',
                top: 0,
                width: '100%',
                height: '10%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <ul
                style={{
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                    listStyle: 'none',
                    width: '100%',
                    padding: 0,
                    margin: 0,
                }}
            >
                {links.map(({ label, href }, i) => (
                    <li key={i} style={{ flex: 1, textAlign: 'center' }}>
                        <a
                            href={href}
                            onClick={(e) => handleClick(e, href, i)}
                            style={{ color: 'white', textDecoration: 'none', display: 'block', padding: '10px 0' }}
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
