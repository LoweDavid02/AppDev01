
import { motion } from "framer-motion";

export default function Six() {
  const timeline = [
    { year: "2023", role: "UI/UX Designer Intern" },
    { year: "2024", role: "Front-End Developer" },
    { year: "2025", role: "Freelance Web Designer" },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="section-title">My Journey</h2>
      <div className="timeline">
        {timeline.map((t, i) => (
          <div key={i} className="timeline-item">
            <span>{t.year}</span>
            <p>{t.role}</p>
          </div>
        ))}
      </div>
    </motion.section>
  );
}


