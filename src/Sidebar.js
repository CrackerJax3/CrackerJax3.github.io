import React, { useState } from 'react';
import './Sidebar.css';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="Sidebar">
      <button className="toggle-btn" onClick={toggleDropdown}>
        Menu
      </button>
      <ul className={`menu ${isOpen ? 'open' : ''}`}>
        <li><a href="#">Overview</a></li>
        <li><a href="#">Search</a></li>
        <li><a href="#">Initiatives</a></li>
        <li><a href="#">Hosting</a></li>
        <li><a href="#">Community</a></li>
        <li><a href="#">Join Us</a></li>
      </ul>
    </div>
  );
}

export default Sidebar;
