const Employment = () => {

    const experiences = [
        {
            date: "jan 2025 – juni 2025 (6 månader)",
            title: "Utvecklingspraktikant – Omda",
            location: "Solna, SE",
            description: [
                "Byggde 3 Spring Boot-backendprototyper med Spring Data för storskalig databehandling.",
                "Implementerade JPA Criteria API för en databasagnostisk design.",
                "Genererade över 10 miljoner syntetiska donationsposter för belastningstestning och validering av systemets skalbarhet.",
                "Optimerade PostgreSQL-frågor och minskade svarstider från 3 sekunder till under 1 sekund."
            ],
            technologies: ["Java", "Spring Boot", "JPA Criteria API", "PostgreSQL"]
        },
        {
            date: "nov 2024 – dec 2024 (2 månader)",
            title: "Utvecklingspraktikant – IDATA",
            location: "Värnamo, SE",
            description: [
                "Byggde och underhöll REST API:er i Spring Boot med integration mot digitala posttjänster.",
                "Levererade fullständig dokumentation som minskade tiden för utvecklares onboarding."
            ],
            technologies: ["Java", "Spring Boot", "REST API"]
        },
        {
            date: "jan 2024 – okt 2024 (10 månader)",
            title: "Utvecklingspraktikant – noQ",
            location: "Remote, SE",
            description: [
                "Skapade ett React-baserat CMS för blogpublicering med fokus på användarvänlighet.",
                "Byggde en rik textredigerare med inline-formattering, mediaembedding och versionshantering med React och TypeScript.",
                "Hanterade realtidsuppdateringar och autosparande med state management.",
                "Designade responsivt användargränssnitt med Tailwind CSS."
            ],
            technologies: ["React", "TypeScript", "Tailwind CSS"]
        }
    ];

    return (
        <div id="employment" className="component">
            <div>
                <section className="section-content">
                    <h2>
                        Erfarenheter
                    </h2>

                    <ul>
                        {experiences.map((exp, index) => (
                            <li
                                key={index}
                            >
                                <div>
                                    {exp.date}
                                </div>

                                <div style={{ flexGrow: 1 }}>
                                    <div
                                    >
                                        <strong style={{ fontSize: "1.1rem" }}>{exp.title}</strong>{" "}
                                        <em style={{ color: "#777" }}>– {exp.location}</em>
                                    </div>

                                    <ul style={{ paddingLeft: "1.2rem", marginBottom: "0.5rem" }}>
                                        {exp.description.map((desc, i) => (
                                            <li
                                                key={i}
                                                style={{
                                                    marginBottom: "0.25rem",
                                                    lineHeight: 1.5
                                                }}
                                            >
                                                {desc}
                                            </li>
                                        ))}
                                    </ul>

                                    <p style={{ fontSize: "0.95rem", color: "#444" }}>
                                        <strong>Använda teknologier:</strong>{" "}
                                        {exp.technologies.join(", ")}
                                    </p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </section>
            </div>
        </div>

    );
};

export default Employment;
