import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/Loader.css';

const Loader = ({ onLoadingComplete }) => {
  const [showText, setShowText] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  // Show text after box is built
  useEffect(() => {
    const textTimer = setTimeout(() => {
      setShowText(true);
    }, 2500);

    // Start fade out
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 4000);

    // Complete loading
    const completeTimer = setTimeout(() => {
      if (onLoadingComplete) {
        onLoadingComplete();
      }
    }, 5000);

    return () => {
      clearTimeout(textTimer);
      clearTimeout(fadeTimer);
      clearTimeout(completeTimer);
    };
  }, [onLoadingComplete]);

  return (
    <AnimatePresence>
      <motion.div 
        className="loader"
        initial={{ opacity: 1 }}
        animate={{ opacity: fadeOut ? 0 : 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="loader-container">
          {/* Building Box Logo */}
          <div className="box-container">
            <div className="box-frame">
              {/* Top Side */}
              <motion.div
                className="box-side top"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{
                  delay: 0.2,
                  duration: 0.6,
                  ease: "easeInOut"
                }}
              />
              
              {/* Right Side */}
              <motion.div
                className="box-side right"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{
                  delay: 0.8,
                  duration: 0.6,
                  ease: "easeInOut"
                }}
              />
              
              {/* Bottom Side */}
              <motion.div
                className="box-side bottom"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{
                  delay: 1.4,
                  duration: 0.6,
                  ease: "easeInOut"
                }}
              />
              
              {/* Left Side */}
              <motion.div
                className="box-side left"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{
                  delay: 2.0,
                  duration: 0.6,
                  ease: "easeInOut"
                }}
              />
            </div>
          </div>

          {/* Company Name */}
          <AnimatePresence>
            {showText && (
              <motion.div
                className="loader-text"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="company-name">Omentics</h1>
                <p className="company-tagline">Mining Technologies.</p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Loading Progress */}
          <motion.div
            className="loading-bar"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 4, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Loader;