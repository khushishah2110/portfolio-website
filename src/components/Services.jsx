import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Instagram,
  Video,
  Lightbulb,
  TrendingUp,
  Film,
  Sparkles,
  Camera,
  BarChart3
} from 'lucide-react';
import './Services.css';

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const services = [
    {
      icon: <Instagram size={40} />,
      title: 'Social Media Management',
      description: 'Strategic planning and management of your social media presence across all platforms to maximize engagement and growth.',
      features: [
        'Content Strategy & Planning',
        'Community Management',
        'Analytics & Reporting',
        'Platform Optimization'
      ],
      color: '#E4405F'
    },
    {
      icon: <Video size={40} />,
      title: 'Video Editing',
      description: 'Professional video editing services for product showcases, promotional content, and engaging social media videos.',
      features: [
        'Product Showcase Videos',
        'Promotional Content',
        'Color Grading & Effects',
        'Sound Design'
      ],
      color: '#6366f1'
    },
    {
      icon: <Film size={40} />,
      title: 'Reels & Short Content',
      description: 'Creating viral-worthy short-form content optimized for Instagram Reels, TikTok, and YouTube Shorts.',
      features: [
        'Trending Content Creation',
        'Quick Turnaround',
        'Platform-Specific Optimization',
        'Engaging Hooks & CTAs'
      ],
      color: '#ec4899'
    },
    {
      icon: <Lightbulb size={40} />,
      title: 'Content Creation',
      description: 'End-to-end content creation from ideation to execution, ensuring your brand message resonates with your audience.',
      features: [
        'Creative Concept Development',
        'Brand Storytelling',
        'Visual Content Design',
        'Copywriting'
      ],
      color: '#f59e0b'
    },
    {
      icon: <Camera size={40} />,
      title: 'Product Photography',
      description: 'Stunning product photography and videography that showcases your products in the best light.',
      features: [
        'Product Shoots',
        'Lifestyle Photography',
        'E-commerce Ready Images',
        'Post-Production'
      ],
      color: '#8b5cf6'
    },
    {
      icon: <BarChart3 size={40} />,
      title: 'Brand Strategy',
      description: 'Comprehensive brand strategy and consulting to help you build a strong, consistent online presence.',
      features: [
        'Brand Identity Development',
        'Content Calendar Planning',
        'Competitor Analysis',
        'Growth Strategy'
      ],
      color: '#10b981'
    }
  ];

  return (
    <section id="services" className="services section" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            My <span className="gradient-text">Services</span>
          </h2>
          <p className="section-subtitle">
            Comprehensive solutions for your social media and content needs
          </p>
        </motion.div>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="service-card"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <motion.div
                className="service-icon"
                style={{ color: service.color }}
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                {service.icon}
              </motion.div>

              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>

              <ul className="service-features">
                {service.features.map((feature, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.3, delay: index * 0.1 + idx * 0.05 }}
                  >
                    <Sparkles size={16} style={{ color: service.color }} />
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>

              <motion.div
                className="service-overlay"
                style={{ background: `linear-gradient(135deg, ${service.color}20, ${service.color}05)` }}
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          className="services-cta"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="cta-content">
            <TrendingUp size={48} className="cta-icon" />
            <h3>Ready to elevate your social media presence?</h3>
            <p>Let's work together to create content that drives results</p>
            <motion.a
              href="#contact"
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
