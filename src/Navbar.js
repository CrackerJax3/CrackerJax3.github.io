import React, { useState } from 'react';
import './Navbar.css'; // Import your CSS file for styling
import dropbar from './images/hamburgermenu.png';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    // Toggle dropdown menu
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            {/* Navbar for Desktop */}
            <ul className="desktop-menu">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li>
            </ul>

            {/* Dropdown Menu for Mobile */}
            <div className="mobile-menu">
                <button className="dropdown-toggle" onClick={toggleMenu}>
                    <size><img src={dropbar} className="hamburger-icon"/></size>
                </button>
                {isOpen && (
                    <ul className="dropdown-menu">
                        <li><a href="#">Home</a></li>
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
