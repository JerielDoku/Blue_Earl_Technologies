import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function ContactInfo({ 
  heading = "Let's Build the Future Together.",
  description,
  email,
  location,
  phone
}) {
  return (
    <div className="contact-info">
      <h1 style={{ fontSize: '3rem', marginBottom: '2rem' }}>
        {heading}
      </h1>
      {description && (
        <p style={{ marginBottom: '2rem', color: 'var(--slate-gray)' }}>
          {description}
        </p>
      )}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {email && (
          <p style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Mail size={20} style={{ color: 'var(--cerulean-blue)' }} />
            {email}
          </p>
        )}
        {phone && (
          <p style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Phone size={20} style={{ color: 'var(--cerulean-blue)' }} />
            {phone}
          </p>
        )}
        {location && (
          <p style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <MapPin size={20} style={{ color: 'var(--cerulean-blue)' }} />
            {location}
          </p>
        )}
      </div>
    </div>
  );
}
