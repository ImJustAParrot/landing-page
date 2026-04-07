import React, { useEffect, useRef } from 'react';
import '../styles/Features.css';

const Features = () => {
  const courses = [
    { 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      title: 'Python Complete Bootcamp', 
      description: 'From zero to hero - Master Python programming with 20+ real-world projects, automation, and data analysis.',
      color: '#3776AB',
      bgColor: 'rgba(55, 118, 171, 0.15)',
      students: '15K+',
      level: 'Beginner to Advanced'
    },
    { 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      title: 'React & Next.js Mastery', 
      description: 'Build modern web applications with React hooks, Next.js 14, TypeScript, and full-stack development.',
      color: '#61DAFB',
      bgColor: 'rgba(97, 218, 251, 0.15)',
      students: '12K+',
      level: 'Intermediate'
    },
    { 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg',
      title: 'Data Science & AI', 
      description: 'Learn pandas, numpy, scikit-learn, and TensorFlow. Build predictive models and neural networks.',
      color: '#FF6F00',
      bgColor: 'rgba(255, 111, 0, 0.15)',
      students: '8K+',
      level: 'Intermediate to Advanced'
    },
    { 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg',
      title: 'Mobile App Development', 
      description: 'Create iOS and Android apps with React Native and Flutter. Publish your own apps to app stores.',
      color: '#02569B',
      bgColor: 'rgba(2, 86, 155, 0.15)',
      students: '7K+',
      level: 'Beginner to Advanced'
    },
    { 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      title: 'Backend Development', 
      description: 'Master Node.js, Express, MongoDB, PostgreSQL, and RESTful APIs. Deploy to AWS and cloud services.',
      color: '#339933',
      bgColor: 'rgba(51, 153, 51, 0.15)',
      students: '6K+',
      level: 'Intermediate'
    },
    { 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
      title: 'Frontend Fundamentals', 
      description: 'HTML5, CSS3, JavaScript, Tailwind, and responsive design. Build stunning, interactive websites.',
      color: '#E34F26',
      bgColor: 'rgba(227, 79, 38, 0.15)',
      students: '10K+',
      level: 'Beginner'
    },
  ];

  const handleCardHover = (e, isEntering) => {
    const card = e.currentTarget;
    if (isEntering) {
      card.style.transform = 'translateY(-10px) scale(1.02)';
      card.style.boxShadow = '0 30px 60px rgba(0, 0, 0, 0.15)';
    } else {
      card.style.transform = 'translateY(0) scale(1)';
      card.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
    }
  };

  return (
    <section id="features" className="features">
      <div className="features-container">
        <div className="section-header reveal" data-animation="fade-up">
          <span className="section-badge">
            <span className="badge-pulse"></span>
            Featured Courses
          </span>
          <h2>Choose Your <span className="gradient-text">Learning Path</span></h2>
          <p>Industry-ready courses designed by experts to launch your tech career</p>
        </div>
        <div className="features-grid">
          {courses.map((course, index) => (
            <div 
              className="feature-card reveal" 
              data-animation="scale-in"
              key={index} 
              style={{ transitionDelay: `${index * 0.1}s` }}
              onMouseEnter={(e) => handleCardHover(e, true)}
              onMouseLeave={(e) => handleCardHover(e, false)}
            >
              <div className="feature-icon-wrapper">
                <div className="feature-icon-bg" style={{ background: course.bgColor }}></div>
                <img src={course.icon} alt={course.title} className="feature-icon-img" />
              </div>
              <h3>{course.title}</h3>
              <p>{course.description}</p>
              <div className="feature-stats">
                <div className="feature-stat">
                  <span className="stat-value">{course.students}</span>
                  <span className="stat-label">Students</span>
                </div>
                <div className="feature-stat">
                  <span className="stat-value">{course.level}</span>
                  <span className="stat-label">Level</span>
                </div>
              </div>
              <div className="card-hover-effect"></div>
              <div className="feature-link">
                <span>Enroll Now</span>
                <span className="feature-arrow">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;