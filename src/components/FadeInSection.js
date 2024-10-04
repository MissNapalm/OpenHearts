import React from 'react';
import { useInView } from 'react-intersection-observer';
import './FadeInSection.css';

const FadeInSection = ({ children }) => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger the animation once
    threshold: 0.1,    // Trigger when 10% of the component is visible
  });

  return (
    <div ref={ref} className={`fade-in-section ${inView ? 'visible' : ''}`}>
      {children}
    </div>
  );
};

export default FadeInSection;
