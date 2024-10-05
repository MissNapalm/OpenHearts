import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Hero from './components/Hero'; // Hero page component
import About from './components/About'; // About Us page component
import Contact from './components/Contact'; // Contact page component
import Drawer from './components/Drawer'; // Drawer for navigation
import Mission from './components/Mission'; // Mission page
import WhoWeAre from './components/WhoWeAre'; // Who we are page

const App = () => {
  return (
    <Router>
      <div className="App">
        {/* Drawer remains static */}
        <Drawer />

        {/* Routes to switch between pages */}
        <Routes>
          <Route path="/" element={<Hero />} /> {/* Default route for the Hero page */}
          <Route path="/about" element={<About />} /> {/* Route for the About Us page */}
          <Route path="/mission" element={<Mission />} />
          <Route path="/who-we-are" element={<WhoWeAre />} /> {/* Route for the Contact page */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
