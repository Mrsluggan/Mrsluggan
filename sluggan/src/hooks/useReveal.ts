import { useEffect } from "react";

/**
 * Adds an `in` class to every `.reveal` element once it scrolls into view,
 * so CSS can fade + slide it up. Runs once per element.
 */
export function useReveal() {
    useEffect(() => {
        const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
        if (!("IntersectionObserver" in window)) {
            els.forEach((el) => el.classList.add("in"));
            return;
        }
        const io = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("in");
                        io.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
        );
        els.forEach((el) => io.observe(el));
        return () => io.disconnect();
    }, []);
}
