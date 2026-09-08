const experiences = [
    {
        date: "Jan 2025 – Jun 2025 · 6 mo",
        title: "Development Intern — Omda",
        location: "Solna, SE",
        description: [
            "Built 3 Spring Boot backend prototypes with Spring Data for large-scale data processing.",
            "Implemented the JPA Criteria API for a database-agnostic design.",
            "Generated 10M+ synthetic donation records to load-test and validate scalability.",
            "Optimised PostgreSQL queries, cutting response times from 3 s to under 1 s.",
        ],
        technologies: ["Java", "Spring Boot", "JPA Criteria API", "PostgreSQL"],
    },
    {
        date: "Nov 2024 – Dec 2024 · 2 mo",
        title: "Development Intern — IDATA",
        location: "Värnamo, SE",
        description: [
            "Built and maintained REST APIs in Spring Boot integrating with digital mail services.",
            "Wrote full documentation that shortened developer onboarding time.",
        ],
        technologies: ["Java", "Spring Boot", "REST API"],
    },
    {
        date: "Jan 2024 – Oct 2024 · 10 mo",
        title: "Development Intern — noQ",
        location: "Remote, SE",
        description: [
            "Created a React-based CMS for blog publishing focused on usability.",
            "Built a rich text editor with inline formatting, media embedding and version history in React + TypeScript.",
            "Handled real-time updates and autosave with state management.",
            "Designed a responsive UI with Tailwind CSS.",
        ],
        technologies: ["React", "TypeScript", "Tailwind CSS"],
    },
];

const Employment = () => {
    return (
        <section id="employment" className="section">
            <div className="reveal">
                <p className="eyebrow">03 — the track record</p>
                <h2 className="section-title">Experience</h2>
                <p className="section-lead">
                    Where I've been learning the craft — mostly backend, always shipping.
                </p>
            </div>

            <div className="timeline">
                {experiences.map((exp, i) => (
                    <div className="tl-item reveal" key={i}>
                        <div className="tl-date">{exp.date}</div>
                        <h3 className="tl-role">{exp.title}</h3>
                        <div className="tl-place">{exp.location}</div>
                        <ul className="tl-points">
                            {exp.description.map((d, j) => (
                                <li key={j}>{d}</li>
                            ))}
                        </ul>
                        <div className="tl-tech">
                            {exp.technologies.map((t) => (
                                <span className="tag" key={t}>{t}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Employment;
