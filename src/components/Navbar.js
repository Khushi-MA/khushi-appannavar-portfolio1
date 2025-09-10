import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">
          <a href="/#home" className="logo-link">
            <span className="logo-text">KHUSH</span>
          </a>
        </div>
        <button className="navbar-toggle" onClick={toggleSidebar}>
          &#9776; {/* Hamburger Icon */}
        </button>
      </nav>
      <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <ul className="sidebar-links">
          <li><Link to="/" onClick={toggleSidebar}>Home</Link></li>
          <li><a href="/#about" onClick={toggleSidebar}>About</a></li>
          <li><a href="/#projects" onClick={toggleSidebar}>Projects</a></li>
          <li><a href="/#experience" onClick={toggleSidebar}>Experience</a></li>
          <li><a href="/#publications" onClick={toggleSidebar}>Publications</a></li>
          <li><a href="/#certifications" onClick={toggleSidebar}>Certifications</a></li>
          <li><a href="/#skills" onClick={toggleSidebar}>Skills</a></li>
          <li><a href="/#services" onClick={toggleSidebar}>Services</a></li>
          <li><a href="/#education" onClick={toggleSidebar}>Education</a></li>
          <li><a href="/#contact" onClick={toggleSidebar}>Contact Me</a></li>
          <li><Link to="/beyond" onClick={toggleSidebar}>Beyond</Link></li>
          <li><a href="/beyond#books" onClick={toggleSidebar}>Books</a></li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
