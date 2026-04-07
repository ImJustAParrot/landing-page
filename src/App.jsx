import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';
import GetInTouch from './components/GetInTouch';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      
      setTimeout(() => {
        const reveals = document.querySelectorAll('.reveal');
        reveals.forEach((reveal) => {
          const animationType = reveal.getAttribute('data-animation') || 'fade-up';
          reveal.classList.add('active', animationType);
          reveal.classList.add('loaded');
        });
      }, 100);
    }, 500);

    const handleScroll = () => {
      const reveals = document.querySelectorAll('.reveal');
      reveals.forEach((reveal) => {
        const windowHeight = window.innerHeight;
        const revealTop = reveal.getBoundingClientRect().top;
        const revealPoint = 150;

        if (revealTop < windowHeight - revealPoint) {
          const animationType = reveal.getAttribute('data-animation') || 'fade-up';
          reveal.classList.add('active', animationType);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    const handleParallax = () => {
      const scrolled = window.pageYOffset;
      const hero = document.querySelector('.hero');
      if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
    };

    window.addEventListener('scroll', handleParallax);

    window.openContactModal = () => setIsModalOpen(true);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleParallax);
      delete window.openContactModal;
    };
  }, []);

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="loading-spinner"></div>
        <div className="loading-text">CodeMaster Academy</div>
      </div>
    );
  }

  return (
    <div className="App">
      <Navbar openModal={() => setIsModalOpen(true)} />
      <Hero openModal={() => setIsModalOpen(true)} />
      <Features />
      <About />
      <Pricing />
      <GetInTouch openModal={() => setIsModalOpen(true)} />
      <Footer />
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

export default App;