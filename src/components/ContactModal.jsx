import React, { useState, useEffect, useRef } from 'react';
import '../styles/ContactModal.css';

const ContactModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errors, setErrors] = useState({});
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const coursesList = [
    { value: 'python', label: 'Python Complete Bootcamp', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', color: '#3776AB' },
    { value: 'react', label: 'React & Next.js Mastery', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', color: '#61DAFB' },
    { value: 'datascience', label: 'Data Science & AI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg', color: '#FF6F00' },
    { value: 'mobile', label: 'Mobile App Development', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg', color: '#02569B' },
    { value: 'backend', label: 'Backend Development', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', color: '#339933' },
    { value: 'frontend', label: 'Frontend Fundamentals', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', color: '#E34F26' },
  ];

  const selectedCourse = coursesList.find(c => c.value === formData.course);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  const handleCourseSelect = (courseValue) => {
    setFormData({ ...formData, course: courseValue });
    if (errors.course) {
      setErrors({ ...errors, course: '' });
    }
    setIsDropdownOpen(false);
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.course) newErrors.course = 'Please select a course';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setIsSubmitting(true);

    setTimeout(() => {
      setSubmitStatus('success');
      setIsSubmitting(false);
      
      setTimeout(() => {
        setSubmitStatus(null);
        onClose();
        setFormData({ name: '', email: '', phone: '', course: '', message: '' });
        setErrors({});
      }, 2000);
    }, 1500);
  };

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('modal-overlay')) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-container reveal active scale-in">
        <button className="modal-close" onClick={onClose}>
          <span>×</span>
        </button>
        
        <div className="modal-header">
          <div className="modal-icon">🎓</div>
          <h2>Start Your Journey</h2>
          <p>Fill out the form and we'll help you choose the perfect course</p>
        </div>

        <form className="modal-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label>Full name *</label>
              <input
                type="text"
                name="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                className={errors.name ? 'error' : ''}
              />
              <span className="input-focus-effect"></span>
              {errors.name && <span className="error-message">{errors.name}</span>}
            </div>

            <div className="form-group">
              <label>Email *</label>
              <input
                type="email"
                name="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? 'error' : ''}
              />
              <span className="input-focus-effect"></span>
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Phone</label>
              <input
                type="tel"
                name="phone"
                placeholder="+1 234 567 890"
                value={formData.phone}
                onChange={handleChange}
              />
              <span className="input-focus-effect"></span>
            </div>

            <div className="form-group">
              <label>Interested Course *</label>
              <div className="custom-dropdown" ref={dropdownRef}>
                <div 
                  className={`dropdown-header ${errors.course ? 'error' : ''}`}
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  {selectedCourse ? (
                    <div className="selected-option">
                      <img src={selectedCourse.icon} alt={selectedCourse.label} className="dropdown-icon" />
                      <span>{selectedCourse.label}</span>
                    </div>
                  ) : (
                    <span className="placeholder">Select a course</span>
                  )}
                  <span className={`dropdown-arrow ${isDropdownOpen ? 'open' : ''}`}>▼</span>
                </div>
                {isDropdownOpen && (
                  <div className="dropdown-list">
                    {coursesList.map(course => (
                      <div
                        key={course.value}
                        className={`dropdown-item ${formData.course === course.value ? 'selected' : ''}`}
                        onClick={() => handleCourseSelect(course.value)}
                      >
                        <img src={course.icon} alt={course.label} className="dropdown-icon" />
                        <span>{course.label}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <span className="input-focus-effect"></span>
              {errors.course && <span className="error-message">{errors.course}</span>}
            </div>
          </div>

          <div className="form-group">
            <label>Message *</label>
            <textarea
              name="message"
              placeholder="Tell us about your goals and experience level..."
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className={errors.message ? 'error' : ''}
            ></textarea>
            <span className="input-focus-effect"></span>
            {errors.message && <span className="error-message">{errors.message}</span>}
          </div>

          <div className="form-checkbox">
            <input type="checkbox" id="privacy" required />
            <label htmlFor="privacy">
              I agree to the <a href="#">Privacy Policy</a>
            </label>
          </div>

          <button
            type="submit"
            className="modal-submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <span className="loading-spinner-btn">
                <span className="spinner"></span>
                Sending...
              </span>
            ) : (
              <>
                Get Started
                <span className="btn-arrow">→</span>
              </>
            )}
          </button>

          {submitStatus === 'success' && (
            <div className="success-message-modal">
              ✨ Thanks for reaching out! We'll contact you within 24 hours.
            </div>
          )}
        </form>

        <div className="modal-footer">
          <p>Or contact us directly:</p>
          <div className="modal-contact-info">
            <span>📧 hello@codemaster.com</span>
            <span>📞 +1 800 123 4567</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;