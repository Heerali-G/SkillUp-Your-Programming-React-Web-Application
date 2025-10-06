// File: src/pages/AboutPage.js
import React from 'react';
import './style/AboutPage.css'; // Import dedicated styling

// Mock Team Data (for a more realistic feel)
const teamMembers = [
    { name: 'Alex Johnson', role: 'Chief Executive Officer', bio: 'Visionary behind SkillSprint, focused on making quality education accessible.', photo: 'https://i.pravatar.cc/150?img=1' },
    { name: 'Dr. Jane Code', role: 'Head of Curriculum', bio: 'Expert programmer and educator designing our advanced course pathways.', photo: 'https://i.pravatar.cc/150?img=2' },
    { name: 'Chris Lee', role: 'Lead Platform Engineer', bio: 'Ensures the SkillSprint platform is fast, stable, and a joy to use.', photo: 'https://i.pravatar.cc/150?img=3' },
];

function AboutPage() {
    return (
        <div className="about-page-container">
            <header className="about-header">
                <h1>About SkillSprint 🚀</h1>
                <p className="header-subtext">Empowering the next generation of developers through practical, accessible, and high-quality coding education.</p>
            </header>

            {/* --- 1. Our Mission Section --- */}
            <section className="mission-section">
                <h2>Our Mission</h2>
                <div className="mission-content">
                    <p>
                        At **SkillSprint**, we believe that anyone with the passion to learn should have access to world-class programming resources. Our mission is to **bridge the gap** between theoretical knowledge and real-world development skills, offering structured, project-based courses that prepare you for a tech career, not just a certificate.
                    </p>
                    <p>
                        We are committed to continuous improvement, ensuring our curriculum stays current with the fast-paced demands of the technology industry.
                    </p>
                </div>
            </section>
            
            <hr />

            {/* --- 2. Our Values Section --- */}
            <section className="values-section">
                <h2>Our Core Values</h2>
                <div className="values-grid">
                    <div className="value-card">
                        <h3>1. Practicality</h3>
                        <p>Every course focuses on **hands-on projects** and real-world tools. We teach you how to build, not just how to memorize.</p>
                    </div>
                    <div className="value-card">
                        <h3>2. Accessibility</h3>
                        <p>We strive to keep our content affordable and flexible, allowing learners from all backgrounds and schedules to participate.</p>
                    </div>
                    <div className="value-card">
                        <h3>3. Community</h3>
                        <p>Learning is better together. We foster a supportive environment where peers and instructors help each other grow.</p>
                    </div>
                </div>
            </section>
            
            <hr />

            {/* --- 3. Meet the Team Section --- */}
            <section className="team-section">
                <h2>Meet the Team</h2>
                <div className="team-grid">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="team-member-card">
                            <img src={member.photo} alt={member.name} className="team-photo" />
                            <h4 className="member-name">{member.name}</h4>
                            <p className="member-role">{member.role}</p>
                            <p className="member-bio">{member.bio}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default AboutPage;