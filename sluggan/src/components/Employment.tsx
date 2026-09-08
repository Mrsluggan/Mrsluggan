const experiences = [
    {
        date: "Aug 2025 – Present",
        title: "Software Engineer — Crystal Alarm",
        location: "Uppsala, SE",
        description: [
            "Develop and maintain positioning engines for alarm & security products in C#/.NET.",
            "Own indoor positioning via BLE and WiFi, with fallback logic between multiple position sources.",
            "Integrate against the Cisco Spaces Partner API; work on mobile for iOS and Android.",
            "Built an automated code-review pipeline with Claude in GitLab CI/CD, running on every merge request to catch bugs early.",
        ],
        technologies: ["C#", ".NET", "WCF", "BLE", "WiFi positioning", "GitLab CI/CD"],
    },
    {
        date: "Nov 2024 – Jun 2025",
        title: "Software Developer (LIA Intern) — Omda / IDATA AB",
        location: "SE",
        description: [
            "Internship during my YH studies. Built backend prototypes in Spring Boot focused on REST API design, performance and large-scale data access.",
            "Evaluated a Nordic digital post-service API and laid the groundwork for further integration.",
        ],
        technologies: ["Java", "Spring Boot", "REST API", "PostgreSQL"],
    },
    {
        date: "Jan 2024 – Oct 2024",
        title: "Software Developer (Volunteer) — noQ",
        location: "Remote, SE",
        description: [
            "Built a React-based CMS from scratch for a non-profit.",
            "Owned design and implementation end-to-end, from data model to finished UI.",
        ],
        technologies: ["React", "TypeScript", "Tailwind CSS"],
    },
    {
        date: "2021 – 2023",
        title: "IT Technician — Uppsala Municipality",
        location: "Uppsala, SE",
        description: [
            "1st and 2nd line IT support for municipal employees.",
            "Troubleshot hardware, software and network issues; handled user support, system maintenance and incidents.",
        ],
        technologies: ["Windows", "Networking", "Support"],
    },
];

const education = [
    { date: "2023 – 2025", title: "Java Developer (YH)", place: "Jönköping University" },
    { date: "2017 – 2020", title: "Technology Programme — Information & Design", place: "NTI Gymnasiet" },
];

const Employment = () => {
    return (
        <section id="employment" className="section">
            <div className="reveal">
                <p className="eyebrow">02 · experience</p>
                <h2 className="section-title">Experience</h2>
                <p className="section-lead">
                    A tiny look into the past
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

            <div className="edu reveal">
                <h3 className="edu-title">Education</h3>
                {education.map((e, i) => (
                    <div className="edu-row" key={i}>
                        <span className="edu-date">{e.date}</span>
                        <span className="edu-main"><strong>{e.title}</strong> · {e.place}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Employment;
