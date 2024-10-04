import React, { useState } from 'react';
import './Drawer.css'; // Drawer styles
import { Link } from 'react-router-dom';

const Drawer = () => {
  const [isOpen, setIsOpen] = useState(false); // Drawer open/close state

  const toggleDrawer = () => {
    setIsOpen(!isOpen); // Toggle drawer visibility
  };

  return (
    <>
      {/* Drawer and text */}
      <div className={`drawer ${isOpen ? 'open' : ''}`} onClick={toggleDrawer}>
        <div className={`menu-text ${isOpen ? 'hidden' : ''}`}>
          Click to navigate
        </div>

        {/* Updated menu items */}
        <ul className={isOpen ? 'visible' : 'hidden'}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/who-we-are">Who We Are</Link></li> {/* New link */}
          <li><Link to="/mission">Mission</Link></li> {/* New link */}
          <li><Link to="/about">Boarding Home Policy</Link></li>
          <li><Link to="/our-tech">Our Tech</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>

      {/* Overlay to darken the background when drawer is open */}
      {isOpen && <div className="drawer-overlay" onClick={toggleDrawer}></div>}
    </>
  );
};

export default Drawer;
