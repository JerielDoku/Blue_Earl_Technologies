import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Healthcare from './pages/industries/Healthcare';
import RealEstate from './pages/industries/RealEstate';
import PrivateEducation from './pages/industries/PrivateEducation';
import Food from './pages/industries/Food';
import Manufacturing from './pages/industries/Manufacturing';
import Logistics from './pages/industries/Logistics';
import ProfessionalServices from './pages/industries/ProfessionalServices';
import CoreServices from './pages/industries/CoreServices';
import About from './pages/About';
import Contact from './pages/Contact';
import Insights from './pages/Insights';
import Investing from './pages/Investing';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/industries/healthcare" element={<Healthcare />} />
        <Route path="/industries/realestate" element={<RealEstate />} />
        <Route path="/industries/privateeducation" element={<PrivateEducation />} />
        <Route path="/industries/food" element={<Food />} />
        <Route path="/industries/manufacturing" element={<Manufacturing />} />
        <Route path="/industries/logistics" element={<Logistics />} />
        <Route path="/industries/professionalservices" element={<ProfessionalServices />} />
        <Route path="/industries/coreservices" element={<CoreServices />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/investing" element={<Investing />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
