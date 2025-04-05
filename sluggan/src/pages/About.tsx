import '../assets/Home.css';
import { NavLink } from 'react-router-dom';

export default function About() {
    return (
            <div className="left-column">

                <p className="description">
                    I'm a student diving deep into the world of technology and software development. I love learning new things and solving complex problems with code.
                </p>
                <p className="description">
                    When I'm not coding, you can find me exploring new ideas, playing games, or just enjoying the outdoors.
                </p>
                <p className="description">
                    Feel free to check out my <NavLink className="project-nav-button" to="/projects">Projects</NavLink> to see what I've been working on!
                </p>
            </div>
    );
}
