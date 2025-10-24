
import { motion } from "framer-motion";

export default function Nine() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <p>© 2025 Lowe David Tubat • Crafted with ❤️ using React + Vite</p>
    </motion.footer>
  );
}



