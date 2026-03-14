import { motion } from "framer-motion";
import "./CoursesPage.css";

const OnlineCourses = () => {
  // ⭐ Dummy videos for Class 10
  const class10Videos = [
    {
      id: 1,
      title: "Class 10 Maths – Polynomial",
      youtube_url: "https://www.youtube.com/watch?v=PKQpWdHWBZA&list=PLwX-zETzGT-tQKJTTP8j8g-UYVLnX_0mU",
      thumbnail: "https://img.youtube.com/vi/abcdef/0.jpg",
    },
    {
      id: 2,
      title: "Class 10 Science – Chemical Reactions",
      youtube_url: "https://www.youtube.com/watch?v=ghijkl",
      thumbnail: "https://img.youtube.com/vi/ghijkl/0.jpg",
    },
    {
      id: 3,
      title: "Class 10 Maths – Trigonometry Basics",
      youtube_url: "https://youtu.be/IICq2zNlKhs?si=mN8JwolpDTe_ycpL",
      thumbnail: "https://img.youtube.com/vi/mnopqr/0.jpg",
    },
  ];

  // ⭐ Dummy videos for Class 12
  const class12Videos = [
    {
      id: 1,
      title: "Class 12 Physics – Electrostatics",
      youtube_url: "https://www.youtube.com/watch?v=xyz123",
      thumbnail: "https://img.youtube.com/vi/xyz123/0.jpg",
    },
    {
      id: 2,
      title: "Class 12 Chemistry – Solutions",
      youtube_url: "https://www.youtube.com/watch?v=uvw890",
      thumbnail: "https://img.youtube.com/vi/uvw890/0.jpg",
    },
    {
      id: 3,
      title: "Class 12 Maths – Integrals",
      youtube_url: "https://www.youtube.com/watch?v=klm456",
      thumbnail: "https://img.youtube.com/vi/klm456/0.jpg",
    },
  ];

  return (
    <div className="courses-page">
      {/* HERO SECTION */}
      <section className="courses-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1>Online Courses</h1>
            <p>Free YouTube Classes for Class 10 & 12</p>
          </motion.div>
        </div>
      </section>

      {/* MAIN SECTION */}
      <section className="courses-content">
        <div className="container">

          {/* CLASS 10 SECTION */}
          <h2 style={{ marginBottom: "20px" }}>Class 10 Online Courses</h2>

          <div className="courses-list">
            {class10Videos.map((video, index) => (
              <motion.div
                key={video.id}
                className="course-detail-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="course-detail-image">
                  <img src={video.thumbnail} alt={video.title} />
                  <div className="course-class-badge">Class 10</div>
                  <div className="course-type-badge online">Online</div>
                </div>

                <div className="course-detail-content">
                  <h3>{video.title}</h3>

                  <a
                    href={video.youtube_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="youtube-btn"
                  >
                    Watch on YouTube
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CLASS 12 SECTION */}
          <h2 style={{ marginBottom: "20px", marginTop: "50px" }}>
            Class 12 Online Courses
          </h2>

          <div className="courses-list">
            {class12Videos.map((video, index) => (
              <motion.div
                key={video.id}
                className="course-detail-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="course-detail-image">
                  <img src={video.thumbnail} alt={video.title} />
                  <div className="course-class-badge">Class 12</div>
                  <div className="course-type-badge online">Online</div>
                </div>

                <div className="course-detail-content">
                  <h3>{video.title}</h3>

                  <a
                    href={video.youtube_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="youtube-btn"
                  >
                    Watch on YouTube
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

            {/* YOUTUBE CHANNEL FOOTER */}
<section className="courses-content" style={{ textAlign: "center", padding: "40px 0" }}>
  <a
    href="https://www.youtube.com/@vgyaninstitute"
    target="_blank"
    rel="noopener noreferrer"
    style={{
      textDecoration: "none",
      color: "var(--primary-color)",
      fontWeight: "700",
      fontSize: "1.3rem",
      display: "inline-flex",
      alignItems: "center",
      gap: "12px"
    }}
  >
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_(2017).svg"
      alt="YouTube Logo"
      style={{ height: "40px" }}
    />
    For more videos, visit our YouTube channel <span style={{ color: "red" }}>V Gyan Institute</span>
  </a>
</section>


      </section>
    </div>
  );
};



export default OnlineCourses;
