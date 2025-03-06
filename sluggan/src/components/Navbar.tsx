import {useState} from 'react'
import {Link, NavLink} from 'react-router-dom'

import logo from "../assets/snail.svg"
import burger from "../assets/burger.svg"
import github from "../assets/github.svg"
import linkin from "../assets/linkedin.svg"

const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(false)

    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar)
    }

    return (
        <nav className="navbar">
            <div className="container">

                <Link to="/" className="logo">
                    <img width={"50px"} src={logo} alt="Logo"/>
                </Link>
                <div className="menu-icon" onClick={handleShowNavbar}>
                    <img width={"50px"} src={burger}/>
                </div>
                <div className={`nav-elements  ${showNavbar && 'active'}`}>
                    <ul>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">About</NavLink>
                        </li>

                    </ul>
                </div>
                <div className={`nav-elements  ${showNavbar && 'active'}`}>
                    <ul>
                        <li>
                            <a href={"https://github.com/Mrsluggan"}> <img width={"50px"} src={github} alt={"Clickable icon to transfer you to my github page"}/>
                            </a>
                        </li>
                        <li>
                            <a href={"https://www.linkedin.com/in/eric-österberg"}> <img width={"50px"} src={linkin} alt={"Clickable icon to transfer you to my linkedin page"}/>
                            </a>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar