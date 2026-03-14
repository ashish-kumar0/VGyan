import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Users, BookOpen, Trophy, TrendingUp, ArrowRight, Star, Youtube } from 'lucide-react';
import { supabase } from '../lib/supabase';
import './HomePage.css';

const HomePage = () => {
  const [statistics, setStatistics] = useState([]);
  const [featuredCourses, setFeaturedCourses] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const [statsRes, coursesRes, testimonialsRes, videosRes] = await Promise.all([
      supabase.from('statistics').select('*').order('display_order'),
      supabase.from('courses').select('*').eq('featured', true).limit(3),
      supabase.from('testimonials').select('*').limit(3),
      supabase.from('youtube_videos').select('*').order('display_order').limit(3)
    ]);

    if (statsRes.data) setStatistics(statsRes.data);
    if (coursesRes.data) setFeaturedCourses(coursesRes.data);
    if (testimonialsRes.data) setTestimonials(testimonialsRes.data);
    if (videosRes.data) setVideos(videosRes.data);
  };

  const defaultStats = [
    { label: 'Students Enrolled', value: '5000+', icon: 'Users' },
    { label: 'Expert Instructors', value: '6', icon: 'BookOpen' },
    { label: 'Success Rate', value: '95%', icon: 'Trophy' },
    { label: 'Years Experience', value: '10+', icon: 'TrendingUp' }
  ];

  const getIcon = (iconName) => {
    const icons = { Users, BookOpen, Trophy, TrendingUp };
    const Icon = icons[iconName] || Users;
    return <Icon size={40} />;
  };

  const statsToDisplay = statistics.length > 0 ? statistics : defaultStats;

  return (
    <div className="homepage">
      <section className="hero-section">
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="hero-title">
              Welcome to <span className="highlight">V Gyan Institute</span>
            </h1>
            <p className="hero-subtitle">
              We provide structured, result-oriented education with expert mentorship and personal attention.
Partnering with parents, we help every student build strong foundations, confidence, and a bright academic future.
            </p>
            <div className="hero-buttons">
              <Link to="/courses" className="btn-primary">
                Explore Courses <ArrowRight size={20} />
              </Link>
              <Link to="/contact" className="btn-secondary">
                Book Free Demo
              </Link>
            </div>
          </motion.div>
        </div>
        <div className="hero-image">
          <img
            src="homePage_img/homePage.png"
            alt="Students learning"
          />
        </div>
      </section>

      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {statsToDisplay.map((stat, index) => (
              <motion.div
                key={index}
                className="stat-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="stat-icon">{getIcon(stat.icon)}</div>
                <h3 className="stat-value">{stat.value}</h3>
                <p className="stat-label">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="mission-section">
        <div className="container">
          <motion.div
            className="mission-content"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2>Our Mission</h2>
            <p>
              At V Gyan Institute, we are committed to providing exceptional education that prepares
              students for academic success and beyond. Our experienced faculty, innovative teaching
              methods, and student-centric approach create an environment where learning thrives.
            </p>
          </motion.div>
        </div>
      </section>

      {featuredCourses.length > 0 && (
        <section className="featured-courses-section">
          <div className="container">
            <div className="section-header">
              <h2>Featured Courses</h2>
              <Link to="/courses" className="view-all">
                View All Courses <ArrowRight size={18} />
              </Link>
            </div>
            <div className="courses-grid">
              {featuredCourses.map((course) => (
                <motion.div
                  key={course.id}
                  className="course-card"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                >
                  <div className="course-image">
                    <img
                      src={course.image_url || 'https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=600'}
                      alt={course.title}
                    />
                    <div className="course-badge">Class {course.class_level}</div>
                  </div>
                  <div className="course-content">
                    <h3>{course.title}</h3>
                    <p>{course.description}</p>
                    <Link to="/courses" className="course-link">
                      Learn More <ArrowRight size={16} />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {testimonials.length > 0 && (
        <section className="testimonials-section">
          <div className="container">
            <h2>What Our Students Say</h2>
            <div className="testimonials-grid">
              {testimonials.map((testimonial) => (
                <motion.div
                  key={testimonial.id}
                  className="testimonial-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="testimonial-rating">
                    {[...Array(testimonial.rating || 5)].map((_, i) => (
                      <Star key={i} size={20} fill="var(--secondary-color)" color="var(--secondary-color)" />
                    ))}
                  </div>
                  <p className="testimonial-text">"{testimonial.testimonial}"</p>
                  <div className="testimonial-author">
                    <div className="author-avatar">
                      {testimonial.student_photo ? (
                        <img src={testimonial.student_photo} alt={testimonial.student_name} />
                      ) : (
                        <div className="avatar-placeholder">{testimonial.student_name.charAt(0)}</div>
                      )}
                    </div>
                    <div>
                      <h4>{testimonial.student_name}</h4>
                      <p>Class {testimonial.class_level}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="cta-section">
        <div className="container">
          <motion.div
            className="cta-content"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2>Ready to Start Your Learning Journey?</h2>
            <p>Join thousands of successful students at V Gyan Institute</p>
            <Link to="/contact" className="btn-cta">
              Enroll Now <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
