import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import '../styles/Hero.css';

// Move words array outside component to avoid recreating on every render
const words = ['operations', 'maintenance', 'compliance'];

const Hero = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    
    if (isTyping) {
      if (displayedText.length < currentWord.length) {
        const timeout = setTimeout(() => {
          setDisplayedText(currentWord.slice(0, displayedText.length + 1));
        }, 100);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
        return () => clearTimeout(timeout);
      }
    } else {
      if (displayedText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, 50);
        return () => clearTimeout(timeout);
      } else {
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        setIsTyping(true);
      }
    }
  }, [displayedText, isTyping, currentWordIndex]);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="hero">
      <div className="hero-container">
        <h1 className="hero-title">
          <span className="light-text">Deeper data </span>
          <span className="bold-text">insights</span>
          <span className="light-text"> from your</span>
          <br />
          <span className="bold-text">mining </span>
          <span className="typewriter-wrapper">
            <span className="bold-text">
              {displayedText}
            </span>
            <span className="cursor">|</span>
          </span>
        </h1>
        
        <p className="hero-description">
          Your mining data engineering team that helps your visualise and 
          build data driven pipelines to optimise operations
        </p>
        
        <button 
          className="hero-button"
          onClick={scrollToContact}
        >
          Request Site Visit
          <ArrowRight className="button-icon" size={18} />
        </button>
      </div>
    </section>
  );
};

export default Hero;