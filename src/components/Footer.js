import React from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  MapPin,
  Linkedin,
  Youtube,
  Twitter,
} from 'lucide-react';
import '../styles/Footer.css';
import footerLogo from "../assets/Imgs/footerImg.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Company Info */}
          <motion.div 
            className="footer-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="footer-logo">
              <img src={footerLogo} alt="Onentics Logo" />
            </div>
            <p className="footer-description">
              Data Engineering & Analytics Services for Mining Operations. 
              Transforming fragmented information into proactive insights.
            </p>
            <div className="social-links">
              <a href="https://www.linkedin.com/company/omentics/" className="social-link" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <div className="social-link" aria-label="YouTube">
                <Youtube size={20} />
              </div>
              <div className="social-link" aria-label="Twitter">
                <Twitter size={20} />
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            className="footer-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="footer-title">Services</h3>
            <ul className="footer-links">
              <li><a href="#about">Data Engineering</a></li>
              <li><a href="#services">Analytics Services</a></li>
              <li><a href="#services">Dashboard Development</a></li>
              <li><a href="#services">SCADA Integration</a></li>
              <li><a href="#services">Predictive Maintenance</a></li>
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div 
            className="footer-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="footer-title">Company</h3>
            <ul className="footer-links">
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">How We Work</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            className="footer-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="footer-title">Contact Info</h3>
            <div className="contact-info">
              <div className="contact-item">
                <Mail size={16} />
                <span>enquiry@omentics.tech</span>
              </div>
              <div className="contact-item">
                <MapPin size={16} />
                <span>Johannesburg, South Africa</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="footer-bottom-content">
            <p>&copy; {currentYear} Omentics. All rights reserved.</p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;