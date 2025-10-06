// File: src/features/profile/ProfileCard.js
import React from 'react';
// CSS is imported in the container ProfilePage.js

function ProfileCard({ user }) {
  const completionPercentage = (user.coursesCompleted / user.totalCourses) * 100;
  const levelClass = `user-level level-${user.level.split(' ')[0].toLowerCase()}`;

  return (
    <div className="profile-container">
      <div className="profile-header">
        <img className="profile-avatar" src={user.avatarUrl} alt={`${user.name}'s profile`} />
        <div className="user-info">
          <h2 className="user-name">{user.name}</h2>
          <p className="user-title">{user.title}</p>
          <span className={levelClass}>
            {user.level}
          </span>
        </div>
      </div>
      
      <p className="profile-bio">{user.bio}</p>

      {/* Stats Section */}
      <div className="profile-stats">
        <div className="stat-item">
          <span className="stat-number">{user.totalCourses}</span>
          <span className="stat-label">Total Courses</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">{user.coursesCompleted}</span>
          <span className="stat-label">Courses Completed</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">{user.totalHours}h</span>
          <span className="stat-label">Learning Hours</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">{user.currentStreak} 🔥</span>
          <span className="stat-label">Day Streak</span>
        </div>
      </div>
      
      {/* Progress Bar */}
      <div className="progress-bar-container">
        <div className="progress-label">Courses Completion ({Math.round(completionPercentage)}%)</div>
        <div className="progress-bar-track">
          <div 
            className="progress-bar-fill" 
            style={{ width: `${completionPercentage}%` }}
            role="progressbar"
            aria-valuenow={completionPercentage}
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;