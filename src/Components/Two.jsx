import { motion } from "framer-motion";

export default function Two() {
  return (
    <motion.section
      className="about-section"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="section-title">About Me</h2>
      <p className="section-desc">
        I’m a passionate web developer who loves blending design and logic.
        My goal is to create interfaces that are not only beautiful but also
        intuitive, responsive, and accessible to everyone.
      </p>
    </motion.section>
  );
}
