import React, { useEffect, useRef } from 'react';
import './WhoWeAre.css'; // Import the CSS file for styling

const WhoWeAre = () => {
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    const lines = document.querySelectorAll('.fade-line');
    lines.forEach((line) => observerRef.current.observe(line));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  // Content for Who We Are Page
  const whoWeAreContent = [
    "At Open Hearts Digital Forensics, we are a team of dedicated professionals with a passion for justice and technological innovation. Our mission is to provide communities, especially those that are marginalized, with the tools they need to protect and defend their loved ones from crime.",
    "Our team consists of experts in digital forensics, cybersecurity, data analysis, and software development. We collaborate with Indigenous leaders, law enforcement, and non-profit organizations to ensure that our technologies are used effectively and ethically. Our goal is to reduce crime, solve cold cases, and empower communities to take control of their own security.",
    "We believe that technology has the power to transform the way forensic investigations are conducted, making them more accurate, efficient, and accessible to everyone. By focusing on innovation and partnership, we strive to create a future where justice is not just a promise but a reality for all."
  ];

  return (
    <div className="who-we-are-page">
      <div className="content">
        <h1 className="who-we-are-heading">Who We Are</h1>
        {whoWeAreContent.map((line, index) => (
          <p key={index} className="who-we-are-text fade-line">
            {line}
          </p>
        ))}
      </div>
    </div>
  );
};

export default WhoWeAre;
