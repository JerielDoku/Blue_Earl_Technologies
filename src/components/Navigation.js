import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, ChevronUp } from 'lucide-react';

export default function Navigation() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : 'auto';
    return () => { document.body.style.overflow = 'auto'; };
  }, [isMobileOpen]);

  const toggleMenu = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  const toggleAccordion = () => {
    setIsAccordionOpen(!isAccordionOpen);
  };
  const closeMobileMenu = () => {
    setIsMobileOpen(false);
    setIsAccordionOpen(false);
  };

  const industries = [
    { name: 'Healthcare & Insurance', path: '/industries/healthcare' },
    { name: 'Real Estate & Property', path: '/industries/realestate' },
    { name: 'Private Education', path: '/industries/privateeducation' },
    { name: 'Food & Agriculture', path: '/industries/food' },
    { name: 'Manufacturing', path: '/industries/manufacturing' },
    { name: 'Logistics & Distribution', path: '/industries/logistics' },
    { name: 'Professional Services', path: '/industries/professionalservices' },
    { name: 'Core Services', path: '/industries/coreservices' },
  ];

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <Link to="/" className="nav-logo">
          BLUE EARL <span>TECHNOLOGIES</span>
        </Link>

        <div className="nav-links">
          <Link to="/" className="nav-item">Home</Link>
          <Link to="/services" className="nav-item">Services</Link>
          
          <div className="nav-item industries-trigger">
            Industries <ChevronDown size={14} style={{ marginLeft: '5px' }} />
            <div className="mega-menu">
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {industries.slice(0, 4).map((industry) => (
                  <Link key={industry.path} to={industry.path} className="mega-menu-link">
                    {industry.name}
                  </Link>
                ))}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {industries.slice(4).map((industry) => (
                  <Link key={industry.path} to={industry.path} className="mega-menu-link">
                    {industry.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link to="/investing" className="nav-item">Investing</Link>
          <Link to="/insights" className="nav-item">Insights</Link>
          <Link to="/about" className="nav-item">About Us</Link>
          <Link to="/contact" className="btn-cta">Contact Us</Link>
        </div>

        <button 
          className="mobile-toggle" 
          onClick={toggleMenu} 
          aria-label={isMobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileOpen}
        >
          {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {isMobileOpen && (
        <div className="nav-overlay active">
          <button className="close-btn" onClick={toggleMenu} aria-label="Close menu">
            <X size={40} />
          </button>

          <Link to="/" className="mobile-link" onClick={closeMobileMenu}>
            Home
          </Link>
          <Link to="/services" className="mobile-link" onClick={closeMobileMenu}>
            Services
          </Link>

          <button 
            className="mobile-link" 
            onClick={toggleAccordion}
            style={{ justifyContent: 'space-between' }}
          >
            Industries {isAccordionOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>

          {isAccordionOpen && (
            <div className="mobile-acc-content active">
              {industries.map((industry) => (
                <Link
                  key={industry.path}
                  to={industry.path}
                  className="mobile-sub-link"
                  onClick={closeMobileMenu}
                >
                  {industry.name}
                </Link>
              ))}
            </div>
          )}

          <Link to="/investing" className="mobile-link" onClick={closeMobileMenu}>
            Investing
          </Link>
          <Link to="/insights" className="mobile-link" onClick={closeMobileMenu}>
            Insights
          </Link>
          <Link to="/about" className="mobile-link" onClick={closeMobileMenu}>
            About Us
          </Link>
          <Link to="/contact" className="mobile-footer-cta" onClick={closeMobileMenu}>
            Contact Us
          </Link>
        </div>
      )}
    </>
  );
}
