import React, { useEffect, useState } from 'react';
import "./index.css";

const slides = [
  { src: '\Property 1=Frame 358.png', alt: 'Slide 1' },
  { src: '\Property 1=Frame 359 (1).png', alt: 'Slide 2' },
  { src: '\Property 1=Frame 360.png', alt: 'Slide 3' }
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="Hero-slideshow">
      {slides.map((slide, index) => (
        <div
          className={`slide ${index === currentIndex ? 'active' : ''}`}
          key={index}
        >
          <img
            src={slide.src}
            alt={slide.alt}
            onError={(e) => e.target.src = '/placeholder.svg'}
          />
        </div>
      ))}
    </div>
  );
};

export default Hero;
