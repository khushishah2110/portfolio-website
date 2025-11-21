import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { ExternalLink, Play } from 'lucide-react';
import './Portfolio.css';

const Portfolio = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Brand Social Media Campaign',
      category: 'social-media',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80',
      description: 'Complete social media strategy and content creation for fashion brand',
      stats: { reach: '500K+', engagement: '12%', duration: '3 months' }
    },
    {
      id: 2,
      title: 'Product Showcase Video',
      category: 'video',
      image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&q=80',
      description: 'Professional product video for tech startup launch',
      stats: { views: '100K+', conversion: '8%', duration: '2 min' }
    },
    {
      id: 3,
      title: 'Viral Instagram Reels Series',
      category: 'reels',
      image: 'https://images.unsplash.com/photo-1611162616305-c69b3037c7f5?w=800&q=80',
      description: '15-part reel series generating massive engagement',
      stats: { reach: '1M+', shares: '50K+', likes: '200K+' }
    },
    {
      id: 4,
      title: 'E-commerce Brand Management',
      category: 'social-media',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
      description: 'Full social media management for online retail brand',
      stats: { sales: '+150%', followers: '50K+', posts: '100+' }
    },
    {
      id: 5,
      title: 'Behind-the-Scenes Content',
      category: 'video',
      image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&q=80',
      description: 'Documentary-style video content for brand storytelling',
      stats: { episodes: '8', views: '250K+', retention: '85%' }
    },
    {
      id: 6,
      title: 'TikTok Viral Campaign',
      category: 'reels',
      image: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=800&q=80',
      description: 'Trending content that went viral on TikTok',
      stats: { views: '2M+', shares: '100K+', likes: '500K+' }
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'social-media', label: 'Social Media' },
    { id: 'video', label: 'Video Editing' },
    { id: 'reels', label: 'Reels & Shorts' }
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);

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
            A showcase of my recent work and successful projects
          </p>
        </motion.div>

        <motion.div
          className="portfolio-filters"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {filter.label}
            </motion.button>
          ))}
        </motion.div>

        <motion.div layout className="portfolio-grid">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="portfolio-item"
                whileHover={{ y: -10 }}
              >
                <div className="portfolio-image">
                  <img src={project.image} alt={project.title} loading="lazy" />
                  <div className="portfolio-overlay">
                    <motion.button
                      className="portfolio-btn"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Play size={20} />
                      <span>View Project</span>
                    </motion.button>
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
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <motion.div
            className="no-projects"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <p>No projects found in this category</p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
