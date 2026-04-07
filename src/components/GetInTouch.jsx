import React from 'react';
import '../styles/GetInTouch.css';

const GetInTouch = ({ openModal }) => {
  return (
    <section className="get-in-touch">
      <div className="get-in-touch-container">
        <div className="get-in-touch-content reveal" data-animation="fade-up">
          <div className="section-badge">
            <span className="badge-icon">💬</span>
            Start Learning Today
          </div>
          
          <h2>
            Ready to <span className="gradient-text">transform</span> your career?
          </h2>
          
          <p>
            Join thousands of students who have already launched their tech careers 
            with CodeMaster Academy. Get access to expert instructors, real-world projects, 
            and a supportive community.
          </p>
          
          <div className="get-in-touch-stats">
            <div className="stat-item">
              <span className="stat-number">50K+</span>
              <span className="stat-label">Active Students</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">98%</span>
              <span className="stat-label">Recommendation Rate</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">24/7</span>
              <span className="stat-label">Support</span>
            </div>
          </div>
          
          <button 
            className="get-in-touch-btn"
            onClick={openModal}
          >
            <span className="btn-icon">✨</span>
            Start Free Trial
            <span className="btn-arrow">→</span>
          </button>
          
          <p className="get-in-touch-note">
            No credit card required • Cancel anytime • 7-day free trial
          </p>
        </div>
        
        <div className="get-in-touch-decoration reveal" data-animation="fade-left">
          <div className="decoration-cards">
            <div className="deco-card card-1">
              <div className="deco-icon">🎓</div>
              <div className="deco-text">Expert instructors</div>
            </div>
            <div className="deco-card card-2">
              <div className="deco-icon">💼</div>
              <div className="deco-text">Career support</div>
            </div>
            <div className="deco-card card-3">
              <div className="deco-icon">🚀</div>
              <div className="deco-text">Job placement help</div>
            </div>
          </div>
          <div className="gradient-bg-shape"></div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;