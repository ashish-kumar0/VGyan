import { motion } from "framer-motion";
import { Target, Users, Award, Zap, BookOpen, BarChart3 } from "lucide-react";
import "./AboutPage.css";

const AboutPage = () => (
  <div className="about-page">
    {/* ---------------- HERO SECTION ---------------- */}
    <section className="about-hero">
      <div className="container hero-grid">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="hero-content-box">
            <h1>Quality Education for a Bright Future</h1>

            <p className="hero-description">
              At V Gyan Institute, we are committed to delivering structured,
              result-oriented education that builds strong conceptual
              foundations and prepares students for academic excellence and
              competitive success.
            </p>

            <ul className="hero-points">
              <li>✔ Small batches for personal attention</li>
              <li>✔ Expert faculty with proven experience</li>
              <li>✔ Regular assessments & performance tracking</li>
              <li>✔ Focus on conceptual clarity & problem solving</li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          className="hero-image"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <img src="/aboutpageimg/aboutpage.jpg" alt="Students" />
        </motion.div>
      </div>
    </section>

    {/* ---------------- ABOUT DESCRIPTION ---------------- */}
   <section className="about-description">
  <div className="container">
    <div className="about-wrapper">

      {/* Left Side - Text Card */}
      <div className="about-text-box">
        <h2>Who We Are</h2>

        <p>
          V Gyan Institute is a trusted coaching center dedicated to nurturing
          academic excellence through discipline, structured learning, and
          expert mentorship. We believe that every student has the potential to
          achieve greatness when guided with clarity, consistency, and care.
        </p>

        <p>
          Our teaching methodology combines concept clarity, exam-oriented
          preparation, and continuous performance monitoring. We work closely
          with parents to ensure that every learner receives the support,
          direction, and motivation required for long-term success.
        </p>
      </div>

      {/* Right Side - Image */}
      <div className="about-image-box">
        <img src="/aboutpageimg/whoweare.png" alt="Students learning" />
      </div>

    </div>
  </div>
</section>

    {/* ---------------- WHY CHOOSE US ---------------- */}
    <section className="why-section">
      <div className="container">
        <h2>Why Choose V Gyan Institute?</h2>

        <div className="why-grid">
          <div className="why-card">
            <BookOpen size={40} />
            <h3>Structured Learning</h3>
            <p>
              Carefully designed study plans aligned with board and competitive
              exams.
            </p>
          </div>

          <div className="why-card">
            <Users size={40} />
            <h3>Personal Attention</h3>
            <p>
              Small batch sizes ensuring every student receives focused
              guidance.
            </p>
          </div>

          <div className="why-card">
            <BarChart3 size={40} />
            <h3>Performance Tracking</h3>
            <p>Regular tests, progress reports, and parent updates.</p>
          </div>

          <div className="why-card">
            <Award size={40} />
            <h3>Experienced Faculty</h3>
            <p>
              Dedicated mentors with strong academic and teaching backgrounds.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* ---------------- MISSION & VISION ---------------- */}
    <section className="values-section">
      <div className="container">
        <div className="values-grid">
          <div className="value-card">
            <Target size={40} />
            <h3>Our Mission</h3>
            <p>
              To provide high-quality education that strengthens conceptual
              understanding and prepares students for academic and competitive
              success.
            </p>
          </div>

          <div className="value-card">
            <Zap size={40} />
            <h3>Our Vision</h3>
            <p>
              To become a center of excellence known for discipline, results,
              and holistic student development.
            </p>
          </div>

          <div className="value-card">
            <Award size={40} />
            <h3>Our Commitment</h3>
            <p>
              We are committed to continuous improvement, transparent
              communication, and measurable academic progress.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* ---------------- CTA ---------------- */}
    <section className="about-cta">
      <div className="container">
        <h2>Start Your Academic Journey With Us</h2>
        <p>
          Enroll today and take the first step toward consistent academic
          excellence.
        </p>
        <a href="/contact" className="cta-btn">
          Book a Free Demo
        </a>
      </div>
    </section>
  </div>
);

export default AboutPage;
