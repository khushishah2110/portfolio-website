import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Award, Target, TrendingUp, BookOpen, CheckCircle } from 'lucide-react';
import './About.css';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const skills = [
    { name: 'Social Media Strategy', level: 90 },
    { name: 'Video Editing', level: 85 },
    { name: 'Content Creation', level: 95 },
    { name: 'Adobe Premiere Pro', level: 80 },
    { name: 'Instagram Reels', level: 90 },
    { name: 'Brand Management', level: 85 }
  ];

  const stats = [
    { icon: <GraduationCap />, number: '1+', label: 'Years Experience' },
    { icon: <Award />, number: '50+', label: 'Projects Completed' },
    { icon: <Target />, number: '30+', label: 'Happy Clients' },
    { icon: <TrendingUp />, number: '2M+', label: 'Total Reach' }
  ];

  const courses = [
    {
      title: 'Advanced Social Media Marketing',
      platform: 'Coursera',
      year: '2023',
      skills: ['Instagram Growth', 'Content Strategy', 'Analytics']
    },
    {
      title: 'Professional Video Editing Masterclass',
      platform: 'Udemy',
      year: '2023',
      skills: ['Premiere Pro', 'After Effects', 'Color Grading']
    },
    {
      title: 'Digital Marketing Certification',
      platform: 'Google',
      year: '2022',
      skills: ['SEO', 'SEM', 'Digital Strategy']
    }
  ];

  return (
    <section id="about" className="about section" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="section-subtitle">
            Passionate storyteller with a Mass Communication background
          </p>
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="about-intro">
              <h3>Hello! I'm a Mass Communication Graduate</h3>
              <p>
                With a passion for creating engaging content that resonates with audiences,
                I specialize in transforming brand stories into captivating visual experiences.
                My expertise lies in social media management and video editing, particularly
                for product showcases, reels, and dynamic social media content.
              </p>
              <p>
                Throughout my journey, I've honed my skills in crafting content that not only
                looks stunning but also drives engagement and delivers results. From conceptualization
                to final delivery, I bring creativity, technical expertise, and strategic thinking
                to every project.
              </p>
            </div>

            <div className="about-skills">
              <h4>Skills & Expertise</h4>
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="skill-item"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <motion.div
                      className="skill-progress"
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="about-stats"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="stat-card"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(99, 102, 241, 0.3)' }}
              >
                <div className="stat-icon">{stat.icon}</div>
                <h3 className="stat-number">{stat.number}</h3>
                <p className="stat-label">{stat.label}</p>
              </motion.div>
            ))}

            <motion.div
              className="education-card"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="education-icon">
                <GraduationCap size={32} />
              </div>
              <div className="education-content">
                <h4>Education</h4>
                <h3>Mass Communication</h3>
                <p>Bachelor's Degree</p>
                <p className="education-year">2020 - 2024</p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Courses & Certifications Section */}
        <motion.div
          className="courses-section"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="courses-header">
            <BookOpen size={28} className="courses-icon" />
            <h3>Courses & Certifications</h3>
            <p>Continuous learning to stay ahead in the industry</p>
          </div>

          <div className="courses-grid">
            {courses.map((course, index) => (
              <motion.div
                key={course.title}
                className="course-card"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(99, 102, 241, 0.2)' }}
              >
                <div className="course-header">
                  <Award size={24} className="course-icon" />
                  <span className="course-year">{course.year}</span>
                </div>
                <h4 className="course-title">{course.title}</h4>
                <p className="course-platform">{course.platform}</p>
                <div className="course-skills">
                  {course.skills.map((skill, idx) => (
                    <span key={idx} className="skill-tag">
                      <CheckCircle size={12} />
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
