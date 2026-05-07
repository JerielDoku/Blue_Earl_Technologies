import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Blue Earl Technologies</h3>
          <p>Innovation for Essential Industries</p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <div className="footer-links">
            <Link to="/">Home</Link>
            <Link to="/services">Services</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/investing">Investing</Link>
          </div>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
            <a href="mailto:info@blueearl.com" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Mail size={18} /> info@blueearl.com
            </a>
            <a href="tel:+1234567890" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Phone size={18} /> +1 (234) 567-890
            </a>
          </div>
        </div>

        <div className="footer-section" style={{ marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
          <p>&copy; {currentYear} Blue Earl Technologies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
