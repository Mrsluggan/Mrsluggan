import {useEffect, useState} from "react";

interface Repo {
    id: number;
    name: string;
    description: string | null;
    html_url: string;
}

function Projects() {
    const [data, setData] = useState<Repo[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    "https://api.github.com/users/mrsluggan/repos"
                );
                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }
                const result: Repo[] = await response.json();
                setData(result);
            } catch (error) {
                setError(error + "Error fetching data");
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    if (loading) {
        return (
            <div
                id="projects"
                className="component"
                style={{backgroundColor: "#111", color: "white", padding: "1rem"}}
            >
                <p>Loading projects...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div
                id="projects"
                className="component"
                style={{backgroundColor: "#111", color: "red", padding: "1rem"}}
            >
                <p>{error}</p>
            </div>
        );
    }

    return (
        <section id="projects" className="component projects-bg">
            <div className="section-content">
                <div className="section-text" >
                    <div>
                    <h2 className="section-title">Projekt</h2>
                    <p>Här är några exempel på projekt jag har jobbat med:</p>
                    </div>
                    <ul
                        className="repo-list"
                        style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            justifyContent: 'space-between',
                            gap: '1rem',  // lite mellanrum mellan blocken
                            padding: 0,
                            listStyle: 'none'
                        }}
                    >
                        {data.length > 0 ? (
                            data.map((repo) => (
                                <li
                                    key={repo.id}
                                    className="repo-item"
                                    style={{
                                        width:"30%"
                                    }}
                                >
                                    <a
                                        href={repo.html_url}
                                        className="repo-link"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`View repository ${repo.name}`}
                                        style={{ textDecoration: 'none', color: 'inherit' }}
                                    >
                                        <h3 className="repo-name">{repo.name}</h3>
                                        <p className="repo-description">
                                            {repo.description || "No description available"}
                                        </p>
                                    </a>
                                </li>
                            ))
                        ) : (
                            <li>No repositories found.</li>
                        )}
                    </ul>
                </div>
            </div>
        </section>


    );
}

export default Projects;
