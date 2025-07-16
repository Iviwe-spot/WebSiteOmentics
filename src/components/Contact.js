import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send,
  User,
  Building,
  CheckCircle
} from 'lucide-react';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Create email content
    const subject = `Contact Form Submission from ${formData.name}`;
    const body = `
Name: ${formData.name}
Company: ${formData.company}
Email: ${formData.email}
Phone: ${formData.phone}

Message:
${formData.message}
    `;
    
    // Create mailto link
    const mailtoLink = `mailto:enquiry@omentics.tech?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Show success message after a short delay
    setTimeout(() => {
      setIsSubmitted(true);
      setIsSubmitting(false);
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        
        // Reset form after success message disappears
        setFormData({
          name: '',
          company: '',
          email: '',
          phone: '',
          message: ''
        });
      }, 5000);
    }, 1000);
  };



  return (
    <section className="contact">
      <div className="contact-container">
        <motion.div 
          className="contact-info"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="contact-title">Get in touch with us</h2>
          <p className="contact-description">
            Ready to transform your mining operations with data-driven insights? 
            Let's discuss how Omentics can help optimize your processes and boost efficiency.
          </p>

          <div className="contact-details">
            <div className="contact-item">
              <Mail className="contact-icon" size={20} />
              <div>
                <h4>Email</h4>
                <p>enquiry@omentics.tech</p>
              </div>
            </div>
            <div className="contact-item">
              <MapPin className="contact-icon" size={20} />
              <div>
                <h4>Location</h4>
                <p>Johannesburg, South Africa</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="contact-form-container"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <div className="input-icon">
                <User size={18} />
              </div>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <div className="input-icon">
                <Building size={18} />
              </div>
              <input
                type="text"
                name="company"
                placeholder="Company Name"
                value={formData.company}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <div className="input-icon">
                <Mail size={18} />
              </div>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <div className="input-icon">
                <Phone size={18} />
              </div>
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <textarea
                name="message"
                placeholder="Tell us about your mining operation and data challenges..."
                value={formData.message}
                onChange={handleInputChange}
                rows="5"
                required
              ></textarea>
            </div>

            <motion.button 
              type="submit"
              className="form-submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Opening Email...' : 'Send Message'}
              <Send size={16} />
            </motion.button>

            {isSubmitted && (
              <motion.div
                className="success-alert"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <CheckCircle className="success-alert-icon" size={16} />
                <span>Email opened! We'll respond within 24 hours.</span>
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;