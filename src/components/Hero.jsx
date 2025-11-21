import { motion } from 'framer-motion';
import { Instagram, Linkedin, Mail, ArrowDown, Sparkles } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>

      <div className="container">
        <div className="hero-content">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="hero-tag"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Sparkles size={16} />
              <span>Mass Communication Graduate</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Hi, I'm <span className="gradient-text">Your Name</span>
            </motion.h1>

            <motion.h2
              className="hero-subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Social Media Manager & Video Editor
            </motion.h2>

            <motion.p
              className="hero-description"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Crafting compelling stories through creative content. Specialized in social media
              management, video editing for product showcases, reels, and engaging social content
              that drives results.
            </motion.p>

            <motion.div
              className="hero-buttons"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <motion.button
                className="btn btn-primary"
                whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(99, 102, 241, 0.3)' }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToContact}
              >
                Get In Touch
              </motion.button>
              <motion.a
                href="#portfolio"
                className="btn btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
              </motion.a>
            </motion.div>

            <motion.div
              className="hero-socials"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <motion.a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, color: '#E4405F' }}
                whileTap={{ scale: 0.9 }}
              >
                <Instagram size={24} />
              </motion.a>
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, color: '#0077B5' }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin size={24} />
              </motion.a>
              <motion.a
                href="mailto:your.email@example.com"
                whileHover={{ scale: 1.2, color: '#6366f1' }}
                whileTap={{ scale: 0.9 }}
              >
                <Mail size={24} />
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-image"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="image-container">
              <div className="image-placeholder">
                <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="200" cy="200" r="180" fill="url(#gradient1)" opacity="0.2"/>
                  <circle cx="200" cy="150" r="60" fill="url(#gradient2)"/>
                  <path d="M100 300 Q200 250 300 300 L300 400 L100 400 Z" fill="url(#gradient2)"/>
                  <defs>
                    <linearGradient id="gradient1" x1="0" y1="0" x2="400" y2="400">
                      <stop offset="0%" stopColor="#6366f1"/>
                      <stop offset="100%" stopColor="#ec4899"/>
                    </linearGradient>
                    <linearGradient id="gradient2" x1="0" y1="0" x2="400" y2="400">
                      <stop offset="0%" stopColor="#ec4899"/>
                      <stop offset="100%" stopColor="#f59e0b"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="floating-card card-1">
                <span>📱</span>
                <p>Social Media</p>
              </div>
              <div className="floating-card card-2">
                <span>🎬</span>
                <p>Video Editing</p>
              </div>
              <div className="floating-card card-3">
                <span>✨</span>
                <p>Creative Content</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <ArrowDown size={24} />
      </motion.div>
    </section>
  );
};

export default Hero;
