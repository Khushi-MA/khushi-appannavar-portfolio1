import React, { useState, useEffect } from 'react';
import './Beyond.css';
import Services from './Services';
import BooksSection from './books';

function Beyond() {
  const [isPopupActive, setIsPopupActive] = useState(false);
  const handlePopupOpen = () => setIsPopupActive(true);
  const handlePopupClose = () => setIsPopupActive(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          } else {
            entry.target.classList.remove('visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <div className={`beyond-page${isPopupActive ? ' popup-active' : ''}`}>
      {/* <h1>Beyond</h1>
      <p>Welcome to the Beyond page! Add your content here.</p> */}
      {/* <section id="services" className="fade-in">
        <Services onPopupOpen={handlePopupOpen} onPopupClose={handlePopupClose} />
      </section> */}
      <section id="books" className="fade-in">
        <BooksSection />
      </section>
    </div>
  );
}

export default Beyond;
