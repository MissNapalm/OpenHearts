import React, { useEffect, useRef } from 'react';
import './Mission.css'; // Import the CSS file for styling

const Mission = () => {
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

  // Updated Mission Content with longer paragraphs
  const missionContent = [
    "At Open Hearts Digital Forensics, our mission is to provide advanced forensic solutions that aid in reducing violent crimes and protecting vulnerable communities. We focus on addressing crises affecting Indigenous peoples and other marginalized communities. Through our cutting-edge technologies, including drone-guided ground-penetrating radar and custom forensic software, we aim to uncover the truth in cases that have been left unresolved for far too long.",
    "Our expertise is rooted in developing forensic technologies that are accessible to law enforcement and community organizations. We are dedicated to supporting investigations by offering tools that help recover vital evidence in criminal cases. Whether it's locating missing persons, solving cold cases, or analyzing data for forensic patterns, our solutions empower those working to bring justice and closure.",
    "Beyond our technological solutions, we are committed to community engagement. We collaborate with Indigenous leaders and organizations to ensure that our technologies are used ethically and with the utmost respect for cultural values. Our partnerships focus on providing training and support, so communities can leverage these technologies to address their own challenges, from solving cases of missing persons to protecting their natural lands.",
    "We understand the deep emotional and cultural significance of the cases we work on, which is why our mission goes beyond providing technological solutions. We aim to build trust with the communities we serve, ensuring that they feel empowered and heard. The future of forensic science lies not just in innovation but in collaboration and empathy. By working together with communities, we can help to heal the wounds caused by decades of unresolved violence.",
    "As we move forward, we pledge to continue refining our tools and expanding our reach to serve more communities in need. Open Hearts Digital Forensics will remain at the forefront of forensic innovation, striving to create a safer world where justice is accessible to all, regardless of race, location, or socioeconomic status."
  ];

  return (
    <div className="mission-page">
      <div className="content">
        <h1 className="mission-heading">Our Mission</h1>
        {missionContent.map((line, index) => (
          <p key={index} className="mission-text fade-line">
            {line}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Mission;
