import React, { useState, useEffect } from 'react';
import '../styles/Navbar.css';

const Navbar = ({ openModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ['home', 'features', 'about', 'pricing'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'Courses', href: '#features', id: 'features' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Pricing', href: '#pricing', id: 'pricing' },
  ];

  const scrollToSection = (e, href, id) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(id);
    }
    setMobileMenu(false);
  };

  const addRippleEffect = (e) => {
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
  };

  const handleContactClick = (e) => {
    addRippleEffect(e);
    if (openModal) {
      openModal();
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="logo" onClick={() => scrollToSection({ preventDefault: () => {} }, '#home', 'home')}>
          <img 
            src="/codemaster_logo.svg" 
            alt="CodeMaster Academy" 
            className="logo-image"
          />
        </div>
        
        <div className={`nav-links ${mobileMenu ? 'active' : ''}`}>
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href, link.id)}
              className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
            >
              {link.name}
              <span className="nav-indicator"></span>
            </a>
          ))}
          <button 
            className="btn-primary ripple-effect"
            onClick={handleContactClick}
          >
            Start Now
          </button>
        </div>
        
        <div className="hamburger" onClick={() => setMobileMenu(!mobileMenu)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;