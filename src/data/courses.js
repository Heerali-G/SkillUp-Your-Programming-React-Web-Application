// File: src/data/courses.js

export const mockCourses = [
    // --- Existing Courses (for context) ---
    {
        id: 'react-mastery',
        title: 'React Hooks & Context Mastery',
        category: 'Frontend',
        level: 'Advanced',
        duration: '15 hours',
        instructor: 'Dr. Jane Code',
        rating: 4.8,
        description: 'Deep dive into custom hooks, state management with Context, and performance optimization.',
        price: 499
    },
    {
        id: 'python-fundamentals',
        title: 'Python for Beginners: Zero to Hero',
        category: 'Backend',
        level: 'Beginner',
        duration: '20 hours',
        instructor: 'Alex Johnson',
        rating: 4.5,
        description: 'Learn fundamental programming concepts, data types, and control flow using Python.',
        price: 499
    },
    {
        id: 'data-structures-js',
        title: 'Data Structures and Algorithms in JavaScript',
        category: 'Algorithms',
        level: 'Intermediate',
        duration: '30 hours',
        instructor: 'Chris Lee',
        rating: 4.9,
        description: 'The definitive guide to preparing for coding interviews with essential DSA knowledge.',
        price: 550
    },
    {
        id: 'node-express-api',
        title: 'Building RESTful APIs with Node.js and Express',
        category: 'Backend',
        level: 'Intermediate',
        duration: '12 hours',
        instructor: 'Dr. Jane Code',
        rating: 4.6,
        description: 'Learn how to create scalable and robust backend services using the MERN stack backend tools.',
        price: 550
    },

    // --- NEW COURSES ADDED BELOW ---

    {
        id: 'data-science-pandas',
        title: 'Data Analysis with Pandas and NumPy',
        category: 'Data Science',
        level: 'Intermediate',
        duration: '18 hours',
        instructor: 'Emily Data',
        rating: 4.7,
        description: 'Master data cleaning, manipulation, and analysis using Python\'s most powerful libraries: Pandas and NumPy.',
        price: 399
    },
    {
        id: 'docker-fundamentals',
        title: 'Docker and Kubernetes for Beginners',
        category: 'DevOps',
        level: 'Beginner',
        duration: '10 hours',
        instructor: 'Mark Deploy',
        rating: 4.4,
        description: 'Get started with containers, Dockerfiles, and basic deployment concepts using Kubernetes.',
        price: 299
    },
    {
        id: 'advanced-typescript',
        title: 'Advanced TypeScript Patterns',
        category: 'Frontend',
        level: 'Advanced',
        duration: '8 hours',
        instructor: 'Dr. Jane Code',
        rating: 4.9,
        description: 'Learn utility types, conditional types, and how to write highly maintainable TypeScript codebases.',
        price: 650
    },
    {
        id: 'sql-deep-dive',
        title: 'SQL Deep Dive: Optimizing Queries and Database Design',
        category: 'Backend',
        level: 'Intermediate',
        duration: '14 hours',
        instructor: 'Alex Johnson',
        rating: 4.7,
        description: 'Focus on advanced SQL commands, index optimization, and relational database design principles.',
        price: 450
    },
    {
        id: 'frontend-testing',
        title: 'Unit and Integration Testing with Jest and Testing Library',
        category: 'Frontend',
        level: 'Intermediate',
        duration: '9 hours',
        instructor: 'Chris Lee',
        rating: 4.6,
        description: 'Learn to write robust tests for React components using the Jest testing framework and React Testing Library.',
        price: 350
    },
    {
        id: 'cybersecurity-basics',
        title: 'Web Application Security Fundamentals',
        category: 'Security',
        level: 'Beginner',
        duration: '10 hours',
        instructor: 'Sofia Guard',
        rating: 4.3,
        description: 'Introduction to common web vulnerabilities like XSS, CSRF, and best practices for secure coding.',
        price: 399
    },
];

// Reusable array of filter options (Updated to include DevOps and Security)
export const categories = ['All', 'Frontend', 'Backend', 'Algorithms', 'Data Science', 'DevOps', 'Security'];
export const levels = ['All', 'Beginner', 'Intermediate', 'Advanced'];
