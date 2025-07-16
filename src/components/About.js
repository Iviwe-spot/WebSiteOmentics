import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import '../styles/About.css';
import AboutImage1 from "../assets/Imgs/aboutImg.jpg"
import AboutImage2 from "../assets/Imgs/aboutImg1.jpg"
import AboutImage3 from "../assets/Imgs/aboutImg2.jpg"
import AboutImage4 from "../assets/Imgs/aboutImg3.jpg"

const About = () => {
  // Windows-style panel loading animation variants
  const panelVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      rotateY: -90
    },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        delay: i * 0.15, // Staggered delay for each panel
        duration: 0.6,
        ease: "easeOut"
      }
    })
  };

  const images = [
    { src: AboutImage1, alt: "Mining Operations 1" },
    { src: AboutImage2, alt: "Mining Operations 2" },
    { src: AboutImage3, alt: "Mining Operations 3" },
    { src: AboutImage4, alt: "Mining Operations 4" }
  ];

  return (
    <section className="about">
      <div className="about-container">
        <div className="about-images-grid">
          {images.map((image, index) => (
            <motion.div 
              key={index}
              className="about-image-item"
              custom={index}
              initial="hidden"
              whileInView="visible"
              variants={panelVariants}
              viewport={{ once: true }}
            >
              <div className="image-wrapper">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="about-content">
          <motion.h2 
            className="about-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            What we do for your mining operations.
          </motion.h2>
          
          <motion.p 
            className="about-description"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Omentics is a subscription-based Data Engineering & Analytics Partner for 
            mining operations. We consolidate siloed data from sensors, SCADA, production, 
            maintenance, and environmental systems into automated pipelines and intuitive 
            dashboards, transforming fragmented information into proactive insights. Our 
            service empowers Mining Managers to optimize production and compliance, Plant 
            Planners to enhance scheduling and resource use, Shift Managers to monitor 
            performance in real time, Maintenance Engineers to enable predictive 
            maintenance, HSE teams to strengthen safety and ESG oversight, and Finance/IT 
            leaders to drive cost control and tech integration—all resulting in reduced 
            downtime, stronger compliance, and smarter, data-driven decisions.
          </motion.p>
          
          <motion.button 
            className="about-cta"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Site Visit Now
            <ArrowRight className="cta-icon" size={16} />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default About;