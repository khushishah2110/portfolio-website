import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react';
import './WorkExperience.css';

const WorkExperience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const experiences = [
    {
      id: 1,
      title: 'Social Media Manager',
      company: 'Digital Marketing Agency',
      location: 'New York, NY',
      period: '2023 - Present',
      description: 'Leading social media strategy and content creation across multiple platforms. Managing brand presence and engagement for high-profile clients.',
      achievements: [
        'Grew Instagram following by 250% in 6 months',
        'Achieved 5M+ monthly impressions across platforms',
        'Launched 3 viral marketing campaigns'
      ],
      type: 'current'
    },
    {
      id: 2,
      title: 'Content Strategist',
      company: 'Creative Communications Inc.',
      location: 'Los Angeles, CA',
      period: '2021 - 2023',
      description: 'Developed comprehensive content strategies for brands across industries. Managed editorial calendar and collaborated with creative teams.',
      achievements: [
        'Created content strategy for 15+ brands',
        'Increased website traffic by 180%',
        'Established brand voice guidelines'
      ],
      type: 'past'
    },
    {
      id: 3,
      title: 'Marketing Coordinator',
      company: 'Brand Solutions Co.',
      location: 'Chicago, IL',
      period: '2019 - 2021',
      description: 'Coordinated marketing campaigns and managed social media presence. Supported brand development and community engagement initiatives.',
      achievements: [
        'Managed 10+ successful product launches',
        'Built community of 50K+ engaged followers',
        'Increased engagement rate by 85%'
      ],
      type: 'past'
    }
  ];

  return (
    <section id="work-experience" className="work-experience section" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="section-subtitle">
            My professional journey and career highlights
          </p>
        </motion.div>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className={`timeline-item ${exp.type}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
            >
              <div className="timeline-marker">
                <div className="timeline-icon">
                  <Briefcase size={20} />
                </div>
              </div>

              <motion.div
                className="timeline-content"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="timeline-header">
                  <div className="timeline-title-group">
                    <h3 className="timeline-title">{exp.title}</h3>
                    <div className="timeline-company">
                      <span className="company-name">{exp.company}</span>
                    </div>
                  </div>
                  {exp.type === 'current' && (
                    <span className="current-badge">Current</span>
                  )}
                </div>

                <div className="timeline-meta">
                  <div className="meta-item">
                    <Calendar size={16} />
                    <span>{exp.period}</span>
                  </div>
                  <div className="meta-item">
                    <MapPin size={16} />
                    <span>{exp.location}</span>
                  </div>
                </div>

                <p className="timeline-description">{exp.description}</p>

                <div className="timeline-achievements">
                  {exp.achievements.map((achievement, i) => (
                    <motion.div
                      key={i}
                      className="achievement-item"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.4 + index * 0.15 + i * 0.1 }}
                    >
                      <ChevronRight size={16} className="achievement-icon" />
                      <span>{achievement}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}

          <div className="timeline-line"></div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
