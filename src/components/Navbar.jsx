import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo Section */}
        <Link to="/" className="navbar-logo">
          <div className="logo-icon">
            <svg width="40" height="40" viewBox="0 0 50 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0" y="10" width="8" height="25" transform="skewX(-20)" fill="#7F93A3" />
              <rect x="12" y="10" width="8" height="25" transform="skewX(-20)" fill="#4A6375" />
              <rect x="24" y="10" width="8" height="25" transform="skewX(-20)" fill="#0A2640" />
            </svg>
          </div>
          <span className="logo-text">Trustco.</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="navbar-links">
          <NavLink to="/features" className={({ isActive }) => isActive ? "active" : ""}>
            Features
          </NavLink>
          <NavLink to="/solutions" className={({ isActive }) => isActive ? "active" : ""}>
            Solutions
          </NavLink>
          <NavLink to="/company" className={({ isActive }) => isActive ? "active" : ""}>
            Company
          </NavLink>
          <NavLink to="/resources" className={({ isActive }) => isActive ? "active" : ""}>
            Resources
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>
            Contact
          </NavLink>
        </div>

        {/* Auth Buttons */}
        <div className="navbar-auth">
          <button className="btn-login">Log In</button>
          <button className="btn-signup">Sign Up</button>
        </div>

        {/* Mobile Menu Icon */}
        <div className="mobile-menu-icon" onClick={toggleMenu}>
          <div className={`hamburger ${isMenuOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu Dropdown */}
      <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
        <NavLink to="/features" onClick={toggleMenu} className={({ isActive }) => isActive ? "active" : ""}>
          Features
        </NavLink>
        <NavLink to="/solutions" onClick={toggleMenu} className={({ isActive }) => isActive ? "active" : ""}>
          Solutions
        </NavLink>
        <NavLink to="/company" onClick={toggleMenu} className={({ isActive }) => isActive ? "active" : ""}>
          Company
        </NavLink>
        <NavLink to="/resources" onClick={toggleMenu} className={({ isActive }) => isActive ? "active" : ""}>
          Resources
        </NavLink>
        <NavLink to="/contact" onClick={toggleMenu} className={({ isActive }) => isActive ? "active" : ""}>
          Contact
        </NavLink>
        <div className="mobile-auth">
          <button className="btn-login">Log In</button>
          <button className="btn-signup">Sign Up</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
