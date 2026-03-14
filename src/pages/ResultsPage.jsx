import { motion } from 'framer-motion';
import { Trophy, Star, Medal } from 'lucide-react';
import './ResultsPage.css';

const MOCK_RESULTS = {
  class12: [
    { id: 1, name: "Aarav Sharma", percentage: 98.4, rank: 1, subject: "PCM", image: "https://ui-avatars.com/api/?name=Aarav+Sharma&background=0D8ABC&color=fff", marks: [{ subject: "Physics", score: 99 }, { subject: "Chemistry", score: 98 }, { subject: "Maths", score: 100 }] },
    { id: 2, name: "Priya Patel", percentage: 97.2, rank: 2, subject: "PCB", image: "https://ui-avatars.com/api/?name=Priya+Patel&background=e74c3c&color=fff", marks: [{ subject: "Physics", score: 96 }, { subject: "Chemistry", score: 97 }, { subject: "Biology", score: 99 }] },
    { id: 3, name: "Rohan Kumar", percentage: 96.8, rank: 3, subject: "PCM", image: "https://ui-avatars.com/api/?name=Rohan+Kumar&background=f39c12&color=fff", marks: [{ subject: "Physics", score: 95 }, { subject: "Chemistry", score: 96 }, { subject: "Maths", score: 98 }] },
    { id: 13, name: "Sanya Verma", percentage: 96.1, rank: 4, subject: "PCB", image: "https://ui-avatars.com/api/?name=Sanya+Verma&background=2ecc71&color=fff", marks: [{ subject: "Physics", score: 94 }, { subject: "Chemistry", score: 95 }, { subject: "Biology", score: 98 }] }
  ],
  class11: [
    { id: 4, name: "Sneha Gupta", percentage: 96.5, rank: 1, subject: "Commerce", image: "https://ui-avatars.com/api/?name=Sneha+Gupta&background=9b59b6&color=fff", marks: [{ subject: "Accounts", score: 98 }, { subject: "Business", score: 96 }, { subject: "Economics", score: 95 }] },
    { id: 5, name: "Vikram Singh", percentage: 95.8, rank: 2, subject: "PCM", image: "https://ui-avatars.com/api/?name=Vikram+Singh&background=34495e&color=fff", marks: [{ subject: "Physics", score: 96 }, { subject: "Chemistry", score: 95 }, { subject: "Maths", score: 97 }] },
    { id: 6, name: "Kavya Desai", percentage: 95.1, rank: 3, subject: "Arts", image: "https://ui-avatars.com/api/?name=Kavya+Desai&background=1abc9c&color=fff", marks: [{ subject: "History", score: 96 }, { subject: "Geography", score: 94 }, { subject: "Pol. Sc.", score: 95 }] },
    { id: 14, name: "Arjun Rai", percentage: 94.7, rank: 4, subject: "Commerce", image: "https://ui-avatars.com/api/?name=Arjun+Rai&background=e67e22&color=fff", marks: [{ subject: "Accounts", score: 95 }, { subject: "Business", score: 94 }, { subject: "Economics", score: 97 }] }
  ],
  class10: [
    { id: 7, name: "Aryan Mehta", percentage: 99.2, rank: 1, subject: "All Subjects", image: "https://ui-avatars.com/api/?name=Aryan+Mehta&background=3498db&color=fff", marks: [{ subject: "Maths", score: 100 }, { subject: "Science", score: 99 }] },
    { id: 8, name: "Ishaan Reddy", percentage: 98.5, rank: 2, subject: "All Subjects", image: "https://ui-avatars.com/api/?name=Ishaan+Reddy&background=e67e22&color=fff", marks: [{ subject: "Maths", score: 98 }, { subject: "Science", score: 99 }] },
    { id: 9, name: "Diya Joshi", percentage: 97.9, rank: 3, subject: "All Subjects", image: "https://ui-avatars.com/api/?name=Diya+Joshi&background=2ecc71&color=fff", marks: [{ subject: "Maths", score: 97 }, { subject: "Science", score: 98 }] },
    { id: 15, name: "Kabir Das", percentage: 97.1, rank: 4, subject: "All Subjects", image: "https://ui-avatars.com/api/?name=Kabir+Das&background=e84393&color=fff", marks: [{ subject: "Maths", score: 96 }, { subject: "Science", score: 97 }] }
  ],
  class9: [
    { id: 10, name: "Ananya Iyer", percentage: 98.6, rank: 1, subject: "All Subjects", image: "https://ui-avatars.com/api/?name=Ananya+Iyer&background=e84393&color=fff", marks: [{ subject: "Maths", score: 100 }, { subject: "Science", score: 98 }] },
    { id: 11, name: "Neel Shah", percentage: 97.4, rank: 2, subject: "All Subjects", image: "https://ui-avatars.com/api/?name=Neel+Shah&background=d35400&color=fff", marks: [{ subject: "Maths", score: 96 }, { subject: "Science", score: 98 }] },
    { id: 12, name: "Riya Kapoor", percentage: 96.8, rank: 3, subject: "All Subjects", image: "https://ui-avatars.com/api/?name=Riya+Kapoor&background=8e44ad&color=fff", marks: [{ subject: "Maths", score: 95 }, { subject: "Science", score: 97 }] },
    { id: 16, name: "Zara Khan", percentage: 96.2, rank: 4, subject: "All Subjects", image: "https://ui-avatars.com/api/?name=Zara+Khan&background=34495e&color=fff", marks: [{ subject: "Maths", score: 98 }, { subject: "Science", score: 94 }] }
  ]
};

const ResultsPage = () => {
  const renderStudentCard = (student, cardClass, idx) => (
    <motion.div key={student.id} className={`story-card ${cardClass}`} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}>
      <div className="rank-badge">Rank {student.rank}</div>
      <img src={student.image} alt={student.name} className="student-image" />
      <h3 className="student-name">{student.name}</h3>
      <p className="subject-tag">{student.subject}</p>
      <div className="story-score-wrapper">
        <span className="story-score">{student.percentage}%</span>
      </div>
      
      <div className="marks-container">
        {student.marks.map((mark, i) => (
          <div key={i} className="mark-item">
            <span className="mark-score">{mark.score}</span>
            <span className="mark-subject">{mark.subject}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );

  return (
    <div className="results-page">
      <section className="results-hero">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <h1>Results & Success Stories</h1>
            <p>Celebrating the outstanding achievements of our brilliant students</p>
          </motion.div>
        </div>
      </section>

      <section className="rankers-section">
        <div className="container">
          
          <div className="class-section" id="class-12">
            <h2 className="section-title class12-title">🏆 Class 12 Toppers</h2>
            <div className="stories-grid">
              {MOCK_RESULTS.class12.map((s, idx) => renderStudentCard(s, 'card-class12', idx))}
            </div>
          </div>

          <div className="class-section" id="class-11">
            <h2 className="section-title class11-title">🏆 Class 11 Toppers</h2>
            <div className="stories-grid">
              {MOCK_RESULTS.class11.map((s, idx) => renderStudentCard(s, 'card-class11', idx))}
            </div>
          </div>

          <div className="class-section" id="class-10">
            <h2 className="section-title class10-title">🏆 Class 10 Toppers</h2>
            <div className="stories-grid">
              {MOCK_RESULTS.class10.map((s, idx) => renderStudentCard(s, 'card-class10', idx))}
            </div>
          </div>

          <div className="class-section" id="class-9">
            <h2 className="section-title class9-title">🏆 Class 9 Toppers</h2>
            <div className="stories-grid">
              {MOCK_RESULTS.class9.map((s, idx) => renderStudentCard(s, 'card-class9', idx))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default ResultsPage;
