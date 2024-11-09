"use client";

import Image from "next/image";
import React from "react";
import Typewriter from "typewriter-effect";

function Hero() {
  return (
    <div id="hero">
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-text-container">
            <h1 className="hero-title">
              I am
              <br className="hero-line-break" />
              <Typewriter
                options={{
                  strings: ['Sumbul Jawed', 'Web Developer', 'UI/UX Designer'],
                  autoStart: true,
                  loop: true,
                  cursor: "|",
                  delay: 60,
                  deleteSpeed: 50,
                }}
              />
            </h1>
            <div className="hero-divider" />
            <p className="hero-description">
              I am a passionate Web Developer focused on creating user-centered, highly interactive, and visually engaging web experiences. <br />
              I bridge the gap between design and functionality to deliver seamless digital solutions with expertise in both front-end development and UI/UX design.
            </p>
            <div className="hero-buttons">
              <a href="#contact" className="hero-button primary-button">
                Contact Me
              </a>
              <a href="/cv.jpg" download="My_CV.jpg" className="hero-button secondary-button">
                Download CV
              </a>
            </div>
          </div>
          <div className="hero-image-container">
            <Image
              className="hero-image"
              alt="hero"
              height={400}
              width={400}
              src={"/hijabi2.jpg"}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
