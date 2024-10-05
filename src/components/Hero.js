import React, { useState, useEffect } from 'react';
import './Hero.css';

// Import images from the components folder
import background1 from './background1.jpg';
import background2 from './background2.jpg';
import background3 from './background3.jpg';
import background4 from './background4.jpg';

const Hero = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // List of imported background images
    const backgroundImages = [background1, background2, background3, background4];

    // Effect to change the background image every 5 seconds
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
        }, 6000); // Change every 5 seconds

        // Cleanup interval on component unmount
        return () => clearInterval(intervalId);
    }, [backgroundImages.length]);

    return (
        <section className="hero">
            {backgroundImages.map((image, index) => (
                <div
                    key={index}
                    className={`background-layer ${index === currentImageIndex ? 'visible' : ''}`}
                    style={{ backgroundImage: `url(${image})` }}
                />
            ))}
            <div className="hero-content">
                <div className="hero-text-container">
                    <h1>Open Hearts</h1>
                    <h1 className="smaller-heading">Digital Forensics</h1>
                    <p></p>
                    <p>Empowering underserved communities through forensic technology</p>
                </div>
            </div>
        </section>
    );
};

export default Hero;
