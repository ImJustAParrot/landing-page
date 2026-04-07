import React, { useEffect, useRef, useState } from 'react';
import '../styles/About.css';

const About = () => {
  const [counters, setCounters] = useState({ experts: 0, predictions: 0, satisfaction: 0 });
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateNumbers();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const animateNumbers = () => {
    const targets = { experts: 100, predictions: 50, satisfaction: 98 };
    const duration = 2000;
    const step = 20;
    const increments = {
      experts: targets.experts / (duration / step),
      predictions: targets.predictions / (duration / step),
      satisfaction: targets.satisfaction / (duration / step)
    };
    
    let current = { experts: 0, predictions: 0, satisfaction: 0 };
    const timer = setInterval(() => {
      let allComplete = true;
      
      Object.keys(current).forEach(key => {
        if (current[key] < targets[key]) {
          allComplete = false;
          current[key] = Math.min(current[key] + increments[key], targets[key]);
        }
      });
      
      setCounters({
        experts: Math.floor(current.experts),
        predictions: Math.floor(current.predictions),
        satisfaction: Math.floor(current.satisfaction)
      });
      
      if (allComplete) clearInterval(timer);
    }, step);
  };

  return (
    <section id="about" className="about" ref={aboutRef}>
      <div className="about-container">
        <div className="about-content reveal" data-animation="fade-right">
          <span className="section-badge">
            <span className="badge-icon">🏆</span>
            About Us
          </span>
          <h2>Revolutionizing the industry with <span className="gradient-text">constant innovation</span></h2>
          <p className="about-description">
            Founded in 2023, Nexora AI was born with the mission to democratize access to high-level artificial intelligence. 
            Today, we are leaders in AI solutions for businesses of all sizes, transforming data into strategic decisions.
          </p>
          <div className="about-stats">
            <div className="about-stat">
              <div className="stat-number">{counters.experts}+</div>
              <div className="stat-label">AI Experts</div>
              <div className="stat-trend">↑ 45% this year</div>
            </div>
            <div className="about-stat">
              <div className="stat-number">{counters.predictions}M+</div>
              <div className="stat-label">Daily predictions</div>
              <div className="stat-trend">↑ 120% vs 2023</div>
            </div>
            <div className="about-stat">
              <div className="stat-number">{counters.satisfaction}%</div>
              <div className="stat-label">Customer satisfaction</div>
              <div className="stat-trend">⭐ 4.9/5 stars</div>
            </div>
          </div>
          <div className="about-achievements">
            <div className="achievement">
              <span className="achievement-icon">🥇</span>
              <span>Best AI Startup 2024</span>
            </div>
            <div className="achievement">
              <span className="achievement-icon">🏅</span>
              <span>Innovation Award</span>
            </div>
          </div>
        </div>
        <div className="about-image reveal" data-animation="fade-left">
          <div className="gradient-sphere">
            <div className="sphere-inner"></div>
          </div>
          <div className="stats-card">
            <div className="stats-header">
              <span className="stats-icon">📈</span>
              <span>Annual Growth</span>
            </div>
            <div className="stats-number">+340%</div>
            <div className="stats-description">in enterprise AI adoption</div>
            <div className="stats-chart">
              <div className="chart-bar" style={{ height: '60px' }}></div>
              <div className="chart-bar" style={{ height: '80px' }}></div>
              <div className="chart-bar" style={{ height: '100px' }}></div>
              <div className="chart-bar" style={{ height: '140px' }}></div>
              <div className="chart-bar" style={{ height: '200px' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;