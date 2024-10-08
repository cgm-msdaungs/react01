import './App.css';
import React, { useEffect } from 'react'; // Import useEffect here
import Navbar from './components/Navbar';
import Home from './components/Home';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Additional from './components/Additional';
// import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTopButton from './components/BackToTopButton';
const App = () => {
  useEffect(() => {
    // Section Fade-In Animation on Scroll
    const faders = document.querySelectorAll('.fade-in');

    const appearOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) {
          return;
        } else {
          entry.target.classList.add('visible');
          appearOnScroll.unobserve(entry.target);
        }
      });
    }, appearOptions);

    faders.forEach(fader => {
      appearOnScroll.observe(fader);
    });
  }, []);

  return (
    <div className='font-sans'>
      <Navbar />
      <Home />
      <Education />
      <Experience />
      <Skills />
      <Additional />
      {/* <Contact /> */}
      <Footer />
      <BackToTopButton />
    </div>
  );
};

export default App;
