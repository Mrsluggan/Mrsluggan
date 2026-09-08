import { useEffect, useState } from "react";

interface Repo {
    id: number;
    name: string;
    description: string | null;
    html_url: string;
    language: string | null;
    stargazers_count: number;
    updated_at: string;
    fork: boolean;
}

const LANG_COLORS: Record<string, string> = {
    Java: "#f0a94a",
    TypeScript: "#4a9df0",
    JavaScript: "#f7df1e",
    Python: "#4af0a3",
    HTML: "#e34c26",
    CSS: "#563d7c",
    "C#": "#9d4af0",
};

function Projects() {
    const [repos, setRepos] = useState<Repo[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetch("https://api.github.com/users/mrsluggan/repos?per_page=100&sort=updated")
            .then((r) => {
                if (!r.ok) throw new Error(`GitHub responded ${r.status}`);
                return r.json();
            })
            .then((data: Repo[]) => {
                const cleaned = data
                    .filter((r) => !r.fork)
                    .sort(
                        (a, b) =>
                            b.stargazers_count - a.stargazers_count ||
                            +new Date(b.updated_at) - +new Date(a.updated_at)
                    )
                    .slice(0, 6);
                setRepos(cleaned);
            })
            .catch((e) => setError(e.message ?? "Something went wrong"))
            .finally(() => setLoading(false));
    }, []);

    return (
        <section id="projects" className="section">
            <div className="reveal">
                <p className="eyebrow">02 — from github</p>
                <h2 className="section-title">Projects</h2>
                <p className="section-lead">
                    A live pull straight from GitHub — no hand-editing, no lying about what
                    I've shipped. Sorted by what people found useful.
                </p>
            </div>

            {loading && (
                <div className="repo-grid">
                    {Array.from({ length: 6 }).map((_, i) => (
                        <div key={i} className="skeleton" />
                    ))}
                </div>
            )}

            {error && !loading && (
                <p className="repo-state error">
                    Couldn't reach GitHub ({error}). It's probably rate-limiting me —
                    meanwhile, everything lives at{" "}
                    <a href="https://github.com/Mrsluggan" style={{ color: "var(--slime)" }}>
                        github.com/Mrsluggan
                    </a>.
                </p>
            )}

            {!loading && !error && (
                <>
                    <div className="repo-grid">
                        {repos.map((repo) => (
                            <a
                                key={repo.id}
                                href={repo.html_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="panel repo-card reveal"
                                aria-label={`Open repository ${repo.name}`}
                            >
                                <div className="repo-top">
                                    <span className="repo-name">
                                        <span className="folder">›</span> {repo.name}
                                    </span>
                                    <span className="repo-arrow">↗</span>
                                </div>
                                <p className="repo-desc">
                                    {repo.description || "No description — the code speaks for itself."}
                                </p>
                                <div className="repo-meta">
                                    {repo.language && (
                                        <span className="lang">
                                            <span
                                                className="lang-dot"
                                                style={{ background: LANG_COLORS[repo.language] ?? "var(--slime)" }}
                                            />
                                            {repo.language}
                                        </span>
                                    )}
                                    {repo.stargazers_count > 0 && <span>★ {repo.stargazers_count}</span>}
                                </div>
                            </a>
                        ))}
                    </div>

                    <div className="projects-footer reveal">
                        <a className="btn" href="https://github.com/Mrsluggan?tab=repositories"
                           target="_blank" rel="noopener noreferrer">
                            View all repositories ↗
                        </a>
                    </div>
                </>
            )}
        </section>
    );
}

export default Projects;
