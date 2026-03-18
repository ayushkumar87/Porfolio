import { useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Profiles from './components/Profiles';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

/**
 * App.jsx - Main Application Entry Point
 * Orchestrates component composition and handles global interactive effects.
 */
function App() {
  useEffect(() => {
    /**
     * handleRipple - Logic for the interactive button ripple effect
     * Calculates click position and spawns a temporary span for the animation.
     */
    const handleRipple = (e) => {
      const button = e.target.closest('.btn');
      if (button) {
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
        setTimeout(() => ripple.remove(), 600); // Cleanup ripple after animation
      }
    };

    document.addEventListener('click', handleRipple);

    /**
     * Intersection Observer - Handles scroll-triggered fade-in animations
     * Adds 'fade-in-visible' class when a section enters the viewport.
     */
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px' // Trigger slightly before the section fully enters
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-visible');
        }
      });
    }, observerOptions);

    // Initial setup for all sections to be animatable
    document.querySelectorAll('section').forEach(section => {
      section.classList.add('fade-in-section');
      observer.observe(section);
    });

    return () => {
      document.removeEventListener('click', handleRipple);
      observer.disconnect(); // Proper cleanup on component unmount
    };
  }, []);

  return (
    <div className="App">
      <Hero />
      <About />
      <Profiles />
      <Skills />
      <Projects />
      <Education />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
