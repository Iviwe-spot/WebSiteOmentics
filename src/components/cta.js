import React from 'react';
import { motion } from 'framer-motion';
import '../styles/cta.css';

const CTA = () => {
  return (
    <section className="cta">
      <div className="cta-container">
        <motion.h2 
          className="cta-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Subscribing to the entire Data team
        </motion.h2>
        
        <motion.p 
          className="cta-description"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Our subscription fee starts from $800+ pm for the entire data team such as skilled 
          Data engineers, Data Architects, Data Scientist and Analysts. This amount excludes the 
          once off set up fee which vary based on your current data setup - such as IoT, SCANDA, 
          Connection, Data storage, etc.
        </motion.p>
      </div>
    </section>
  );
};

export default CTA;