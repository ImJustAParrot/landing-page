import React, { useEffect, useRef } from 'react';
import '../styles/Hero.css';

const Hero = ({ openModal }) => {
  const heroRef = useRef(null);

  useEffect(() => {
    const createParticles = () => {
      const container = heroRef.current;
      if (!container) return;

      for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.animationDelay = `${Math.random() * 5}s`;
        particle.style.animationDuration = `${3 + Math.random() * 4}s`;
        container.appendChild(particle);
      }
    };

    createParticles();

    return () => {
      const particles = document.querySelectorAll('.particle');
      particles.forEach(particle => particle.remove());
    };
  }, []);

  const handleButtonClick = (e, section) => {
    const button = e.currentTarget;
    const ripple = document.createElement('span');
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    ripple.classList.add('ripple');
    
    button.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);

    if (section === '#contact' && openModal) {
      openModal();
    } else {
      const element = document.querySelector(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="home" className="hero" ref={heroRef}>
      <div className="hero-container">
        <div className="hero-content reveal" data-animation="fade-right">
          <div className="hero-badge">
            <span className="badge">
              <span className="badge-icon">🎓</span>
              #1 Programming Platform
            </span>
          </div>
          <h1 className="hero-title">
            Master Coding Skills & 
            <span className="gradient-text"> Become a Developer</span>
          </h1>
          <p className="hero-description">
            Join 50,000+ students learning web development, data science, mobile apps, and more. 
            Get hands-on experience with real-world projects and expert mentorship.
          </p>
          <div className="hero-buttons">
            <button 
              className="btn-hero-primary"
              onClick={(e) => handleButtonClick(e, '#contact')}
            >
              Start Free Trial
              <span className="arrow">→</span>
            </button>
            <button 
              className="btn-hero-secondary"
              onClick={(e) => handleButtonClick(e, '#features')}
            >
              View Courses
            </button>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <h3 className="counter" data-target="50">50K+</h3>
              <p>Students</p>
            </div>
            <div className="stat">
              <h3 className="counter" data-target="100">100+</h3>
              <p>Courses</p>
            </div>
            <div className="stat">
              <h3 className="counter" data-target="24">24/7</h3>
              <p>Support</p>
            </div>
          </div>
        </div>
        <div className="hero-image reveal" data-animation="fade-left">
          <div className="floating-card card-1">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" className="card-icon-img" />
            <div className="card-content">
              <p>Python Mastery</p>
              <span className="card-tag">Popular</span>
            </div>
          </div>
          <div className="floating-card card-2">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="card-icon-img" />
            <div className="card-content">
              <p>React & Next.js</p>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: '98%' }}></div>
              </div>
            </div>
          </div>
          <div className="floating-card card-3">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" alt="AI" className="card-icon-img" />
            <div className="card-content">
              <p>AI & Machine Learning</p>
              <span className="speed">New!</span>
            </div>
          </div>
          <div className="gradient-orb"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;