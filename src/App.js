// File: src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import Layout Components
import Navbar from './components/Navbar';
import Footer from './components/Footer'; // Placeholder

// Import Page Components
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import CoursesPage from './pages/CoursesPage';   // ⬅️ Courses Page Import
import AboutPage from './pages/AboutPage'; 
import ContactPage from './pages/ContactPage';    // ⬅️ About Page Import
// import CourseDetailPage from './pages/CourseDetailPage'; // Import for detail view

// Mock data needed for the Profile Page
const mockUserProfile = {
  name: 'Alex Johnson',
  title: 'Full-Stack Developer | Python & React Expert',
  bio: 'Passionate about building scalable web applications and mentoring others in the coding journey.',
  avatarUrl: 'https://i.pravatar.cc/150?img=1',
  totalCourses: 12,
  coursesCompleted: 8,
  totalHours: 154,
  currentStreak: 45,
  level: 'Master Coder'
};

function App() {
 return (
    <Router>
      <div className="app-layout">
        <Navbar />
        
        <main className="main-content">
          <Routes>
            {/* Core Pages */}
            <Route path="/" element={<HomePage />} />
            <Route path="/profile" element={<ProfilePage user={mockUserProfile} />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} /> {/* ⬅️ CONTACT PAGE ROUTE */}
            
            {/* Course Pages */}
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/courses/:courseId" element={<div style={{ padding: '50px', textAlign: 'center' }}><h2>Course Detail Page (WIP)</h2></div>} />
            
            {/* Catch-all Route */}
            <Route path="*" element={<div style={{ padding: '50px', textAlign: 'center' }}><h1>404 - Page Not Found</h1></div>} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;