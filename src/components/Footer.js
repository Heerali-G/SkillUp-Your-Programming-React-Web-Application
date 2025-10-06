// File: src/components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'; // Import the dedicated CSS

function Footer() {
    // Current year for the copyright notice
    const currentYear = new Date().getFullYear();

    return (
        <footer className="app-footer">
            <div className="footer-content">
                
                <div className="footer-section footer-brand">
                    <Link to="/" className="footer-logo">SkillSprint 🚀</Link>
                    <p className="footer-tagline">Accelerate your career with project-based learning.</p>
                </div>

                <div className="footer-section footer-links">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><Link to="/courses">Course Catalog</Link></li>
                        <li><Link to="/profile">My Dashboard</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/contact">Contact Support</Link></li>
                    </ul>
                </div>

                <div className="footer-section footer-legal">
                    <h4>Legal & Support</h4>
                    <ul>
                        <li><Link to="/terms">Terms of Service</Link></li>
                        <li><Link to="/privacy">Privacy Policy</Link></li>
                        <li><Link to="/faq">FAQ</Link></li>
                    </ul>
                </div>

                <div className="footer-section footer-social">
                    <h4>Connect</h4>
                    <div className="social-icons">
                        {/* Use placeholders for social links */}
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">🐦</a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">🔗</a>
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer">💻</a>
                    </div>
                </div>

            </div>
            
            <div className="footer-bottom">
                <p>&copy; {currentYear} SkillSprint. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;