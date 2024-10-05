import React, { useEffect, useRef } from 'react';
import './About.css';
import image1 from './image1.jpg';  // Import images from src/components
import image2 from './image2.jpg';
import image3 from './image3.jpg';
import image4 from './image4.jpg';

const About = () => {
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

    const elements = document.querySelectorAll('.fade-line, .about-image');
    elements.forEach((el) => observerRef.current.observe(el));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  // Boarding Home Policy content with three paragraphs between images
  const content = [
    "The Boarding Home Policy was established as part of the United States government's broader strategy to assimilate Native American children into Euro-American society. This policy was implemented in the late 19th century and continued well into the 20th century, with the goal of transforming Native American children into what the government considered 'civilized' citizens.",
    
    "Native children were often forcibly removed from their families and communities, transported to distant boarding schools where they were forbidden from speaking their native languages or practicing their cultural traditions. The government's intent was clear: to strip these children of their cultural identities, forcing them to adopt Euro-American customs, languages, and ways of life.",
    
    "The generational impact of this policy cannot be overstated. Children who survived these boarding schools often grew into adults who were disconnected from their cultural roots, struggling with identity crises, mental health issues, and fractured family bonds.",
    

    <img src={image4} alt="Boarding School Image" className="about-image" key="image1" />,
    
    "At these boarding schools, Native American children were often treated as second-class citizens, forced to cut their hair, wear uniforms, and practice Christianity. They were separated from their siblings and discouraged from forming any familial bonds with others.",
    
    "For many, the trauma of these experiences left lasting scars, as they were punished severely for speaking their native languages or attempting to maintain any connection to their heritage. The aim of the policy was to assimilate, but the reality was that it left countless children isolated and estranged from both their native cultures and the Euro-American society they were supposed to adopt.",
    
    <img src={image2} alt="Cultural Erasure" className="about-image" key="image2" />,
    
    "The policy did not just affect those who attended the schools, but also subsequent generations, as trauma passed down through families who lost touch with their traditions, languages, and histories.",
    
    "While framed as a means of offering education and opportunity to Native American children, the Boarding Home Policy was, in truth, a tool of cultural genocide. The government viewed Native American cultures as inferior, something to be eradicated in favor of a homogenized society.",
    
    <img src={image3} alt="Boarding School Children" className="about-image" key="image3" />,
    
    "The boarding school system was the epitome of this destructive approach, where Native American identity was systematically erased. The trauma experienced in these institutions often translated into a life of suffering, with many former students reporting feelings of alienation, depression, and anxiety that continued long after they left the schools.",
    
    "The Boarding Home Policy's impact continues to reverberate throughout Native communities today. Generational trauma, loss of language, and a fragmented sense of identity are all legacies of this policy.",
    
    "Today, many Native American families are working tirelessly to recover the languages, customs, and traditions that were taken from them. Tribal nations are establishing language revitalization programs, cultural education, and community healing practices as they confront the painful legacy of the boarding school era.",
    
    <img src={image1} alt="Generational Trauma" className="about-image" key="image4" />,
    
    "Moreover, many of these communities are calling for formal acknowledgments of the atrocities committed under these policies, including apologies from the government and institutions that participated in these systems.",
    
    "These calls for recognition and reparation are not merely symbolic—they represent an essential step in the long process of healing and rebuilding."
  ];

  return (
    <div className="about-page">
      <div className="content">
        <h1 className="about-heading">What was the boarding home policy?</h1>
        {content.map((line, index) => (
          <div key={index} className="fade-line">
            {typeof line === 'string' ? <p>{line}</p> : line} {/* Render text or image */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
