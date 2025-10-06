// File: src/pages/ContactPage.js
import React, { useState } from 'react';
import './style/ContactPage.css';

function ContactPage() {
    // State to manage form data
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    // State to handle form submission status
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('Sending...');

        // In a real application, you would send this data to an API endpoint here.
        // For now, we'll simulate a successful submission.
        setTimeout(() => {
            console.log('Form Submitted:', formData);
            setStatus('Thank you for reaching out! We will get back to you soon. ✅');
            setFormData({ name: '', email: '', subject: '', message: '' }); // Clear form
        }, 1500);
    };

    return (
        <div className="contact-page-container">
            <header className="contact-header">
                <h1>Get in Touch 💬</h1>
                <p className="header-subtext">Have a question about a course, need technical support, or want to partner with us? Send us a message!</p>
            </header>

            <div className="contact-main">
                
                {/* --- Contact Form Section --- */}
                <section className="contact-form-section">
                    <h2>Send Us a Message</h2>
                    
                    {status && <div className={`form-status ${status.includes('Thank you') ? 'success' : 'sending'}`}>{status}</div>}
                    
                    <form onSubmit={handleSubmit} className="contact-form">
                        
                        <div className="form-group">
                            <label htmlFor="name">Your Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="email">Your Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="subject">Subject</label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows="5"
                                required
                            ></textarea>
                        </div>
                        
                        <button type="submit" className="submit-btn" disabled={status.includes('Sending')}>
                            {status.includes('Sending') ? 'Sending...' : 'Submit Message'}
                        </button>
                    </form>
                </section>

                {/* --- Details Section --- */}
                <section className="contact-details">
                    <h2>Our Details</h2>
                    <div className="detail-card">
                        <span className="detail-icon">📧</span>
                        <h4>Email Support</h4>
                        <p>For course-related queries or technical help.</p>
                        <a href="mailto:support@skillsprint.com">support@skillsprint.com</a>
                    </div>
                    
                    <div className="detail-card">
                        <span className="detail-icon">📞</span>
                        <h4>Phone (Mon-Fri)</h4>
                        <p>Available for business inquiries and partnerships.</p>
                        <a href="tel:+1-555-123-4567">+1 (555) 123-4567</a>
                    </div>
                    
                    <div className="detail-card">
                        <span className="detail-icon">📍</span>
                        <h4>Headquarters</h4>
                        <p>SkillSprint Labs, Tech Hub, Suite 101, Code City, CA 90001</p>
                    </div>
                </section>

            </div>
        </div>
    );
}

export default ContactPage;