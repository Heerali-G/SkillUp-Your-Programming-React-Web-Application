// File: src/pages/ProfilePage.js
import React from 'react';
import ProfileCard from '../features/profile/ProfileCard';
import SkillTracker from '../features/profile/SkillTracker';
import '../features/profile/Profile.css'; // Shared styles for the feature

function ProfilePage({ user }) {
  return (
    <div className="profile-page-layout">
      <h1 className="page-title">My Learning Dashboard</h1>
      
      <div className="profile-section">
        <ProfileCard user={user} />
      </div>
      
      <div className="skills-section">
        <SkillTracker />
      </div>

    </div>
  );
}

export default ProfilePage;