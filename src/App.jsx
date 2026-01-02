import React from 'react';
import './App.css';

import Vision from "./components/Vision";
import Mission from "./components/Mission";
import Achievements from "./components/Achievements";
import OfficeBearers from "./components/OfficeBearers";
import Gallery from "./components/Gallery";
import Ventures from "./components/Ventures";
import Join from "./components/Join";
import Hero from "./components/Hero";
import About from "./components/About";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="theatre-root">

      {/* Navigation Bar */}
      <nav className="tbo-nav">
        <div className="logo">TBO<span>.</span></div>

        <div className="nav-links">
          <a href="#about">The Club</a>
          <a href="#ventures">Our Acts</a>
          <a href="#contact">Join Us</a>
        </div>
      </nav>

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Vision Mission Achievements */}
      <div className="vm-container">
  <Vision />
  <Mission />
</div>

      
      <Ventures />

      
      <Gallery />
      <Achievements />

      <OfficeBearers />
      <Join />


      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
