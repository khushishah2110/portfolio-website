import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { Play, ArrowRight, Star } from 'lucide-react';
import { getFeaturedProjects } from '../data/projectsData';
import './Projects.css';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  // Get featured projects from data
  const featuredProjects = getFeaturedProjects();

  // Assign sizes for masonry layout
  const projectSizes = ['large', 'medium', 'medium', 'large'];
  const projectsWithSizes = featuredProjects.map((project, index) => ({
    ...project,
    size: projectSizes[index % projectSizes.length]
  }));

  return (
    <section id="projects" className="projects section" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">
            Showcasing my best work and successful campaigns
          </p>
        </motion.div>

        {/* Masonry Grid Layout */}
        <div className="projects-masonry">
          {projectsWithSizes.map((project, index) => (
            <Link
              to={`/projects/${project.slug}`}
              key={project.id}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <motion.div
                className={`projects-item ${project.size}`}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <div className="projects-image">
                  <img src={project.thumbnail} alt={project.title} loading="lazy" />
                  <div className="projects-overlay">
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

                <div className="projects-content">
                  <h3 className="projects-title">{project.title}</h3>
                  <p className="projects-description">{project.shortDescription}</p>

                  <div className="projects-stats">
                    {Object.entries(project.stats).map(([key, value]) => (
                      <div key={key} className="stat">
                        <span className="stat-value">{value}</span>
                        <span className="stat-label">{key}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

        {/* View All Projects Button */}
        <motion.div
          className="projects-cta"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Link to="/projects">
            <motion.div
              className="view-all-btn"
              whileHover={{ scale: 1.05, boxShadow: '0 15px 40px rgba(99, 102, 241, 0.3)' }}
              whileTap={{ scale: 0.95 }}
            >
              <span>View All Projects</span>
              <ArrowRight size={20} />
            </motion.div>
          </Link>
          <p className="cta-text">Explore my complete project collection</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
