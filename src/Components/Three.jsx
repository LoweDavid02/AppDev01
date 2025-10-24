import { motion } from "framer-motion";

export default function Three() {
  const skills = [
    "React + Vite",
    "HTML / CSS / JS / TS",
    "Bootstrap / Tailwind",
    "Figma / Prototyping",
    "Node.js / NPM",
    "GitHub / VS Code"
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="section-title">Skills & Tools</h2>
      <div className="skills-grid">
        {skills.map((s, i) => (
          <motion.div
            key={i}
            className="skill-card"
            whileHover={{ scale: 1.08 }}
          >
            {s}
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
