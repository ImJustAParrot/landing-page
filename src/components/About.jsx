import React, { useEffect, useRef, useState } from 'react';
import '../styles/About.css';

const About = () => {
  const [counters, setCounters] = useState({ students: 0, courses: 0, satisfaction: 0 });
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
    const targets = { students: 50000, courses: 100, satisfaction: 98 };
    const duration = 2000;
    const step = 20;
    const increments = {
      students: targets.students / (duration / step),
      courses: targets.courses / (duration / step),
      satisfaction: targets.satisfaction / (duration / step)
    };
    
    let current = { students: 0, courses: 0, satisfaction: 0 };
    const timer = setInterval(() => {
      let allComplete = true;
      
      Object.keys(current).forEach(key => {
        if (current[key] < targets[key]) {
          allComplete = false;
          current[key] = Math.min(current[key] + increments[key], targets[key]);
        }
      });
      
      setCounters({
        students: Math.floor(current.students),
        courses: Math.floor(current.courses),
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
            <span className="badge-icon">🎓</span>
            About Us
          </span>
          <h2>Empowering developers to achieve <span className="gradient-text">coding excellence</span></h2>
          <p className="about-description">
            Founded in 2023, CodeMaster Academy was born with the mission to democratize access to high-quality programming education. 
            Today, we are leaders in tech education, transforming beginners into job-ready developers through hands-on projects and expert mentorship.
          </p>
          <div className="about-stats">
            <div className="about-stat">
              <div className="stat-number">{counters.students.toLocaleString()}+</div>
              <div className="stat-label">Students Trained</div>
              <div className="stat-trend">↑ 150% this year</div>
            </div>
            <div className="about-stat">
              <div className="stat-number">{counters.courses}+</div>
              <div className="stat-label">Expert-led Courses</div>
              <div className="stat-trend">↑ 40% vs 2023</div>
            </div>
            <div className="about-stat">
              <div className="stat-number">{counters.satisfaction}%</div>
              <div className="stat-label">Graduate satisfaction</div>
              <div className="stat-trend">⭐ 4.9/5 stars</div>
            </div>
          </div>
          <div className="about-achievements">
            <div className="achievement">
              <span className="achievement-icon">🥇</span>
              <span>Best Coding Bootcamp 2024</span>
            </div>
            <div className="achievement">
              <span className="achievement-icon">🏅</span>
              <span>Top Rated Platform</span>
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
              <span>Student Growth</span>
            </div>
            <div className="stats-number">+340%</div>
            <div className="stats-description">increase in job placements</div>
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