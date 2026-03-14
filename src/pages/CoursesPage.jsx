import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Clock, Calendar, Users, CheckCircle, Youtube } from 'lucide-react';
import { supabase } from '../lib/supabase';
import './CoursesPage.css';
import { useNavigate } from "react-router-dom";



const CoursesPage = () => {


  
  const [courses, setCourses] = useState([]);
  const [selectedClass, setSelectedClass] = useState('all');
  const [selectedType, setSelectedType] = useState('all'); // ⭐ NEW FILTER: online/offline/all
const navigate = useNavigate();

const handleClassClick = (level) => {
  // CLASS 9
  if (level === "9") {
    navigate("/courses/9");
    return;
  }
  //CLASS 10
  if (level === "10") {
    navigate("/courses/10");
    return;
  }
  // CLASS 11
  if (level === "11") {
    navigate("/courses/11");
    return;
  }
  // CLASS 12
   if (level === "12") {
    navigate("/courses/12");
    return;
  }
  setSelectedClass(level);
};



  useEffect(() => {
    fetchCourses();
  }, []);

  // ⭐ Fetch all courses from Supabase DB
  const fetchCourses = async () => {
    const { data } = await supabase.from('courses').select('*').order('class_level');
    if (data) setCourses(data);
  };

  // ⭐ First filter: Class
  const classFiltered =
    selectedClass === 'all'
      ? courses
      : courses.filter((c) => c.class_level === selectedClass);

  // ⭐ Second filter: Course Type (online/offline)
  const finalFiltered =
    selectedType === 'all'
      ? classFiltered
      : classFiltered.filter((c) => c.course_type === selectedType);

  return (
    <div className="courses-page">

      {/* ---------------------- HERO SECTION ---------------------- */}
      <section className="courses-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1>Our Courses</h1>
            <p>Offline + Online Courses for Class 9 to 12</p>
          </motion.div>
        </div>
      </section>

      {/* ---------------------- MAIN CONTENT ---------------------- */}
      <section className="courses-content">
        <div className="container">

          {/* ---------------------- CLASS FILTER ---------------------- */}
         <div className="class-filter">
  {[ "9", "10", "11", "12"].map((level) => (
    <button
      key={level}
      className={`filter-btn ${selectedClass === level ? "active" : ""}`}
      onClick={() => handleClassClick(level)}
    >
      {level === "all" ? "All Classes" : `Class ${level}`}
    </button>
  ))}
</div>

          {/* ---------------------- COURSE TYPE FILTER ---------------------- */}
          <div className="type-filter">
            {/* <button
              className={`filter-btn ${selectedType === 'all' ? 'active' : ''}`}
              onClick={() => setSelectedType('all')}
            >
              All Courses
            </button> */}
            <button
            className={`filter-btn ${selectedType === 'online' ? 'active' : ''}`}
            onClick={() => navigate("/courses/online")}
            >
            Online (Free)
            </button>

            <button
              className={`filter-btn ${selectedType === 'offline' ? 'active' : ''}`}
              onClick={() => setSelectedType('offline')}
            >
              Offline (Paid)
            </button>
          </div>

          {/* ---------------------- COURSES LIST ---------------------- */}
          {finalFiltered.length > 0 ? (
            <div className="courses-list">
              {finalFiltered.map((course, index) => (
                <motion.div
                  key={course.id}
                  className="course-detail-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >

                  {/* ---------------------- COURSE IMAGE ---------------------- */}
                  <div className="course-detail-image">
                    <img
                      src={
                        course.image_url ||
                        'https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg'
                      }
                      alt={course.title}
                    />
                    <div className="course-class-badge">Class {course.class_level}</div>
                    <div className={`course-type-badge ${course.course_type}`}>
                      {course.course_type === 'online' ? 'Online (Free)' : 'Offline (Paid)'}
                    </div>
                  </div>

                  {/* ---------------------- COURSE TEXT DETAILS ---------------------- */}
                  <div className="course-detail-content">
                    <h3>{course.title}</h3>
                    <p className="course-description">{course.description}</p>

                    <div className="course-meta">
                      {course.duration && (
                        <div className="meta-item">
                          <Clock size={18} />
                          <span>{course.duration}</span>
                        </div>
                      )}
                      {course.batch_timings && (
                        <div className="meta-item">
                          <Calendar size={18} />
                          <span>{course.batch_timings}</span>
                        </div>
                      )}
                      {course.course_type === 'offline' && course.fees && (
                        <div className="meta-item">
                          <Users size={18} />
                          <span>₹{course.fees}/month</span>
                        </div>
                      )}
                    </div>

                    {/* ---------------------- LEARNING OUTCOMES ---------------------- */}
                    {course.learning_outcomes && course.learning_outcomes.length > 0 && (
                      <div className="learning-outcomes">
                        <h4>Learning Outcomes:</h4>
                        <ul>
                          {course.learning_outcomes.map((outcome, i) => (
                            <li key={i}>
                              <CheckCircle size={16} />
                              <span>{outcome}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* ---------------------- SYLLABUS ---------------------- */}
                    {course.syllabus && (
                      <div className="course-syllabus">
                        <h4>Syllabus:</h4>
                        <p>{course.syllabus}</p>
                      </div>
                    )}

                    {/* ---------------------- ACTION BUTTONS ---------------------- */}
                    {course.course_type === 'online' ? (
                      <a
                        href={course.youtube_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="youtube-btn"
                      >
                        <Youtube size={20} /> Watch Free Course
                      </a>
                    ) : (
                      <button className="enroll-btn">Enroll Now</button>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div className="empty-state" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <BookOpen size={64} />
              <h3>Check Courses Classwise</h3>
              <p>Check back soon for new courses in this category!</p>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
};

export default CoursesPage;
