import React, { useState } from 'react';
import { FaHamburger } from 'react-icons/fa';


function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle menu
  const toggleMenu = (event) => {
    event.preventDefault();
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to close menu
  const closeMenu = () => {
    setIsMenuOpen(false);
  };



  return (
    <div>
      <nav className='navBar'>
        {/* Toggle button for small screens */}
        <div className='menuIcon'>
          <button type="button" className='menuToggle' onClick={toggleMenu}>
            <FaHamburger />
          </button>
          <ul className={`navElements ${isMenuOpen ? 'open' : ''}`}>
            <li><a href="#home" onClick={closeMenu}> Home</a></li>
            <li><a href="#about" onClick={closeMenu}> Know me</a></li>
            <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
            <li><a href="#projects" onClick={closeMenu}> Projects</a></li>
            <li><a href="#contact" onClick={closeMenu}> Contact me</a></li>
          </ul>
        </div>
        {/* Dropdown menu */}

      </nav>
    </div>
  );
}

export default Navbar;
