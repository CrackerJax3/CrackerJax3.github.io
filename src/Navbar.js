import React, { useState } from 'react';
import './Nav.css'; // Import your CSS file for styling
import dropbar from './images/hamburgermenu.png';
import logo from './msxbigwhitetransparent.png'; // Import your logo image file
import './App.css';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    // Toggle dropdown menu
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth" // Use smooth behavior for smooth scrolling
        });
      };

    return (
        <nav className="navbar">
            {/* Navbar for Desktop */}


            <ul className="desktop-menu">
                <header className="header">
                    <div className="LogoContainer">
                        <img src={logo} alt="Logo" className="Logo" />
                    </div>
                    <div className="menudesk">
                        <li><a onClick={scrollToTop}>Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Contact</a></li>
                    </div>
                </header>
            </ul>

            {/* Dropdown Menu for Mobile */}
            <div className="mobile-menu">
                <header className="header">
                    <div className="LogoContainer">
                        <img src={logo} alt="Logo" className="Logo" />
                    </div>
                </header>
                <button className="dropdown-toggle" onClick={toggleMenu}>
                    <size><img src={dropbar} className="hamburger-icon" /></size>
                </button>
                {isOpen && (
                    <ul className="dropdown-menu">
                        <li><a onClick={scrollToTop}>Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                )}
            </div>
        </nav>
    );
}

export default Navbar;
