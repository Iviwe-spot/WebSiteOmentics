import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, ArrowRight} from 'lucide-react';
import '../styles/Header.css';
import headerImage from "../assets/Imgs/headersImg1.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const mobileNavRef = useRef(null);
  const menuButtonRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Click outside to close menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMenuOpen &&
        mobileNavRef.current &&
        menuButtonRef.current &&
        !mobileNavRef.current.contains(event.target) &&
        !menuButtonRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    closeMenu();
  };

  return (
    <motion.header 
      className={`header ${isScrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <nav className="nav-container">
        <div className="nav-logo">
          <img src={headerImage} alt="Omentics Logo" />
        </div>

        {/* Desktop Navigation - Positioned to the right */}
        <div className="nav-right">
          <ul className="nav-links">
            <li>
              <button onClick={() => scrollToSection('about')} className="nav-link">
                What we do
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('services')} className="nav-link">
                How it works
              </button>
            </li>
          </ul>

          {/* CTA Button */}
          <motion.button 
            className="nav-cta"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('contact')}
          >
            Get started
            <ArrowRight className="cta-icon" size={16} />
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <button ref={menuButtonRef} className="mobile-menu-btn" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        <motion.div 
          ref={mobileNavRef}
          className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ 
            opacity: isMenuOpen ? 1 : 0, 
            y: isMenuOpen ? 0 : -20 
          }}
          transition={{ duration: 0.3 }}
        >
          <ul className="mobile-nav-links">
            <li>
              <button onClick={() => scrollToSection('about')} className="mobile-nav-link">
                What we do
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('services')} className="mobile-nav-link">
                How it works
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="mobile-nav-cta"
              >
                Get Started Now
              </button>
            </li>
          </ul>
        </motion.div>
      </nav>
    </motion.header>
  );
};

export default Header;