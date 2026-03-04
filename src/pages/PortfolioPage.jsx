import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import {
  ExternalLink,
  Calendar,
  Users,
  TrendingUp,
  Award,
  Eye,
  Heart,
  Share2,
  Play,
  Instagram,
  Youtube,
  Camera,
  Sparkles
} from 'lucide-react';
import './PortfolioPage.css';

const PortfolioPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Luxury Fashion Brand Campaign',
      category: 'social-media',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200&q=80',
      description: 'Complete social media strategy and content creation for a luxury fashion brand. Developed comprehensive content calendar, brand voice, and visual identity across all platforms.',
      longDescription: 'Managed a 6-month campaign that transformed the brand\'s social media presence. Created over 200 pieces of content including photos, videos, stories, and reels. Implemented data-driven strategies that resulted in significant growth.',
      client: 'Elite Fashion Co.',
      date: 'Jan 2024 - Jun 2024',
      role: 'Social Media Manager',
      platforms: ['Instagram', 'TikTok', 'Facebook'],
      stats: {
        reach: '2.5M+',
        engagement: '15.8%',
        followers: '+125K',
        posts: '200+'
      },
      metrics: [
        { label: 'Total Reach', value: '2.5M', icon: Eye },
        { label: 'Engagement Rate', value: '15.8%', icon: Heart },
        { label: 'New Followers', value: '+125K', icon: Users },
        { label: 'Post Shares', value: '45K', icon: Share2 }
      ],
      tags: ['Social Strategy', 'Content Creation', 'Brand Management', 'Analytics'],
      featured: true
    },
    {
      id: 2,
      title: 'Tech Product Launch Video',
      category: 'video',
      image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1200&q=80',
      description: 'Professional product launch video for a revolutionary tech startup. Complete with motion graphics, 3D animations, and compelling storytelling.',
      longDescription: 'Conceptualized and produced a high-impact product launch video that showcased the innovative features of a new tech product. Included scriptwriting, storyboarding, filming, and post-production with advanced visual effects.',
      client: 'TechNova Inc.',
      date: 'Mar 2024',
      role: 'Video Producer & Editor',
      platforms: ['YouTube', 'Website', 'LinkedIn'],
      stats: {
        views: '500K+',
        conversion: '12.3%',
        duration: '3:45',
        retention: '89%'
      },
      metrics: [
        { label: 'Total Views', value: '500K', icon: Eye },
        { label: 'Conversion Rate', value: '12.3%', icon: TrendingUp },
        { label: 'Avg. Watch Time', value: '3:21', icon: Play },
        { label: 'Engagement', value: '89%', icon: Heart }
      ],
      tags: ['Video Production', 'Motion Graphics', '3D Animation', 'Storytelling'],
      featured: true
    },
    {
      id: 3,
      title: 'Viral Instagram Reels Series',
      category: 'reels',
      image: 'https://images.unsplash.com/photo-1611162616305-c69b3037c7f5?w=1200&q=80',
      description: 'Created a 20-part educational reel series that went viral, generating millions of views and thousands of new followers.',
      longDescription: 'Developed and executed a viral content strategy focused on educational and entertaining short-form video content. Each reel was carefully crafted with trending audio, engaging hooks, and valuable information.',
      client: 'Beauty & Wellness Brand',
      date: 'Feb 2024 - Apr 2024',
      role: 'Content Creator',
      platforms: ['Instagram', 'TikTok'],
      stats: {
        reach: '3.8M+',
        shares: '125K+',
        likes: '850K+',
        saves: '200K+'
      },
      metrics: [
        { label: 'Total Reach', value: '3.8M', icon: Eye },
        { label: 'Total Likes', value: '850K', icon: Heart },
        { label: 'Shares', value: '125K', icon: Share2 },
        { label: 'Saves', value: '200K', icon: Award }
      ],
      tags: ['Reels', 'Viral Content', 'Trends', 'Education'],
      featured: true
    },
    {
      id: 4,
      title: 'E-commerce Brand Management',
      category: 'social-media',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80',
      description: 'Full-scale social media management for an online retail brand, including strategy, content creation, community management, and paid advertising.',
      longDescription: 'Comprehensive social media management including content planning, creation, scheduling, community engagement, and performance analytics. Implemented successful influencer partnerships and user-generated content campaigns.',
      client: 'ShopTrend Online',
      date: 'Jul 2023 - Dec 2023',
      role: 'Social Media Manager',
      platforms: ['Instagram', 'Facebook', 'Pinterest'],
      stats: {
        sales: '+180%',
        followers: '95K+',
        posts: '300+',
        roas: '4.5x'
      },
      metrics: [
        { label: 'Sales Growth', value: '+180%', icon: TrendingUp },
        { label: 'New Followers', value: '95K', icon: Users },
        { label: 'ROAS', value: '4.5x', icon: Award },
        { label: 'Total Posts', value: '300+', icon: Camera }
      ],
      tags: ['E-commerce', 'Paid Ads', 'Community Management', 'Growth'],
      featured: false
    },
    {
      id: 5,
      title: 'Documentary-Style Brand Video',
      category: 'video',
      image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=1200&q=80',
      description: 'Behind-the-scenes documentary series showcasing brand values, culture, and the people behind the products.',
      longDescription: 'Produced an 8-episode documentary series that humanized the brand and connected with audiences on an emotional level. Each episode featured interviews, b-roll, and storytelling elements.',
      client: 'Artisan Coffee Co.',
      date: 'Aug 2023 - Nov 2023',
      role: 'Video Director',
      platforms: ['YouTube', 'Instagram', 'Website'],
      stats: {
        episodes: '8',
        views: '750K+',
        retention: '92%',
        subscribers: '+15K'
      },
      metrics: [
        { label: 'Total Views', value: '750K', icon: Eye },
        { label: 'Avg. Retention', value: '92%', icon: TrendingUp },
        { label: 'New Subscribers', value: '15K', icon: Users },
        { label: 'Episodes', value: '8', icon: Play }
      ],
      tags: ['Documentary', 'Brand Story', 'Interviews', 'Cinematography'],
      featured: false
    },
    {
      id: 6,
      title: 'TikTok Viral Dance Challenge',
      category: 'reels',
      image: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=1200&q=80',
      description: 'Created and launched a branded dance challenge that became a viral trend, with thousands of user-generated videos.',
      longDescription: 'Conceptualized and executed a viral marketing campaign centered around a custom dance challenge. Collaborated with influencers for initial momentum and managed the campaign\'s growth and engagement.',
      client: 'Youth Fashion Label',
      date: 'May 2024',
      role: 'Campaign Manager',
      platforms: ['TikTok', 'Instagram'],
      stats: {
        views: '5.2M+',
        ugc: '12K+',
        likes: '1.2M+',
        hashtag: '15M+'
      },
      metrics: [
        { label: 'Total Views', value: '5.2M', icon: Eye },
        { label: 'UGC Videos', value: '12K', icon: Users },
        { label: 'Total Likes', value: '1.2M', icon: Heart },
        { label: 'Hashtag Views', value: '15M', icon: Sparkles }
      ],
      tags: ['Viral Marketing', 'TikTok', 'Influencer', 'UGC'],
      featured: true
    },
    {
      id: 7,
      title: 'Corporate Event Coverage',
      category: 'video',
      image: 'https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=1200&q=80',
      description: 'Full-day event coverage including highlights reel, interviews, and promotional content for corporate conference.',
      longDescription: 'Provided comprehensive video coverage of a 3-day corporate conference with multiple speakers and sessions. Delivered same-day highlight reels and a full documentary-style recap.',
      client: 'Global Tech Summit',
      date: 'Jun 2024',
      role: 'Lead Videographer',
      platforms: ['LinkedIn', 'YouTube', 'Website'],
      stats: {
        days: '3',
        footage: '50+ hrs',
        deliverables: '15',
        turnaround: '24 hrs'
      },
      metrics: [
        { label: 'Event Days', value: '3', icon: Calendar },
        { label: 'Raw Footage', value: '50+ hrs', icon: Camera },
        { label: 'Deliverables', value: '15', icon: Award },
        { label: 'Views', value: '120K', icon: Eye }
      ],
      tags: ['Event Coverage', 'Corporate', 'Live Editing', 'Interviews'],
      featured: false
    },
    {
      id: 8,
      title: 'Influencer Collaboration Campaign',
      category: 'social-media',
      image: 'https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=1200&q=80',
      description: 'Coordinated and managed multi-influencer campaign with 50+ creators across various niches and platforms.',
      longDescription: 'Strategized and executed a large-scale influencer marketing campaign. Handled creator outreach, contract negotiations, content guidelines, and performance tracking across all collaborations.',
      client: 'Lifestyle Brand Co.',
      date: 'Jan 2024 - Mar 2024',
      role: 'Influencer Marketing Manager',
      platforms: ['Instagram', 'YouTube', 'TikTok'],
      stats: {
        influencers: '50+',
        reach: '8.5M+',
        engagement: '9.2%',
        roi: '520%'
      },
      metrics: [
        { label: 'Total Reach', value: '8.5M', icon: Eye },
        { label: 'Influencers', value: '50+', icon: Users },
        { label: 'Engagement', value: '9.2%', icon: Heart },
        { label: 'ROI', value: '520%', icon: TrendingUp }
      ],
      tags: ['Influencer Marketing', 'Campaign Management', 'ROI', 'Multi-Platform'],
      featured: false
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects', icon: Sparkles },
    { id: 'social-media', label: 'Social Media', icon: Instagram },
    { id: 'video', label: 'Video Production', icon: Youtube },
    { id: 'reels', label: 'Reels & Shorts', icon: Camera }
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <div className="portfolio-page" ref={ref}>
      {/* Hero Section */}
      <section className="portfolio-hero">
        <div className="container">
          <motion.div
            className="portfolio-hero-content"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="hero-badge"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <Award size={20} />
              <span>Award-Winning Work</span>
            </motion.div>

            <h1 className="portfolio-hero-title">
              My <span className="gradient-text">Portfolio</span>
            </h1>

            <p className="portfolio-hero-subtitle">
              A curated collection of successful campaigns, viral content, and brand transformations.
              Each project represents dedication, creativity, and measurable results.
            </p>

            <motion.div
              className="portfolio-stats-row"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <div className="stat-item">
                <motion.h3
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.6, type: 'spring' }}
                >
                  50+
                </motion.h3>
                <p>Projects Completed</p>
              </div>
              <div className="stat-item">
                <motion.h3
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.7, type: 'spring' }}
                >
                  20M+
                </motion.h3>
                <p>Total Reach</p>
              </div>
              <div className="stat-item">
                <motion.h3
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.8, type: 'spring' }}
                >
                  35+
                </motion.h3>
                <p>Happy Clients</p>
              </div>
              <div className="stat-item">
                <motion.h3
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.9, type: 'spring' }}
                >
                  95%
                </motion.h3>
                <p>Client Satisfaction</p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Animated Background Elements */}
        <div className="hero-bg-elements">
          <motion.div
            className="bg-circle bg-circle-1"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.div
            className="bg-circle bg-circle-2"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </div>
      </section>

      {/* Featured Projects */}
      <section className="featured-projects">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2>Featured Projects</h2>
            <p>Highlighting my most impactful work</p>
          </motion.div>

          <div className="featured-grid">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="featured-card"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                onClick={() => setSelectedProject(project)}
              >
                <div className="featured-image">
                  <img src={project.image} alt={project.title} loading="lazy" />
                  <div className="featured-overlay">
                    <motion.button
                      className="view-details-btn"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink size={18} />
                      <span>View Details</span>
                    </motion.button>
                  </div>
                  <div className="featured-badge">Featured</div>
                </div>

                <div className="featured-content">
                  <div className="featured-header">
                    <h3>{project.title}</h3>
                    <span className="category-tag">{filters.find(f => f.id === project.category)?.label}</span>
                  </div>
                  <p className="featured-description">{project.description}</p>

                  <div className="featured-metrics">
                    {project.metrics.slice(0, 3).map((metric, idx) => (
                      <div key={idx} className="metric-item">
                        <metric.icon size={16} className="metric-icon" />
                        <div>
                          <span className="metric-value">{metric.value}</span>
                          <span className="metric-label">{metric.label}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Projects */}
      <section className="all-projects">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2>All Projects</h2>
            <p>Browse through my complete portfolio</p>
          </motion.div>

          {/* Filters */}
          <motion.div
            className="portfolio-filters"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
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
                  <span className="filter-count">
                    {filter.id === 'all' ? projects.length : projects.filter(p => p.category === filter.id).length}
                  </span>
                </motion.button>
              );
            })}
          </motion.div>

          {/* Projects Grid */}
          <motion.div layout className="portfolio-grid">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="portfolio-card"
                  whileHover={{ y: -8 }}
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="portfolio-card-image">
                    <img src={project.image} alt={project.title} loading="lazy" />
                    <div className="portfolio-card-overlay">
                      <motion.div
                        className="overlay-content"
                        initial={{ opacity: 0, y: 20 }}
                        whileHover={{ opacity: 1, y: 0 }}
                      >
                        <ExternalLink size={24} />
                        <span>View Project</span>
                      </motion.div>
                    </div>
                  </div>

                  <div className="portfolio-card-content">
                    <div className="card-header">
                      <h3>{project.title}</h3>
                      <Calendar size={14} />
                    </div>
                    <p className="card-client">{project.client}</p>
                    <p className="card-description">{project.description}</p>

                    <div className="card-tags">
                      {project.tags.slice(0, 3).map((tag, idx) => (
                        <span key={idx} className="tag">{tag}</span>
                      ))}
                    </div>

                    <div className="card-stats">
                      {Object.entries(project.stats).slice(0, 3).map(([key, value], idx) => (
                        <div key={idx} className="stat">
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
        </div>
      </section>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="project-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="project-modal"
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 50 }}
              transition={{ type: 'spring', damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="modal-close"
                onClick={() => setSelectedProject(null)}
              >
                ×
              </button>

              <div className="modal-image">
                <img src={selectedProject.image} alt={selectedProject.title} />
              </div>

              <div className="modal-content">
                <div className="modal-header">
                  <div>
                    <h2>{selectedProject.title}</h2>
                    <p className="modal-client">{selectedProject.client}</p>
                  </div>
                  <span className="modal-category">
                    {filters.find(f => f.id === selectedProject.category)?.label}
                  </span>
                </div>

                <div className="modal-meta">
                  <div className="meta-item">
                    <Calendar size={16} />
                    <span>{selectedProject.date}</span>
                  </div>
                  <div className="meta-item">
                    <Award size={16} />
                    <span>{selectedProject.role}</span>
                  </div>
                </div>

                <div className="modal-description">
                  <h3>About This Project</h3>
                  <p>{selectedProject.longDescription}</p>
                </div>

                <div className="modal-metrics">
                  <h3>Key Metrics</h3>
                  <div className="metrics-grid">
                    {selectedProject.metrics.map((metric, idx) => (
                      <div key={idx} className="metric-card">
                        <metric.icon size={24} className="metric-icon" />
                        <span className="metric-value">{metric.value}</span>
                        <span className="metric-label">{metric.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="modal-tags">
                  <h3>Skills & Technologies</h3>
                  <div className="tags-list">
                    {selectedProject.tags.map((tag, idx) => (
                      <span key={idx} className="tag">{tag}</span>
                    ))}
                  </div>
                </div>

                <div className="modal-platforms">
                  <h3>Platforms</h3>
                  <div className="platforms-list">
                    {selectedProject.platforms.map((platform, idx) => (
                      <span key={idx} className="platform">{platform}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PortfolioPage;
