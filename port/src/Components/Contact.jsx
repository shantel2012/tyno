import React from "react";
import { motion } from "framer-motion";
import "./Contact.css"; // create this file for styling

const Contact = () => {
  return (
    <section className="contact-section">
      <motion.h2
        className="contact-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Contact Me
      </motion.h2>

      <motion.p
        className="contact-description"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Have a question or want to work together? Fill out the form below and I’ll get back to you as soon as possible.
      </motion.p>

      <motion.form
        className="contact-form"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <motion.input
          type="text"
          name="name"
          placeholder="Your Name"
          whileFocus={{ scale: 1.05 }}
        />
        <motion.input
          type="email"
          name="email"
          placeholder="Your Email"
          whileFocus={{ scale: 1.05 }}
        />
        <motion.textarea
          name="message"
          rows="5"
          placeholder="Your Message"
          whileFocus={{ scale: 1.05 }}
        ></motion.textarea>
        <motion.button
          type="submit"
          className="btn-primary"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Send Message
        </motion.button>
      </motion.form>
    </section>
  );
};

export default Contact;
