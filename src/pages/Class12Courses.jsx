import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./CoursesPage.css";

const Class12Courses = () => {
  const navigate = useNavigate();

  const courses12 = [
    {
      id: 1,
      title: "Mathematics (Class 12)",
      price: "₹1600 / month",
      teacher: "Devashish Sir",
      duration: "1 year",
      syllabus:
        "Relations & Functions, Matrices, Determinants, Continuity & Differentiability, Integrals, Applications of Integrals, Probability.",
      image_url:
        "/coursesImg/class1.jpeg",
    },
    {
      id: 2,
      title: "Physics (Class 12)",
      price: "₹1700 / month",
      teacher: "S.K Sir",
      duration: "1 year",
      syllabus:
        "Electrostatics, Current Electricity, Magnetic Effects, Electromagnetic Induction, Optics, Modern Physics.",
      image_url:
        "/coursesImg/class2.jpeg",
    },
    {
      id: 3,
      title: "Chemistry (Class 12)",
      price: "₹1700 / month",
      teacher: "Vivek Sir",
      duration: "1 year",
      syllabus:
        "Solid State, Solutions, Electrochemistry, Chemical Kinetics, Surface Chemistry, Organic Chemistry (Functional Groups, Biomolecules).",
      image_url:
        "/coursesImg/class4.jpg",
    },
    {
      id: 4,
      title: "Biology (Class 12)",
      price: "₹1800 / month",
      teacher: "Prachi ma'am",
      duration: "1 year",
      syllabus:
        "Reproduction, Genetics & Evolution, Biology in Human Welfare, Biotechnology, Ecology & Environment.",
      image_url:
        "/coursesImg/class5.jpg",
    },
    {
      id: 5,
      title: "Commerce (Accounts + BST + Economics)",
      price: "₹2200 / month",
      teacher: "Nitin Sir",
      duration: "1 year",
      syllabus:
        "Advanced Accounting, Company Accounts, Financial Statements, Business Studies (Management & Marketing), Macroeconomics, Indian Economy topics.",
      image_url:
        "/coursesImg/class6.jpeg",
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
            <h1>Class 12 Courses</h1>
            <p>Advanced subjects for Science & Commerce streams</p>
          </motion.div>
        </div>
      </section>

      <section className="courses-content">
        <div className="container">
          <div className="courses-list">
            {courses12.map((course, index) => (
              <motion.div
                key={course.id}
                className="course-detail-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              >
                {/* IMAGE */}
                <div className="course-detail-image">
                  <img src={course.image_url} alt={course.title} />
                  <div className="course-class-badge">Class 12</div>
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

export default Class12Courses;
