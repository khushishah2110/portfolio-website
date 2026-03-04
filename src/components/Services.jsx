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
  BarChart3,
  Award
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
          <div className="cta-grid">
            <div className="cta-left">
              <motion.div
                className="cta-badge"
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.9 }}
              >
                <Sparkles size={20} />
                <span>Let's Create Magic</span>
              </motion.div>
              <h3>Ready to Transform Your Brand?</h3>
              <p>
                Partner with me to create compelling content that resonates with your audience
                and drives measurable results. From strategy to execution, I'll help bring your
                vision to life.
              </p>
              <div className="cta-stats">
                <div className="cta-stat">
                  <TrendingUp size={24} />
                  <div>
                    <strong>50+</strong>
                    <span>Successful Projects</span>
                  </div>
                </div>
                <div className="cta-stat">
                  <Award size={24} />
                  <div>
                    <strong>2M+</strong>
                    <span>Total Reach</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="cta-right">
              <div className="cta-features">
                <motion.div
                  className="cta-feature"
                  whileHover={{ x: 10 }}
                >
                  <div className="feature-icon">
                    <Video size={24} />
                  </div>
                  <div className="feature-content">
                    <h4>Professional Quality</h4>
                    <p>High-quality content that stands out</p>
                  </div>
                </motion.div>

                <motion.div
                  className="cta-feature"
                  whileHover={{ x: 10 }}
                >
                  <div className="feature-icon">
                    <TrendingUp size={24} />
                  </div>
                  <div className="feature-content">
                    <h4>Proven Results</h4>
                    <p>Data-driven strategies that work</p>
                  </div>
                </motion.div>

                <motion.div
                  className="cta-feature"
                  whileHover={{ x: 10 }}
                >
                  <div className="feature-icon">
                    <Lightbulb size={24} />
                  </div>
                  <div className="feature-content">
                    <h4>Creative Solutions</h4>
                    <p>Unique ideas tailored to your brand</p>
                  </div>
                </motion.div>
              </div>

              <motion.a
                href="#contact"
                className="cta-button"
                whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(99, 102, 241, 0.4)' }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Start Your Project</span>
                <TrendingUp size={20} />
              </motion.a>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="cta-bg-elements">
            <motion.div
              className="cta-circle cta-circle-1"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.3, 0.2],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            <motion.div
              className="cta-circle cta-circle-2"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.15, 0.25, 0.15],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
