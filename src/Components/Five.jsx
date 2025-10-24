
import { motion } from "framer-motion";

export default function Five() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="section-title">Web Development Projects</h2>
      <p className="section-desc">
        Crafted with React, TypeScript, and modern front-end frameworks.
      </p>
      <div className="project-grid">
        <div className="project-card">Portfolio Website</div>
        <div className="project-card">Booking System</div>
        <div className="project-card">Chat App</div>
      </div>
    </motion.section>
  );
}


