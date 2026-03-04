import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Calendar, User, Package, Tag } from 'lucide-react';
import { getProjectBySlug } from '../data/projectsData';
import './ProjectDetail.css';

const ProjectDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = getProjectBySlug(slug);

  if (!project) {
    return (
      <div className="project-detail-error">
        <div className="container">
          <h1>Project Not Found</h1>
          <p>The project you're looking for doesn't exist.</p>
          <Link to="/projects" className="btn btn-primary">
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="project-detail">
      {/* Hero Section */}
      <section className="project-detail-hero">
        <div className="container">
          <motion.button
            className="back-button"
            onClick={() => navigate('/projects')}
            whileHover={{ x: -5 }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <ArrowLeft size={20} />
            <span>Back to Projects</span>
          </motion.button>

          <motion.div
            className="project-header"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="project-tags">
              {project.tags.map((tag, index) => (
                <span key={index} className="tag">
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="project-title">{project.title}</h1>
            <p className="project-short-desc">{project.shortDescription}</p>
          </motion.div>

          <motion.div
            className="project-meta"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="meta-item">
              <User size={20} />
              <div>
                <span className="meta-label">Role</span>
                <span className="meta-value">{project.role}</span>
              </div>
            </div>
            <div className="meta-item">
              <Calendar size={20} />
              <div>
                <span className="meta-label">Duration</span>
                <span className="meta-value">{project.duration}</span>
              </div>
            </div>
            <div className="meta-item">
              <Package size={20} />
              <div>
                <span className="meta-label">Client</span>
                <span className="meta-value">{project.client}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="project-featured-image">
        <div className="container">
          <motion.div
            className="featured-image-wrapper"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
          >
            <img src={project.thumbnail} alt={project.title} />
          </motion.div>
        </div>
      </section>

      {/* Project Description */}
      <section className="project-description">
        <div className="container">
          <div className="description-grid">
            <motion.div
              className="description-content"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2>About This Project</h2>
              <div className="description-text">
                {project.fullDescription.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="description-sidebar"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="sidebar-section">
                <h3>Deliverables</h3>
                <ul className="deliverables-list">
                  {project.deliverables.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="sidebar-section">
                <h3>Project Stats</h3>
                <div className="stats-grid">
                  {Object.entries(project.stats).map(([key, value]) => (
                    <div key={key} className="stat-item">
                      <span className="stat-value">{value}</span>
                      <span className="stat-label">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Video Section (if exists) */}
      {project.video && (
        <section className="project-video">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2>Project Video</h2>
              <div className="video-wrapper">
                <video controls>
                  <source src={project.video} type="video/quicktime" />
                  <source src={project.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* PDF Section (if exists) */}
      {project.pdfFile && (
        <section className="project-pdf">
          <div className="container">
            <motion.div
              className="pdf-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="pdf-icon">
                <ExternalLink size={32} />
              </div>
              <div className="pdf-content">
                <h3>View Complete Pitch Deck</h3>
                <p>Access the full presentation document</p>
              </div>
              <a
                href={project.pdfFile}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Open PDF
              </a>
            </motion.div>
          </div>
        </section>
      )}

      {/* Image Gallery */}
      <section className="project-gallery">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Project Gallery
          </motion.h2>

          <div className="gallery-grid">
            {project.images.map((image, index) => (
              <motion.div
                key={index}
                className="gallery-item"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <img src={image} alt={`${project.title} - Image ${index + 1}`} loading="lazy" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="project-cta">
        <div className="container">
          <motion.div
            className="cta-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Interested in working together?</h2>
            <p>Let's create something amazing for your brand</p>
            <div className="cta-buttons">
              <Link to="/#contact" className="btn btn-primary">
                Get in Touch
              </Link>
              <Link to="/projects" className="btn btn-secondary">
                View More Projects
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;
