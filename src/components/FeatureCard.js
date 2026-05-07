import React from 'react';

export default function FeatureCard({ 
  icon: Icon, 
  title, 
  description,
  variant = 'default'
}) {
  const styles = {
    default: {
      background: 'var(--off-white)',
      borderLeft: '4px solid var(--cerulean-blue)',
    },
    white: {
      background: 'var(--pure-white)',
      boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
      borderRadius: '6px',
    },
    light: {
      background: 'var(--sky-tint)',
      borderRadius: '8px',
      padding: '2rem',
      border: 'none',
    }
  };

  return (
    <div
      style={{
        padding: '2rem',
        borderRadius: '8px',
        ...styles[variant],
      }}
    >
      {Icon && (
        <Icon 
          size={40} 
          style={{ color: 'var(--cerulean-blue)', marginBottom: '1rem' }} 
        />
      )}
      <h3 style={{ marginBottom: '1rem', color: 'var(--cerulean-blue)' }}>
        {title}
      </h3>
      <p style={{ color: 'var(--slate-gray)' }}>
        {description}
      </p>
    </div>
  );
}
