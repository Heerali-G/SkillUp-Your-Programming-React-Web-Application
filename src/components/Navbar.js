// File: src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Use the CSS from the Home.css enhancement, renamed

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        {/* Use Link to navigate without refreshing the page */}
        <Link to="/">SkillSprint 🚀</Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/courses">Courses</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;