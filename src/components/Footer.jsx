import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-section">
            <h3>V Gyan Institute</h3>
            <p>Providing quality education to students from Class 9 to 12. Empowering minds, shaping futures.</p>
            <div className="footer-social">
              <a href="#" className="social-icon"><Facebook size={20} /></a>
              <a href="#" className="social-icon"><Twitter size={20} /></a>
              <a href="#" className="social-icon"><Instagram size={20} /></a>
              <a href="#" className="social-icon"><Youtube size={20} /></a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/courses">Courses</Link></li>
              <li><Link to="/instructors">Instructors</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/results">Results</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Courses</h4>
            <ul>
              <li><Link to="/courses">Class 9</Link></li>
              <li><Link to="/courses">Class 10</Link></li>
              <li><Link to="/courses">Class 11</Link></li>
              <li><Link to="/courses">Class 12</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Info</h4>
            <ul className="footer-contact">
              <li>
                <Mail size={18} />
                <span>info@vgyaninstitute.com</span>
              </li>
              <li>
                <Phone size={18} />
                <span>+91 98765 43210</span>
              </li>
              <li>
                <MapPin size={18} />
                <span>123 Education Street, City</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 V Gyan Institute. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
