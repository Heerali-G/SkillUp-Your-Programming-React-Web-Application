🚀 SkillSprint: Accelerate Your Coding Journey
Project Overview
SkillSprint is a modern Single Page Application (SPA) designed as an engaging, project-based learning platform for aspiring and professional developers. This platform allows users to browse courses, track their skill progression, and manage their learning profiles.

The application is built using React and modern component architecture with a focus on clean design, efficient state management, and client-side routing.

✨ Features
Course Catalog: Browse and filter a comprehensive list of programming courses (React, Python, DSA, DevOps) using real-time search and filtering.

Skill Tracker: Track individual technical skills (e.g., React, JavaScript) with a custom Level Up system (Beginner to Expert).

User Dashboard: View personal learning statistics, course completion progress, and profile information.

Client-Side Routing: Fast, seamless navigation across all pages using react-router-dom.

Responsive Design: Optimized layout for desktop, tablet, and mobile viewing.

🛠️ Technology Stack
Frontend Framework: React (Functional Components and Hooks)

Routing: react-router-dom (v6)

Styling: Pure CSS / Modern CSS (./styles/ and component-specific CSS)

State Management: React's built-in useState and useMemo hooks.

💻 Getting Started
Follow these steps to get a copy of the project running on your local machine for development and testing purposes.

Prerequisites
You need to have Node.js and npm (or yarn) installed on your system.

Bash

# Check if Node.js is installed
node -v
# Check if npm is installed
npm -v
Installation
Clone the Repository:

Bash

git clone https://github.com/YourUsername/SkillSprint.git
cd SkillSprint
Install Dependencies:

Bash

npm install
# or
yarn install
Run the Application:
Start the development server. The application will typically open at http://localhost:3000.

Bash

npm start
# or
yarn start
📂 Project Structure
The codebase follows a modular structure to separate concerns between routing, layout, pages, and feature logic.

/src
|-- /components           # Small, reusable UI elements (e.g., Navbar, Footer, CourseCard)
|-- /data                 # Mock JSON data (e.g., courses.js)
|-- /features             # Feature-specific logic & heavy components
|   |-- /profile          # (ProfileCard.js, SkillTracker.js, Profile.css)
|-- /pages                # Top-level components mapped to routes
|   |-- /styles           # CSS for the page-level components
|   |-- AboutPage.js
|   |-- ContactPage.js
|   |-- CoursesPage.js
|   |-- HomePage.js
|   |-- ProfilePage.js
|-- App.js                # Main router and layout definition
|-- index.js              # React entry point
