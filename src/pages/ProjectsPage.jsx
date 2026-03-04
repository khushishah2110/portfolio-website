import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import {
  Sparkles,
  Star,
  TrendingUp,
  Eye,
  Heart,
  Palette,
  Video,
  FileText,
  Instagram
} from 'lucide-react';
import { projectsData } from '../data/projectsData';
import './ProjectsPage.css';

const ProjectsPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All Projects', icon: Sparkles },
    { id: 'branding', label: 'Branding', icon: Palette },
    { id: 'product-design', label: 'Product Design', icon: Heart },
    { id: 'presentation', label: 'Presentations', icon: FileText },
    { id: 'social-media', label: 'Social Media', icon: Instagram }
  ];

  const filteredProjects = activeFilter === 'all'
    ? projectsData
    : projectsData.filter(project => project.category === activeFilter);

  // Assign sizes for masonry layout
  const sizePattern = ['large', 'medium', 'medium', 'large', 'small', 'medium'];
  const projectsWithSizes = filteredProjects.map((project, index) => ({
    ...project,
    displaySize: sizePattern[index % sizePattern.length]
  }));

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
                  <strong>{projectsData.length}+</strong>
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
                  <strong>4+</strong>
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
                    {filter.id === 'all'
                      ? projectsData.length
                      : projectsData.filter(p => p.category === filter.id).length}
                  </span>
                </motion.button>
              );
            })}
          </motion.div>

          {/* Masonry Grid */}
          <motion.div layout className="projects-masonry">
            <AnimatePresence mode="popLayout">
              {projectsWithSizes.map((project, index) => (
                <Link
                  to={`/projects/${project.slug}`}
                  key={project.id}
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <motion.div
                    layout
                    className={`project-card ${project.displaySize}`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    whileHover={{ y: -8 }}
                  >
                    <div className="project-image">
                      <img src={project.thumbnail} alt={project.title} loading="lazy" />
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
                      <p>{project.shortDescription}</p>

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
                </Link>
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
