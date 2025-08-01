import React, { useEffect, useState } from 'react';
import "../styles/index.css";

const slides = [
  {
    src: '\home screen1.jpg',
    alt: 'Slide 1',
    description: [
      <>First order?</>,
      <>Hurry up! Get <span style={{ color: 'orange' }}>30%</span> off</>,
      <>Enjoy <span style={{ color: 'orange' }}>30%</span> off your first order</>
    ]
  },
  {
    src: '\screen 2.jpg',
    alt: 'Slide 2',
    description: [
      <h2 style={{ color: 'white', fontWeight: 'bold', fontSize: '3.5rem' }}>Special offer</h2>,
      <p style={{ fontSize: '2.5rem', color: 'white', margin: 0 }}>Your 6<sup>th</sup> meal is on us!</p>,
      <p style={{ fontSize: '2.5rem', color: '#ccc', margin: 0 }}>
        Order 5 times, get your next meal or service <span style={{ color: 'orange' }}>FREE</span>
      </p>
    ]
  },
  {
    src: '\screen3.jpg',
    alt: 'Slide 3',
    description: [
    <>Service on demand!</>,
    <>Connect with <span style={{ color: 'green' }}>top rated</span> professionals</>,
    <>All services available, <span style={{ color: 'gray' }}>T&C Applied</span></>
    ]

  }
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
            onError={(e) => (e.target.src = '/placeholder.svg')}
          />
          <div className="slide-description">
            {slide.description.map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Hero;


