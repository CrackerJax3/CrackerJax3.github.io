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

    const scrollToSection = (sectionId, scrollType) => {
        const section = document.getElementById(sectionId);
        const navbarHeight = document.querySelector('.navbar').offsetHeight;
        if (section) {
            let offsetTop;
            if (scrollType === 'top') {
              offsetTop = section.offsetTop - navbarHeight;
            } else {
              const windowHeight = window.innerHeight;
              const sectionHeight = section.offsetHeight;
              offsetTop = section.offsetTop + sectionHeight - windowHeight;
            }
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
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
                        <li><a onClick={() => scrollToSection('home', 'bottom')}>Home</a></li>
                        <li><a onClick={() => scrollToSection('services', 'top')}>Services</a></li>
                        <li><a onClick={() => scrollToSection('community events', 'bottom')}>Community Events</a></li>
                        <li><a onClick={() => scrollToSection('campaigns', 'bottom')}>Campaigns</a></li>
                        <li><a onClick={() => scrollToSection('hosting to inspire', 'bottom')}>Hosting To Inspire</a></li>
                        <li><a onClick={() => scrollToSection('products', 'bottom')}>Products</a></li>
                        <li><a onClick={() => scrollToSection('locations', 'bottom')}>Locations</a></li>
                        <li><a onClick={() => scrollToSection('contact', 'bottom')}>Collaborations</a></li>
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
                        <li><a onClick={() => scrollToSection('home')}>Home</a></li>
                        <li><a onClick={() => scrollToSection('services')}>Services</a></li>
                        <li><a onClick={() => scrollToSection('community events')}>Community Events</a></li>
                        <li><a onClick={() => scrollToSection('campaigns')}>Campaigns</a></li>
                        <li><a onClick={() => scrollToSection('hosting to inspire')}>Hosting To Inspire</a></li>
                        <li><a onClick={() => scrollToSection('products')}>Products</a></li>
                        <li><a onClick={() => scrollToSection('locations')}>Locations</a></li>
                        <li><a onClick={() => scrollToSection('contact')}>Collaborations</a></li>
                    </ul>
                )}
            </div>
        </nav>
    );
}

export default Navbar;
