// File: src/features/profile/SkillTracker.js
import React, { useState } from 'react';
// CSS is imported in the container ProfilePage.js

function SkillTracker() {
  const [skills, setSkills] = useState([
    { name: 'React', level: 'Intermediate' },
    { name: 'JavaScript', level: 'Advanced' }
  ]);
  const [newSkill, setNewSkill] = useState('');

  const addSkill = () => {
    const skillName = newSkill.trim();
    const isDuplicate = skills.some(
      (skill) => skill.name.toLowerCase() === skillName.toLowerCase()
    );

    if (skillName && !isDuplicate) {
      setSkills([...skills, { name: skillName, level: 'Beginner' }]);
      setNewSkill('');
    } else if (isDuplicate) {
      alert(`The skill "${skillName}" is already in your list!`);
    }
  };

  const removeSkill = (index) => {
    setSkills(skills.filter((_, i) => i !== index));
  };

  const levelUp = (index) => {
    const levels = ['Beginner', 'Intermediate', 'Advanced', 'Expert'];
    const currentLevel = skills[index].level;
    const currentIndex = levels.indexOf(currentLevel);

    if (currentIndex < levels.length - 1) {
      const nextLevel = levels[currentIndex + 1];
      const updatedSkills = [...skills];
      updatedSkills[index].level = nextLevel;
      setSkills(updatedSkills);
    }
  };
  
  const getLevelClass = (level) => {
    return `skill-level skill-level-${level.toLowerCase()}`;
  };

  return (
    <div className="skills-manager-container">
      <h2 className="skills-heading">Your Skill Tracker 🎯</h2>
      
      {/* Input Section */}
      <div className="skill-input-group">
        <input 
          className="skill-input"
          value={newSkill} 
          onChange={(e) => setNewSkill(e.target.value)} 
          onKeyDown={(e) => {
            if (e.key === 'Enter') addSkill();
          }}
          placeholder="e.g., Python, Data Structures" 
        />
        <button className="add-skill-btn" onClick={addSkill}>
          Add Skill
        </button>
      </div>

      {/* Skills List */}
      <ul className="skills-list">
        {skills.length === 0 ? (
            <p className="no-skills-message">Add your first skill to start sprinting! 💻</p>
        ) : (
            skills.map((skill, index) => (
                <li key={index} className="skill-item">
                    <span className="skill-name">{skill.name}</span>
                    
                    <div className="skill-actions">
                        <span className={getLevelClass(skill.level)}>{skill.level}</span>
                        
                        <button 
                            className="level-up-btn" 
                            onClick={() => levelUp(index)}
                            disabled={skill.level === 'Expert'}
                        >
                            {skill.level === 'Expert' ? 'Max Level' : 'Level Up ✨'}
                        </button>
                        
                        <button 
                            className="remove-skill-btn" 
                            onClick={() => removeSkill(index)}
                        >
                            &times;
                        </button>
                    </div>
                </li>
            ))
        )}
      </ul>
    </div>
  );
}
export default SkillTracker;