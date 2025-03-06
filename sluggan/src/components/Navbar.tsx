import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

import logo from "../assets/snail.svg";
import github from "../assets/github.svg";
import linkin from "../assets/linkedin.svg";
import burger from "../assets/burger.svg"
const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(false);

    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar);
    };


    return (
        <nav className="navbar">
            <div className="container">
                <div className="logo-container">
                    <Link to="/" className="logo">
                        <img width="50px" src={logo} alt="Logo" />
                    </Link>
                </div>

                <div className={`nav-elements ${showNavbar && 'active'}`}>
                    <div className="nav-links">
                        <ul>
                            <li>
                                <NavLink to="/"  onClick={handleShowNavbar}>Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/projects"  onClick={handleShowNavbar}>Projects</NavLink>
                            </li>
                            <li>
                                <NavLink to="/about"  onClick={handleShowNavbar}>About</NavLink>
                            </li>
                        </ul>
                    </div>

                    <div className="social-links">
                        <ul>
                            <li>
                                <a href="https://github.com/Mrsluggan" target="_blank" rel="noopener noreferrer">
                                    <img width="50px" src={github} alt="GitHub" />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/eric-österberg" target="_blank" rel="noopener noreferrer">
                                    <img width="50px" src={linkin} alt="LinkedIn" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="menu-icon" onClick={handleShowNavbar}>
                    <img width="30px" src={burger} alt="Menu" />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
