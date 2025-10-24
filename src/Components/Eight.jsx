import { motion } from "framer-motion";

export default function Eight() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="section-title">Get In Touch</h2>
      <form className="contact-form">
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Message" rows="5"></textarea>
        <button type="submit" className="btn-primary">Send Message</button>
      </form>
    </motion.section>
  );
}
