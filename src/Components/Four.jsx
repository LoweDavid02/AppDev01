import { motion } from "framer-motion";

export default function Four() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="section-title">UI/UX Projects</h2>
      <p className="section-desc">
        Modern, user-focused interfaces designed for clarity and engagement.
      </p>
      <div className="project-grid">
        <div className="project-card">Dashboard Redesign</div>
        <div className="project-card">E-Commerce Wireframe</div>
        <div className="project-card">Portfolio Prototype</div>
      </div>
    </motion.section>
  );
}
