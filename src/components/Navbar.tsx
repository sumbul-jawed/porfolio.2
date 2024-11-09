"use client";
import { useState } from 'react';
import { IoMdClose, IoMdMenu } from 'react-icons/io';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="navbar-container">
      <header className="navbar-content">
        <span className="brand">S-J Developer</span>
        
        {/* Menu Icon for Mobile */}
        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <IoMdClose size={28} /> : <IoMdMenu size={28} />}
        </div>

        {/* Navbar Links */}
        <nav className={`menu ${menuOpen ? "open" : ""}`}>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
