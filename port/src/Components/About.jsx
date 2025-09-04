import React from "react";
import { motion } from "framer-motion";
import "./About.css";
import GY from "../assets/GY.jpg"; // your uploaded image

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <motion.div
          className="about-image"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img src={GY} alt="Profile" />
        </motion.div>

        <motion.div
          className="about-text"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h2>About Me</h2>
          <p>
            A passionate software developer focused on building modern, responsive, and user-friendly web applications.
            Skilled in HTML, CSS, JavaScript, React, and Tailwind CSS, with growing experience in full-stack development.
            Dedicated to creating impactful projects while continuously learning and improving in the tech industry....
          </p>
          <a
            href="/path-to-your-cv.pdf"
            className="download-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            DOWNLOAD CV
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
