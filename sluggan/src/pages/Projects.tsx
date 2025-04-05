import { useEffect, useState } from "react";

interface Repo {
    id: number;
    name: string;
    description: string | null;
    html_url: string;
}

export default function Projects() {
    const [data, setData] = useState<Repo[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://api.github.com/users/mrsluggan/repos');
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const result: Repo[] = await response.json();
                setData(result);
            } catch (error: any) {
                setError('Error fetching data');
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    if (loading) {
        return <p className="loading-message">Loading repositories...</p>;
    }

    return (
        <div className="projects-container">
            {error && <p className="error-message">{error}</p>}
            <h1>A list of my personal projects</h1>
            <ul className="repo-list">
                {data.length > 0 ? (
                    data.map((repo) => (
                        <a href={repo.html_url} key={repo.id} className="repo-link" aria-label={`View repository ${repo.name}`}>
                            <li className="repo-item">
                                <h2 className="repo-name">{repo.name}</h2>
                                <p className="repo-description">
                                    {repo.description || 'No description available'}
                                </p>
                            </li>
                        </a>
                    ))
                ) : (
                    <li>No repositories found.</li>
                )}
            </ul>
        </div>
    );
}
