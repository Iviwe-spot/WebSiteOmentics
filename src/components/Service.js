import React from 'react';
import { motion } from 'framer-motion';
import { 
  ClipboardCheck, 
  Users, 
  Database, 
  BarChart3, 
  Wrench,
  ArrowRight 
} from 'lucide-react';
import '../styles/Service.css';

const Services = () => {
  const services = [
    {
      icon: ClipboardCheck,
      title: "Request site visit.",
      description: "Initial assessment and planning"
    },
    {
      icon: Users,
      title: "Stakeholder analysis.",
      description: "Understanding your team's needs"
    },
    {
      icon: Database,
      title: "Data pipeline setup and integration.",
      description: "Connecting all your data sources"
    },
    {
      icon: BarChart3,
      title: "Dashboard and reports.",
      description: "Real-time insights and analytics"
    },
    {
      icon: Wrench,
      title: "Monthly maintenance and support.",
      description: "Ongoing optimization and updates"
    }
  ];

  return (
    <section className="services">
      <div className="services-container">
        <motion.h2 
          className="services-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          How we ensure you are all set up
        </motion.h2>

        <div className="services-grid">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div 
                key={index}
                className="service-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="service-icon">
                  <IconComponent size={48} />
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.p 
          className="services-description"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          At Omentics, the process begins with an on-site visit where we assess your existing data infrastructure and understand your operational 
          needs. 
        </motion.p>

        <motion.button 
          className="services-cta"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Request Site Visit
          <ArrowRight className="cta-icon" size={16} />
        </motion.button>
      </div>
    </section>
  );
};

export default Services;