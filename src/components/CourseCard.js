// File: src/components/CourseCard.js
import React from 'react';
import { Link } from 'react-router-dom';

function CourseCard({ course }) {
    // Helper function for styling based on level
    const getLevelClass = (level) => {
        return `level-badge level-${level.toLowerCase()}`;
    };

    return (
        <div className="course-card">
            <span className={getLevelClass(course.level)}>{course.level}</span>
            <h3 className="course-title">{course.title}</h3>
            <p className="course-instructor">By: {course.instructor}</p>
            <div className="course-meta">
                <span className="course-category">Category: {course.category}</span>
                <span className="course-rating">⭐ {course.rating}</span>
            </div>
            <p className="course-description">{course.description.substring(0, 80)}...</p>
            
            <div className="course-footer">
                <span className="course-price">Rs.{course.price}</span>
                {/* Link to the detailed page for this course */}
                <Link to={`/courses/${course.id}`} className="details-btn">
                    View Details
                </Link>
            </div>
        </div>
    );
}

export default CourseCard;