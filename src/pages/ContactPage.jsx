import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { supabase } from '../lib/supabase';
import './ContactPage.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await supabase.from('contact_submissions').insert([formData]);
      setSuccess(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setSuccess(false), 3000);
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  return (
    <div className="contact-page">
      <section className="contact-hero"><div className="container"><h1>Get in Touch</h1><p>We'd love to hear from you. Contact us today!</p></div></section>
      <section className="contact-content"><div className="container"><div className="contact-grid"><div className="contact-info"><h2>Contact Information</h2><div className="info-cards"><div className="info-card"><Phone size={32} /><div><h4>Phone</h4><p>+91 98765 43210</p></div></div><div className="info-card"><Mail size={32} /><div><h4>Email</h4><p>info@vgyaninstitute.com</p></div></div><div className="info-card"><MapPin size={32} /><div><h4>Address</h4><p>123 Education Street, City</p></div></div></div></div><motion.div className="contact-form-container" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}><h2>Send us a Message</h2><form onSubmit={handleSubmit} className="contact-form"><div className="form-group"><label>Full Name</label><input type="text" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} required /></div><div className="form-group"><label>Email</label><input type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} required /></div><div className="form-group"><label>Phone</label><input type="tel" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} /></div><div className="form-group full-width"><label>Message</label><textarea value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} rows="6" required></textarea></div>{success && <motion.div className="success-message" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>Message sent successfully!</motion.div>}<button type="submit" className="submit-btn" disabled={loading}>{loading ? 'Sending...' : (<><Send size={18} /> Send Message</>)}</button></form></motion.div></div></div></section>
    </div>
  );
};

export default ContactPage;
