import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="logo">
              <div className="logo-icon">💻</div>
              <div className="logo-text">CodeMaster Academy</div>
            </div>
            <p>Empowering developers worldwide with industry-ready skills</p>
            <div className="newsletter">
              <h4>Subscribe to our newsletter</h4>
              <div className="newsletter-form">
                <input type="email" placeholder="Your email" />
                <button>→</button>
              </div>
            </div>
          </div>
          
          <div className="footer-links">
            <div className="footer-column">
              <h4>Platform</h4>
              <a onClick={() => scrollToSection('#features')}>Courses</a>
              <a onClick={() => scrollToSection('#pricing')}>Pricing</a>
              <a onClick={() => scrollToSection('#about')}>About</a>
              <a href="#">Success Stories</a>
            </div>
            
            <div className="footer-column">
              <h4>Resources</h4>
              <a href="#">Blog</a>
              <a href="#">Documentation</a>
              <a href="#">Community</a>
              <a href="#">Free Tutorials</a>
            </div>
            
            <div className="footer-column">
              <h4>Legal</h4>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Cookie Policy</a>
              <a href="#">Refund Policy</a>
            </div>
            
            <div className="footer-column">
              <h4>Support</h4>
              <a href="#">Help Center</a>
              <a href="#">Contact Us</a>
              <a href="#">FAQs</a>
              <a href="#">Report Issue</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} CodeMaster Academy. All rights reserved.</p>
          <div className="social-links">
            <a href="#" className="social-link">
              <span>🐦</span>
              <span>Twitter</span>
            </a>
            <a href="#" className="social-link">
              <span>💼</span>
              <span>LinkedIn</span>
            </a>
            <a href="#" className="social-link">
              <span>📷</span>
              <span>Instagram</span>
            </a>
            <a href="#" className="social-link">
              <span>💻</span>
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;