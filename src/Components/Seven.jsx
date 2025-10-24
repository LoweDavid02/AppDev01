import { motion } from "framer-motion";

export default function Seven() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="section-title">What Clients Say</h2>
      <div className="testimonial">
        <p>
          “Lowe delivered our project beyond expectations — modern, fast, and beautifully designed!”
        </p>
        <span>- Client A</span>
      </div>
    </motion.section>
  );
}
