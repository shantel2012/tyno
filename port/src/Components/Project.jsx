import React from "react";
import { motion } from "framer-motion";
import "./Project.css"; // create this file for styling

const projects = [
  {
    title: "Parking Space Finder App",
    description:
      "A full-stack parking booking platform built with React, Tailwind, Node.js, Supabase, and Leaflet. Includes real-time map integration, bookings, and admin dashboards.",
    link: "#",
  },
  {
    title: "BuildLink Construction Platform",
    description:
      "A multi-page React platform for construction services, featuring handyman/company profiles, services listings, testimonials, and job postings.",
    link: "#",
  },
  {
    title: "Portfolio Website",
    description:
      "A responsive, animated React portfolio showcasing projects, skills, and contact information with modern design.",
    link: "#",
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <section className="projects-section">
      <motion.h2
        className="projects-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        My Projects
      </motion.h2>

      <motion.p
        className="projects-description"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Here are some of the projects I have built recently. They showcase my
        skills in React, full-stack development, and modern web design.
      </motion.p>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + index * 0.3, duration: 0.8 }}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-btn"
              >
                View Project
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
