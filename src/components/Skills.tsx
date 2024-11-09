import React from "react";

function Skills() {
  return (
    <div id="skills">
      <section className="skills-section">
        <div className="skills-container">
          <h1 className="skills-title">My Skills</h1>
          <div className="skills-grid">
            {/* Skill 1 */}
            <div className="skill-card">
              <h2 className="skill-title">JavaScript</h2>
              <div className="progress-bar">
                <div className="progress-bar-fill js-progress"></div>
              </div>
            </div>

            {/* Skill 2 */}
            <div className="skill-card">
              <h2 className="skill-title">React</h2>
              <div className="progress-bar">
                <div className="progress-bar-fill react-progress"></div>
              </div>
            </div>

            {/* Skill 3 */}
            <div className="skill-card">
              <h2 className="skill-title">Node.js</h2>
              <div className="progress-bar">
                <div className="progress-bar-fill node-progress"></div>
              </div>
            </div>

            {/* Skill 4 */}
            <div className="skill-card">
              <h2 className="skill-title">Next.js</h2>
              <div className="progress-bar">
                <div className="progress-bar-fill nextjs-progress"></div>
              </div>
            </div>

            {/* Skill 5 */}
            <div className="skill-card">
              <h2 className="skill-title">CSS</h2>
              <div className="progress-bar">
                <div className="progress-bar-fill css-progress"></div>
              </div>
            </div>

            {/* Skill 6 */}
            <div className="skill-card">
              <h2 className="skill-title">Tailwind CSS</h2>
              <div className="progress-bar">
                <div className="progress-bar-fill tailwind-progress"></div>
              </div>
            </div>

            {/* Skill 7 */}
            <div className="skill-card">
              <h2 className="skill-title">TypeScript</h2>
              <div className="progress-bar">
                <div className="progress-bar-fill typescript-progress"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Skills;
