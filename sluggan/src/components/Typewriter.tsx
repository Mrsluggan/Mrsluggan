import { useEffect, useState } from "react";

function prefersReducedMotion() {
    return typeof window !== "undefined" &&
        window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
}

type Props = {
    words: string[];
    className?: string;
};

/**
 * Types `words` out one at a time, then backspaces and moves on.
 *
 * Lives in its own component so the ~85ms tick only re-renders this span
 * instead of the whole hero. The animated text is hidden from assistive
 * tech — a letter-by-letter live stream is unusable — and the full list is
 * exposed once, statically, instead.
 */
function Typewriter({ words, className }: Props) {
    const reduced = prefersReducedMotion();
    const [text, setText] = useState(reduced ? words[0] : "");
    const [wordIdx, setWordIdx] = useState(0);
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        if (reduced) return;
        const word = words[wordIdx];
        const done = !deleting && text === word;
        const empty = deleting && text === "";

        const delay = done ? 1600 : empty ? 300 : deleting ? 45 : 85;

        const t = setTimeout(() => {
            if (done) { setDeleting(true); return; }
            if (empty) { setDeleting(false); setWordIdx((i) => (i + 1) % words.length); return; }
            setText((cur) =>
                deleting ? cur.slice(0, -1) : word.slice(0, cur.length + 1)
            );
        }, delay);

        return () => clearTimeout(t);
    }, [text, deleting, wordIdx, words, reduced]);

    return (
        <>
            <span className={className} aria-hidden="true">{text}</span>
            <span className="sr-only">{words.join(" · ")}</span>
        </>
    );
}

export default Typewriter;
