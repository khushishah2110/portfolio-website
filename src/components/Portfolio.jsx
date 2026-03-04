import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { Play, ArrowRight, Star } from 'lucide-react';
import './Portfolio.css';

const Portfolio = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  // Featured projects only (for homepage)
  const featuredProjects = [
    {
      id: 1,
      title: 'Luxury Fashion Brand Campaign',
      category: 'social-media',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200&q=80',
      description: 'Complete social media strategy and content creation for a luxury fashion brand',
      stats: { reach: '2.5M+', engagement: '15.8%', followers: '+125K' },
      featured: true,
      size: 'large'
    },
    {
      id: 2,
      title: 'Tech Product Launch Video',
      category: 'video',
      image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1200&q=80',
      description: 'Professional product launch video for revolutionary tech startup',
      stats: { views: '500K+', conversion: '12.3%', retention: '89%' },
      featured: true,
      size: 'medium'
    },
    {
      id: 3,
      title: 'Viral Instagram Reels Series',
      category: 'reels',
      image: 'https://images.unsplash.com/photo-1611162616305-c69b3037c7f5?w=1200&q=80',
      description: 'Educational reel series that went viral, generating millions of views',
      stats: { reach: '3.8M+', likes: '850K+', shares: '125K+' },
      featured: true,
      size: 'medium'
    },
    {
      id: 4,
      title: 'E-commerce Brand Growth',
      category: 'social-media',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80',
      description: 'Full-scale social media management driving massive sales growth',
      stats: { sales: '+180%', followers: '95K+', roas: '4.5x' },
      featured: true,
      size: 'large'
    }
  ];

  return (
    <section id="portfolio" className="portfolio section" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            My <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="section-subtitle">
            Showcasing my best work and successful campaigns
          </p>
        </motion.div>

        {/* Masonry Grid Layout */}
        <div className="portfolio-masonry">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`portfolio-item ${project.size}`}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <div className="portfolio-image">
                <img src={project.image} alt={project.title} loading="lazy" />
                <div className="portfolio-overlay">
                  <motion.div
                    className="overlay-content"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                  >
                    <Play size={32} />
                    <span>View Project</span>
                  </motion.div>
                </div>
                <div className="featured-badge">
                  <Star size={14} />
                  <span>Featured</span>
                </div>
              </div>

              <div className="portfolio-content">
                <h3 className="portfolio-title">{project.title}</h3>
                <p className="portfolio-description">{project.description}</p>

                <div className="portfolio-stats">
                  {Object.entries(project.stats).map(([key, value]) => (
                    <div key={key} className="stat">
                      <span className="stat-value">{value}</span>
                      <span className="stat-label">{key}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Projects Button */}
        <motion.div
          className="portfolio-cta"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <motion.a
            href="/portfolio"
            className="view-all-btn"
            whileHover={{ scale: 1.05, boxShadow: '0 15px 40px rgba(99, 102, 241, 0.3)' }}
            whileTap={{ scale: 0.95 }}
          >
            <span>View All Projects</span>
            <ArrowRight size={20} />
          </motion.a>
          <p className="cta-text">Explore my complete portfolio with 50+ successful projects</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
