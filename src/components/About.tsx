import React from 'react';
import Link from 'next/link';

function About() {
  return (
    <div id="about">
      <section className="about-section">
        <div className="about-container">
          <h1 className="about-title">
            About Me
          </h1>
          <div className="about-description-container">
            <p className="about-description">
              With a background in commerce (B.Com) and a strong passion for technology, I have
              dedicated myself to advancing in the IT industry. My journey blends financial acumen
              with technical skills, enabling me to approach tech-driven projects with a unique
              perspective. I focus on creating solutions that drive efficiency, streamline workflows,
              and enhance user experiences.
            </p>
            <p className="about-description about-description-second">
              Whether it is coding or design, I m committed to continuous learning and applying my
              knowledge to produce meaningful results. I thrive in collaborative environments where
              I can contribute ideas and learn from others while pushing the boundaries of whats
              possible in the world of technology.
            </p>
          </div>
          <div className="about-buttons">
            <Link href="#contact">
              <button className="about-button contact-button">
                Contact Me
              </button>
            </Link>
            <Link href="https://milestone-1-2-sumbul.vercel.app/">
              <button className="about-button cv-button">
                View CV
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
