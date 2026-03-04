import { motion } from 'framer-motion';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <motion.div
          className="footer-content"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p>&copy; 2026 Khushi Shah. All rights reserved.</p>
          <p className="footer-tagline">Crafted with passion and creativity</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
