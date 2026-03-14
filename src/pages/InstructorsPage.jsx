import { motion } from "framer-motion";
import { Award, Briefcase, GraduationCap } from "lucide-react";
import "./InstructorsPage.css";

const instructors = [
  {
    id: 1,
    name: "S.K Sir",
    specialization: "Physics Expert",
    experience_years: 10,
    bio: "IIT JAM Qualified | M.Sc., B.Ed | Expert in Conceptual Physics",
    qualifications: ["M.Sc Physics", "B.Ed", "IIT JAM Qualified"],
    photo_url: "/instructor_imgs/phy.jpg"   // 👈 Your uploaded image
  },
  {
    id: 2,
    name: "Ashish Sir",
    specialization: "Physics Expert",
    experience_years: 4,
    bio: "Specialist in Conceptual Physics",
    qualifications: ["B-tech CSE-(Data Science)"],
    photo_url: "/instructor_imgs/ash.png"
  },
  {
    id: 3,
    name: "R.K Sir",
    specialization: "Chemistry Expert",
    experience_years: 9,
    bio: "Organic & Physical Chemistry Specialist",
    qualifications: ["M.Sc Chemistry", "CSIR NET Qualified"],
    photo_url: "https://randomuser.me/api/portraits/men/41.jpg"
  },
  {
    id: 4,
    name: "Prachi Ma'am",
    specialization: "Biology Expert",
    experience_years: 7,
    bio: "NEET Foundation & Board Specialist",
    qualifications: ["M.Sc Biology", "B.Ed"],
    photo_url: "/instructor_imgs/bio.jpg"
  },
  {
    id: 5,
    name: "Vivek Sir",
    specialization: "English Expert",
    experience_years: 6,
    bio: "Grammar & Spoken English Specialist",
    qualifications: ["M.A English", "TESOL Certified"],
    photo_url: "https://randomuser.me/api/portraits/men/22.jpg"
  },
  {
    id: 6,
    name: "Neha Ma'am",
    specialization: "Computer Science Expert",
    experience_years: 5,
    bio: "Programming & Coding Mentor",
    qualifications: ["B.Tech CSE", "AWS Certified"],
    photo_url: "https://randomuser.me/api/portraits/women/68.jpg"
  }
];

const InstructorsPage = () => {
  return (
    <div className="instructors-page">

      <section className="instructors-hero">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <h1>Our Expert Instructors</h1>
            <p>Meet the dedicated professionals shaping academic excellence</p>
          </motion.div>
        </div>
      </section>

      <section className="instructors-content">
        <div className="container">
          <div className="instructors-grid">
            {instructors.map((i, idx) => (
              <motion.div
                key={i.id}
                className="instructor-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="instructor-image">
                  <img src={i.photo_url} alt={i.name} />
                </div>

                <div className="instructor-info">
                  <h3>{i.name}</h3>

                  <div className="instructor-specialization">
                    <Award size={18} />
                    <span>{i.specialization}</span>
                  </div>

                  <div className="instructor-experience">
                    <Briefcase size={18} />
                    <span>{i.experience_years}+ years experience</span>
                  </div>

                  <p className="instructor-bio">{i.bio}</p>

                  <div className="instructor-qualifications">
                    <h4>Qualifications:</h4>
                    <ul>
                      {i.qualifications.map((q, qi) => (
                        <li key={qi}>
                          <GraduationCap size={16} />
                          <span>{q}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default InstructorsPage;

