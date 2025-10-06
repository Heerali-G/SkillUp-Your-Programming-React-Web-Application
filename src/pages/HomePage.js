// File: src/pages/HomePage.js (Enhanced)
import React from 'react';
import './style/Home.css'; 
// Assuming the CSS file contains all necessary styles

function HomePage() {
  return (
    <div className="home-page-wrapper">
      
      {/* 🎯 ENHANCED HERO SECTION */}
      <div className="home-container">
        <div className="home-content">
          <h1 className="home-heading">
            Master Programming. <span className="highlight">Accelerate Your Career.</span>
          </h1>
          <p className="home-subtext">
            Level up your skills with **SkillSprint's** project-based courses in React, Python, and DSA. Get certified and get hired!
          </p>
          <a href="/courses" className="get-started-btn">Start Your Skill Sprint Today!</a>
          <p className="trust-text">Trusted by 5,000+ developers globally.</p>
        </div>
        
        {/* Visual Element Placeholder (Crucial for attractiveness) */}
        <div className="home-visual">
             {/* In a real app, this would be a dynamic illustration or SVG */}
             <div className="visual-placeholder">
                <span className="code-snippet">{'const skill = "Frontend";'}</span>
                <span className="code-snippet">{'function levelUp(skill) { return skill + 1; }'}</span>
             </div>
        </div>
      </div>
      
      {/* 💡 NEW: FEATURES/VALUE PROPOSITION SECTION */}
      <div className="features-section">
          <h2>Why Choose SkillSprint?</h2>
          <div className="features-grid">
              <div className="feature-card">
                  <span className="feature-icon">✅</span>
                  <h3>Project-Based Learning</h3>
                  <p>Build real-world applications with every lesson. Code portfolio ready from day one.</p>
              </div>
              <div className="feature-card">
                  <span className="feature-icon">⏱️</span>
                  <h3>Flexible Schedule</h3>
                  <p>Learn at your own pace with lifetime access. Sprint when you have the time.</p>
              </div>
              <div className="feature-card">
                  <span className="feature-icon">📈</span>
                  <h3>Career Acceleration</h3>
                  <p>Get recognized skills tailored to industry demands like React, Node, and advanced DSA.</p>
              </div>
          </div>
      </div>
    </div>
  );
}

export default HomePage;