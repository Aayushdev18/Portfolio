import React, { useState } from "react";
import { motion } from "framer-motion";
import "./About.scss";

const About = ({ scrollToPortfolio }) => {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <section className="about">
      <div className="wrapper">
        {/* Left Side Image */}
        <motion.div
          className="imageContainer"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <img src="/hero.png" alt="Ayush Dev" />
        </motion.div>

        {/* Right Side Text */}
        <motion.div
          className="textContainer"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2>ABOUT ME</h2>
          <h1>Ayush Dev</h1>
          <p>
            I'm Ayush Dev, a 2nd year undergraduate student pursuing B.Tech in
            Computer Technology with AI From Newton School of Technology.
          </p>
          <p>
            I have a deep passion for building modern, scalable, and responsive web
            applications. From designing sleek UI to writing clean backend code, I love
            turning ideas into digital experiences. I'm always exploring new technologies,
            frameworks, and tools to sharpen my skills and push the boundaries of what I can build.
          </p>
          <p>
            I have a coding interest too! I solve LeetCode problems every day, sharpening my
            algorithm skills. You can see my progress on LeetCode and challenge yourself too!
          </p>

          <div className="buttons">
            <button
              className="contactButton"
              onClick={() => setShowLinks(!showLinks)}
            >
              Let's Connect
            </button>
            <button onClick={scrollToPortfolio}>See Projects</button>
            <button
              className="leetcodeButton"
              onClick={() => window.open("https://leetcode.com/u/aayushh_2607/", "_blank")}
            >
              LeetCode Profile
            </button>
          </div>

          {showLinks && (
            <motion.div
              className="socialLinks"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <a
                href="https://www.linkedin.com/in/ayush-dev-a255a5289/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a
                href="https://www.instagram.com/aayushh.2607/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </motion.div>
          )}
        </motion.div>

        {/* Sliding Text Background */}
        {/* <motion.div
          className="slidingTextContainer"
          initial={{ x: "-50%" }}
          animate={{ x: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          DEVELOPER
        </motion.div> */}
      </div>
    </section>
  );
};

export default About;
