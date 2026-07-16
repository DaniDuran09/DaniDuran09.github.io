import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <>
      <div className="animated-bg"></div>
      
      <button className="theme-toggle" onClick={toggleTheme}>
        {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
      </button>

      <main className="portfolio-container">
        
        {/* Header Section */}
        <header className="glass-panel">
          <h1>Daniel Duran Torres</h1>
          <h2>Mobile Developer specializing in React Native</h2>
          <p>
            Experienced in mobile application development, REST API integration, and building interfaces focused on performance and user experience. Proficient in JavaScript, TypeScript, React, and Node.js.
          </p>
          <div style={{ marginTop: '16px' }}>
            <a href="mailto:daniel.duran.torres09@gmail.com" style={{ marginRight: '16px' }}>📧 daniel.duran.torres09@gmail.com</a>
            <a href="https://github.com/DaniDuran09" target="_blank">🐙 GitHub</a>
          </div>
        </header>

        {/* Experience Section */}
        <section className="glass-panel">
          <h2 className="section-title">Professional Experience</h2>
          
          <div className="experience-list">
            {/* GRUPO FR */}
            <div className="experience-card">
              <div className="experience-image-slot">
                <span>[ Image Placeholder ]<br/>Drop image here later</span>
              </div>
              <div className="experience-details">
                <h3>Developer full Stack</h3>
                <div className="company">GRUPO FR - Morelos, Mexico</div>
                <div className="date">May 2026 - Present</div>
                <ul>
                  <li>Development of a mobile time clock module in React Native, implementing geolocation validations to restrict registrations outside of authorized locations.</li>
                  <li>Administrative panel development in React with report generation and export in Excel.</li>
                  <li>Design and implementation of REST APIs in Node.js and Express, integrating with PostgreSQL.</li>
                </ul>
              </div>
            </div>

            {/* TOBI */}
            <div className="experience-card">
              <div className="experience-image-slot">
                <span>[ Image Placeholder ]<br/>Drop image here later</span>
              </div>
              <div className="experience-details">
                <h3>Developer mobile</h3>
                <div className="company">TOBI - Mexico City (Remote)</div>
                <div className="date">June 2024 - June 2026</div>
                <ul>
                  <li>Complete mobile application development using React Native and TypeScript, from implementation to publication in App Store and Google Play Store.</li>
                  <li>REST API integration, global state management with Redux, and async flows via Axios.</li>
                  <li>Implementation of push notifications, deep linking, and code organization.</li>
                </ul>
              </div>
            </div>

            {/* SAID */}
            <div className="experience-card">
              <div className="experience-image-slot">
                <span>[ Image Placeholder ]<br/>Drop image here later</span>
              </div>
              <div className="experience-details">
                <h3>Developer web</h3>
                <div className="company">SAID - Morelos, Mexico</div>
                <div className="date">January 2026 - April 2026</div>
                <ul>
                  <li>Development and implementation of public and protected routes, applying authentication mechanisms.</li>
                  <li>Integration and consumption of REST APIs, efficient data management using TanStack Query.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="glass-panel">
          <h2 className="section-title">Technical Skills</h2>
          <div className="skills-container">
            {['Node.js', 'TypeScript', 'React', 'React Native', 'MySQL', 'Kotlin', 'CSS', 'PostgreSQL', 'Docker', 'MongoDB'].map(skill => (
              <span key={skill} className="skill-badge glass-panel" style={{ padding: '8px 16px', backdropFilter: 'blur(4px)' }}>
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section className="glass-panel">
          <h2 className="section-title">Education</h2>
          <div className="experience-details">
            <h3>Technological University of Emiliano Zapata</h3>
            <div className="company">Morelos, Mexico</div>
            <div className="date">August 2024 - Present</div>
            <p>Associate's Degree in Multiplatform Software Development</p>
          </div>
        </section>

      </main>
    </>
  );
}

export default App;
