import React from "react";
import { motion } from "framer-motion";
import GY from "../assets/GY.jpg"; 
import "./Hero.css";

const Hero = () => {
  return (
    <section id="home" className="hero">
      {/* Left side text */}
      <motion.div
        className="intro"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <p className="hello">HELLO !</p>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          I’m <span>Tinomudaishe Kutama</span>
        </motion.h1>
        <motion.p
          className="role"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          Software Developer
        </motion.p>
        <motion.div
          className="buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <button className="btn-primary">HIRE ME</button>
          <button className="btn-secondary">MY WORKS</button>
        </motion.div>
      </motion.div>

      {/* Right side image */}
      <motion.div
        className="hero-img"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <img src={GY} alt="Tinomudaishe Kutama" />
      </motion.div>
    </section>
  );
};

export default Hero;
