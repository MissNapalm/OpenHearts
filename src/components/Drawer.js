import React, { useState } from 'react';
import './Drawer.css'; // Drawer styles
import { Link } from 'react-router-dom';

const Drawer = () => {
  const [isOpen, setIsOpen] = useState(false); // Drawer open/close state

  const toggleDrawer = (event) => {
    // Prevent the drawer from closing when clicking on a link
    event.stopPropagation();
    setIsOpen(!isOpen); // Toggle drawer visibility
  };

  return (
    <>
      {/* Drawer container */}
      <div className={`drawer ${isOpen ? 'open' : ''}`} onClick={toggleDrawer}>
        {/* "Click to navigate" text */}
        <div className={`menu-text ${isOpen ? 'hidden' : ''}`}>
          Click to navigate
        </div>

        {/* Menu items - Links are only functional when the drawer is open */}
        <ul className={isOpen ? 'visible' : ''}>
          <li>{isOpen ? <Link to="/" onClick={(e) => e.stopPropagation()}>Home</Link> : <span>Home</span>}</li>
          <li>{isOpen ? <Link to="/about" onClick={(e) => e.stopPropagation()}>Boarding Home Policy</Link> : <span>Boarding Home</span>}</li>
          <li>{isOpen ? <Link to="/contact" onClick={(e) => e.stopPropagation()}>Contact</Link> : <span>Contact</span>}</li>
        </ul>
      </div>

      {/* Overlay to close drawer when clicking outside */}
      {isOpen && <div className="drawer-overlay" onClick={toggleDrawer}></div>}
    </>
  );
};

export default Drawer;
