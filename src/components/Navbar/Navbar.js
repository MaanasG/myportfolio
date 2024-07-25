import React from 'react';
import logo from './assets/logo.jpg';
import "./navbar.css";

const Navbar = () => {
    const [isHover, setIsHover] = React.useState(false);

    const onMouseEnter = () => {
        setIsHover(true);
    };

    const onMouseLeave = () => {
        setIsHover(false);
    };

    return (
        <nav className="navbar">
            <img src={logo} alt="Logo" className="navbar--leftimg" />
            <h1 className="navbar--name">Maanas Gopi</h1>
            <div className="navbar--menu-container" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                <h2 className="navbar--menu">Menu</h2>
                <div className={`navbar--dropdown ${isHover ? 'show' : ''}`}>
                    <ul>
                            <a className="navbar--dropdown--item" href="https://drive.google.com/file/d/1f6uhB8LzavR7SKcLLyzlZwGARSHyzK36/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                            <li>Resume</li>
                        </a>
                        <a className="navbar--dropdown--item" href="https://www.linkedin.com/in/maanas-gopi" target="_blank" rel="noopener noreferrer">
                            <li>LinkedIn</li>
                        </a>
                        <a className="navbar--dropdown--item" href="https://github.com/MaanasG" target="_blank" rel="noopener noreferrer">
                            <li>GitHub</li>
                        </a>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
