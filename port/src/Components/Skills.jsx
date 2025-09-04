import React from "react";
import { motion } from "framer-motion";
import "./Skills.css";

const skills = [
  { name: "HTML", level: 90 },
  { name: "JAVASCRIPT", level: 85 },
  { name: "NODE.JS", level: 65 },
  { name: "NEXT.JS", level: 95 },
  { name: "CSS", level: 97 },
  { name: "REACT.JS", level: 100 },
  { name: "TAILWIND CSS", level: 63 },
  { name: "SUPABASE", level: 95 },
];

const Skills = () => {
  return (
    <section className="skills-section">
      <motion.h2
        className="skills-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        My Skills
      </motion.h2>

      <motion.p
        className="skills-description"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Skilled in HTML, CSS, JavaScript, React, and Tailwind CSS, with growing
        knowledge in full-stack development. Focused on creating modern,
        responsive, and user-friendly applications.
      </motion.p>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="skill-box"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 + index * 0.2, duration: 0.8 }}
          >
            <div className="skill-labels">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>
            <div className="progress-bar">
              <motion.div
                className="progress-fill"
                style={{ width: `${skill.level}%` }}
                initial={{ width: 0 }}
                animate={{ width: `${skill.level}%` }}
                transition={{ delay: 0.5 + index * 0.2, duration: 1 }}
              ></motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
