import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./CoursesPage.css";

const Class10Courses = () => {
  const navigate = useNavigate();

  const courses10 = [
    {
      id: 1,
      title: "Mathematics (Class 10)",
      price: "₹1400 / month",
      teacher: "Devashish Sir",
      duration: "1 Year",
      syllabus:
        "As per CBSE guidelines whole syllabus + Test Series + Weekly Doubt Session",
      image_url:
        "/coursesImg/class1.jpeg",
    },
    {
      id: 2,
      title: "Science (Class 10)",
      price: "₹1500 / month",
      teacher: "Chemistry & Biology--> Prachi ma'am,  Physics--> Ashish Sir",
      duration: "1 Year",
      syllabus:
        "As per CBSE guidelines whole syllabus + Test Series + Weekly Doubt Session ",
      image_url:
        "/coursesImg/class2.jpeg",
    },
    {
      id: 3,
      title: "Maths + Science Combo (Class 10)",
      price: "₹2500 / month",
      teacher: "Devashish Sir, Prachi ma'am And Ashish Sir",
      duration: "1 Year",
      syllabus:
        "Full Maths + Science Class 10 Syllabus with weekly tests & PYQ practice.",
      image_url:
        "/coursesImg/class3.jpg",
    },
  ];

  return (
    <div className="courses-page">
      <section className="courses-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1>Class 10 Courses</h1>
            <p>Mathematics • Science • Combo Course</p>
          </motion.div>
        </div>
      </section>

      <section className="courses-content">
        <div className="container">
          <div className="courses-list">
            {courses10.map((course, index) => (
              <motion.div
                key={course.id}
                className="course-detail-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {/* IMAGE */}
                <div className="course-detail-image">
                  <img src={course.image_url} alt={course.title} />
                  <div className="course-class-badge">Class 10</div>
                  <div className="course-type-badge offline">Offline</div>
                </div>

                {/* CONTENT */}
                <div className="course-detail-content">
                  <h3>{course.title}</h3>
                  <p className="course-description">{course.syllabus}</p>

                  <div className="course-meta">
                    <div className="meta-item">
                      <span>🧑‍🏫 Teacher:</span>
                      <strong>{course.teacher}</strong>
                    </div>

                    <div className="meta-item">
                      <span>⏳ Duration:</span>
                      <strong>{course.duration}</strong>
                    </div>

                    <div className="meta-item">
                      <span>💰 Fees:</span>
                      <strong>{course.price}</strong>
                    </div>
                  </div>

                  <button
                    className="enroll-btn"
                    onClick={() => navigate("/contact")}
                  >
                    Enroll Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Class10Courses;
