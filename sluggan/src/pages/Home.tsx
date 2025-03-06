import '../assets/Home.css';
import {NavLink} from "react-router-dom";  // Ladda in en extern CSS-fil

export default function Home() {
    return (
        <section className="home-container">
            <div className="left-column">
                <span className="sluggan-header">
                    <span className="sluggan-icon">👋</span>
                    <span className="sluggan-text"> Hello, I'm Sluggan </span>
                    <span className="sluggan-icon">🐌</span>

                </span>
                <p className="description">
                    I am an experienced software developer with expertise in both frontend and backend technologies.
                    My focus is on creating scalable, efficient, and robust web applications.
                </p>
                <p className="description" >
                    You're welcome to browse my latest <NavLink className={"project-nav-button"}  to="/projects" >Projects</NavLink> and see what I've been working on.
                </p>
            </div>

        </section>
    );
}
