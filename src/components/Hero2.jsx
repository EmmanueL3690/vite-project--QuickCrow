import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import '../styles/Hero2.css';

const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' }); // Triggers when 100px into view

  return (
    <div className="hero2" ref={ref}>
      <motion.img
        src="\Event Elegance.jpg"
        alt="Hero2"
        className="hero-img"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
      />

      <motion.div
        className="hero-text"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <h1>Discover. Taste. Repeat.</h1>
        <p>Explore the top-rated restaurants near you — from hidden gems to your all-time favorites.</p>
      </motion.div>
    </div>
  );
};

export default Hero;



