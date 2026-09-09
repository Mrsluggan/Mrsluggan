import { useEffect, useRef, useState } from "react";

type Line = { kind: "in" | "out" | "sys"; text: string };

const SKILLS: { group: string; items: string[] }[] = [
    { group: "Backend", items: ["C#", ".NET", "WCF", "Spring Boot", "Java", "MySQL"] },
    { group: "Frontend", items: ["React", "TypeScript", "JavaScript", "Bootstrap"] },
    { group: "Tools", items: ["Git", "Azure DevOps", "GitLab CI/CD", "Docker", "Automated tests"] },
    { group: "Integrations", items: ["BLE", "WiFi positioning", "Cisco Spaces API", "GNSS"] },
    { group: "Other", items: ["AI-assisted dev", "Linux", "AWS", "Code review"] },
];

const BANNER = [
    "sluggan.sh — a small, honest shell 🐌",
    "Type `help` and press enter. Try `sudo make coffee`.",
];

function runCommand(raw: string): { lines: Line[]; clear?: boolean } {
    const cmd = raw.trim().toLowerCase();
    if (!cmd) return { lines: [] };

    const out = (text: string): Line => ({ kind: "out", text });

    switch (cmd) {
        case "help":
            return { lines: [
                out("available commands:"),
                out("  whoami       who is this snail"),
                out("  skills       what I work with"),
                out("  experience   where I've worked"),
                out("  now          what I'm doing today"),
                out("  contact      how to reach me"),
                out("  github       open my github"),
                out("  linkedin     open my linkedin"),
                out("  snail        🐌"),
                out("  clear        wipe the screen"),
            ]};
        case "whoami":
            return { lines: [
                out("Eric Österberg, software engineer in Uppsala."),
                out("4+ years in software and IT. C#/.NET and Java."),
                out("Prefers small, reliable systems over clever ones."),
            ]};
        case "skills":
        case "stack":
            return { lines: SKILLS.map((s) => out(`${s.group.padEnd(13)} ${s.items.join(", ")}`)) };
        case "experience":
        case "cv":
            return { lines: [
                out("Software Engineer      Crystal Alarm     Aug 2025 – now"),
                out("Software Dev (LIA)     Omda / IDATA AB   Nov 2024 – Jun 2025"),
                out("Software Dev (vol.)    noQ               Jan 2024 – Oct 2024"),
                out("IT Technician          Uppsala Kommun    2021 – 2023"),
                out("→ scroll to 'experience' for the full story."),
            ]};
        case "now":
            return { lines: [
                out("@ Crystal Alarm: indoor positioning (BLE + WiFi) with"),
                out("fallback between sources, Cisco Spaces API, iOS/Android."),
                out("Built a Claude-powered code-review pipeline in GitLab CI/CD."),
            ]};
        case "contact":
            return { lines: [
                out("email     ericflyger@gmail.com"),
                out("linkedin  in/eric-osterberg"),
                out("github    @Mrsluggan"),
                out("→ or use the form at the bottom of the page."),
            ]};
        case "github":
            window.open("https://github.com/Mrsluggan", "_blank", "noopener");
            return { lines: [out("opening github.com/Mrsluggan …")] };
        case "linkedin":
            window.open("https://www.linkedin.com/in/eric-osterberg", "_blank", "noopener");
            return { lines: [out("opening linkedin.com/in/eric-osterberg …")] };
        case "snail":
            return { lines: [
                out("     _____"),
                out("    /     \\      slow is smooth,"),
                out("   | () () |     smooth is fast."),
                out("    \\  ^  /__/"),
                out("     ‾‾‾‾‾‾"),
            ]};
        case "sudo make coffee":
        case "sudo":
            return { lines: [out("nice try. snails don't do root — we do patience.")] };
        case "ls":
            return { lines: [out("about  skills  experience  contact  secrets/")] };
        case "cat secrets/":
        case "cat secrets":
            return { lines: [out("permission denied — my car already has a blown gasket, that's enough chaos.")] };
        case "clear":
            return { lines: [], clear: true };
        default:
            return { lines: [{ kind: "sys", text: `command not found: ${cmd} — try \`help\`` }] };
    }
}

function Terminal() {
    const [history, setHistory] = useState<Line[]>(BANNER.map((t) => ({ kind: "sys", text: t })));
    const [value, setValue] = useState("");
    const [past, setPast] = useState<string[]>([]);
    const [pastIdx, setPastIdx] = useState(-1);
    const bodyRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        bodyRef.current?.scrollTo({ top: bodyRef.current.scrollHeight });
    }, [history]);

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        const entry: Line = { kind: "in", text: value };
        const { lines, clear } = runCommand(value);
        setHistory((h) => (clear ? [] : [...h, entry, ...lines]));
        if (value.trim()) setPast((p) => [value, ...p]);
        setPastIdx(-1);
        setValue("");
    };

    const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "ArrowUp") {
            e.preventDefault();
            const next = Math.min(pastIdx + 1, past.length - 1);
            if (next >= 0) { setPastIdx(next); setValue(past[next]); }
        } else if (e.key === "ArrowDown") {
            e.preventDefault();
            const next = pastIdx - 1;
            if (next < 0) { setPastIdx(-1); setValue(""); }
            else { setPastIdx(next); setValue(past[next]); }
        }
    };

    return (
        <section id="playground" className="section">
            <div className="reveal">
                <p className="eyebrow">01 · playground</p>
                <h2 className="section-title">Have a poke around</h2>
                <p className="section-lead">
                    No snails, just a tiny shell. Type{" "}
                    <code className="inline-code">help</code> and go from there. If you're
                    in a hurry, the stack is right below.
                </p>
            </div>

            <div className="term reveal" onClick={() => inputRef.current?.focus()}>
                <div className="term-bar">
                    <span className="dot red" /><span className="dot amber" /><span className="dot green" />
                    <span className="term-title">sluggan@portfolio: ~</span>
                </div>
                <div className="term-body" ref={bodyRef}>
                    {history.map((l, i) => (
                        <div key={i} className={`term-line ${l.kind}`}>
                            {l.kind === "in" && <span className="term-prompt">$</span>}
                            <span>{l.text}</span>
                        </div>
                    ))}
                    <form className="term-input-row" onSubmit={submit}>
                        <span className="term-prompt">$</span>
                        <input
                            ref={inputRef}
                            className="term-input"
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                            onKeyDown={onKeyDown}
                            spellCheck={false}
                            autoComplete="off"
                            autoCapitalize="none"
                            autoCorrect="off"
                            enterKeyHint="go"
                            aria-label="terminal input"
                            placeholder="help"
                        />
                    </form>
                </div>
            </div>

            <div className="skills-grid reveal">
                {SKILLS.map((s) => (
                    <div className="panel skill-card" key={s.group}>
                        <h3 className="skill-group">{s.group}</h3>
                        <div className="skill-tags">
                            {s.items.map((it) => <span className="tag" key={it}>{it}</span>)}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Terminal;
