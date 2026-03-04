import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import {
  Instagram,
  Youtube,
  Camera,
  Sparkles,
  Star,
  TrendingUp,
  Eye,
  Heart
} from 'lucide-react';
import './ProjectsPage.css';

const ProjectsPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeFilter, setActiveFilter] = useState('all');

  const allProjects = [
    {
      id: 1,
      title: 'Luxury Fashion Brand Campaign',
      category: 'social-media',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200&q=80',
      description: 'Complete social media strategy and content creation for a luxury fashion brand',
      stats: { reach: '2.5M+', engagement: '15.8%', followers: '+125K' },
      size: 'large'
    },
    {
      id: 2,
      title: 'Tech Product Launch Video',
      category: 'video',
      image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1200&q=80',
      description: 'Professional product launch video for revolutionary tech startup',
      stats: { views: '500K+', conversion: '12.3%', retention: '89%' },
      size: 'medium'
    },
    {
      id: 3,
      title: 'Viral Instagram Reels Series',
      category: 'reels',
      image: 'https://images.unsplash.com/photo-1611162616305-c69b3037c7f5?w=1200&q=80',
      description: 'Educational reel series that went viral, generating millions of views',
      stats: { reach: '3.8M+', likes: '850K+', shares: '125K+' },
      size: 'medium'
    },
    {
      id: 4,
      title: 'E-commerce Brand Growth',
      category: 'social-media',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80',
      description: 'Full-scale social media management driving massive sales growth',
      stats: { sales: '+180%', followers: '95K+', roas: '4.5x' },
      size: 'large'
    },
    {
      id: 5,
      title: 'Documentary-Style Brand Video',
      category: 'video',
      image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=1200&q=80',
      description: 'Behind-the-scenes documentary series showcasing brand values and culture',
      stats: { episodes: '8', views: '750K+', retention: '92%' },
      size: 'small'
    },
    {
      id: 6,
      title: 'TikTok Viral Dance Challenge',
      category: 'reels',
      image: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=1200&q=80',
      description: 'Created branded dance challenge that became a viral trend',
      stats: { views: '5.2M+', ugc: '12K+', likes: '1.2M+' },
      size: 'medium'
    },
    {
      id: 7,
      title: 'Corporate Event Coverage',
      category: 'video',
      image: 'https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=1200&q=80',
      description: 'Full-day event coverage including highlights reel and promotional content',
      stats: { days: '3', footage: '50+ hrs', views: '120K' },
      size: 'small'
    },
    {
      id: 8,
      title: 'Influencer Collaboration Campaign',
      category: 'social-media',
      image: 'https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=1200&q=80',
      description: 'Multi-influencer campaign with 50+ creators across various niches',
      stats: { reach: '8.5M+', influencers: '50+', roi: '520%' },
      size: 'large'
    },
    {
      id: 9,
      title: 'Product Photography Series',
      category: 'social-media',
      image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1200&q=80',
      description: 'Stunning product photography for e-commerce brand',
      stats: { photos: '200+', products: '50+', sales: '+45%' },
      size: 'medium'
    },
    {
      id: 10,
      title: 'YouTube Content Strategy',
      category: 'video',
      image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=1200&q=80',
      description: 'Complete YouTube content strategy and video production',
      stats: { videos: '24', subscribers: '+50K', views: '2M+' },
      size: 'small'
    },
    {
      id: 11,
      title: 'Instagram Stories Campaign',
      category: 'reels',
      image: 'https://images.unsplash.com/photo-1611095790444-1dfa35e37b52?w=1200&q=80',
      description: 'Engaging Instagram Stories campaign with interactive elements',
      stats: { reach: '1.5M+', engagement: '18%', swipeups: '85K' },
      size: 'medium'
    },
    {
      id: 12,
      title: 'Brand Awareness Campaign',
      category: 'social-media',
      image: 'https://images.unsplash.com/photo-1557838923-2985c318be48?w=1200&q=80',
      description: 'Multi-platform brand awareness campaign with cohesive storytelling',
      stats: { reach: '4M+', brand: '+65%', engagement: '14%' },
      size: 'large'
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects', icon: Sparkles },
    { id: 'social-media', label: 'Social Media', icon: Instagram },
    { id: 'video', label: 'Video Production', icon: Youtube },
    { id: 'reels', label: 'Reels & Shorts', icon: Camera }
  ];

  const filteredProjects = activeFilter === 'all'
    ? allProjects
    : allProjects.filter(project => project.category === activeFilter);

  return (
    <div className="projects-page" ref={ref}>
      {/* Hero Section */}
      <section className="projects-page-hero">
        <div className="container">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="hero-badge"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Star size={18} />
              <span>Complete Projects</span>
            </motion.div>

            <h1 className="hero-title">
              My Complete <span className="gradient-text">Projects</span>
            </h1>

            <p className="hero-subtitle">
              Explore my full collection of successful campaigns, viral content, and
              brand transformations. Each project represents dedication, creativity, and measurable results.
            </p>

            <motion.div
              className="hero-stats"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="hero-stat">
                <TrendingUp size={24} />
                <div>
                  <strong>50+</strong>
                  <span>Projects</span>
                </div>
              </div>
              <div className="hero-stat">
                <Eye size={24} />
                <div>
                  <strong>20M+</strong>
                  <span>Total Reach</span>
                </div>
              </div>
              <div className="hero-stat">
                <Heart size={24} />
                <div>
                  <strong>35+</strong>
                  <span>Happy Clients</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Background Elements */}
        <div className="hero-bg">
          <motion.div
            className="bg-circle bg-1"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="bg-circle bg-2"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{ duration: 10, repeat: Infinity }}
          />
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects-section">
        <div className="container">
          {/* Filters */}
          <motion.div
            className="filters"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            {filters.map((filter) => {
              const Icon = filter.icon;
              return (
                <motion.button
                  key={filter.id}
                  className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
                  onClick={() => setActiveFilter(filter.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon size={18} />
                  <span>{filter.label}</span>
                  <span className="count">
                    {filter.id === 'all' ? allProjects.length : allProjects.filter(p => p.category === filter.id).length}
                  </span>
                </motion.button>
              );
            })}
          </motion.div>

          {/* Masonry Grid */}
          <motion.div layout className="projects-masonry">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  className={`project-card ${project.size}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ y: -8 }}
                >
                  <div className="project-image">
                    <img src={project.image} alt={project.title} loading="lazy" />
                    <div className="project-overlay">
                      <motion.div
                        className="overlay-icon"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <Sparkles size={32} />
                      </motion.div>
                    </div>
                  </div>

                  <div className="project-content">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>

                    <div className="project-stats">
                      {Object.entries(project.stats).map(([key, value]) => (
                        <div key={key} className="stat">
                          <span className="value">{value}</span>
                          <span className="label">{key}</span>
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
              className="no-results"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <p>No projects found in this category</p>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
