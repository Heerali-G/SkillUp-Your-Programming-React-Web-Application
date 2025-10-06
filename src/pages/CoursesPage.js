// File: src/pages/CoursesPage.js
import React, { useState, useMemo } from 'react';
import CourseCard from '../components/CourseCard';
import { mockCourses, categories, levels } from '../data/courses';
import './style/CoursesPage.css'; // Import dedicated CSS

function CoursesPage() {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [selectedLevel, setSelectedLevel] = useState('All');
    const [searchTerm, setSearchTerm] = useState('');

    // Use useMemo to only re-filter when dependencies change
    const filteredCourses = useMemo(() => {
        return mockCourses.filter(course => {
            const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
            const matchesLevel = selectedLevel === 'All' || course.level === selectedLevel;
            const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase());
            
            return matchesCategory && matchesLevel && matchesSearch;
        });
    }, [selectedCategory, selectedLevel, searchTerm]);

    return (
        <div className="courses-page-container">
            <h1 className="courses-page-heading">Explore Our Course Catalog 🎓</h1>
            
            {/* --- Filtering and Search Section --- */}
            <div className="controls-bar">
                {/* Search Input */}
                <input
                    type="text"
                    placeholder="Search by course title..."
                    className="search-input"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />

                {/* Category Filter */}
                <select 
                    value={selectedCategory} 
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="filter-select"
                >
                    {categories.map(cat => (
                        <option key={cat} value={cat}>{cat}</option>
                    ))}
                </select>

                {/* Level Filter */}
                <select 
                    value={selectedLevel} 
                    onChange={(e) => setSelectedLevel(e.target.value)}
                    className="filter-select"
                >
                    {levels.map(lvl => (
                        <option key={lvl} value={lvl}>{lvl}</option>
                    ))}
                </select>
            </div>
            
            {/* --- Course Grid --- */}
            <div className="courses-grid">
                {filteredCourses.length > 0 ? (
                    filteredCourses.map(course => (
                        <CourseCard key={course.id} course={course} />
                    ))
                ) : (
                    <p className="no-results">No courses match your current filters. Try adjusting your selections!</p>
                )}
            </div>
        </div>
    );
}

export default CoursesPage;