import React from 'react';

export default function FeatureGrid({ 
  items = [],
  columns = 'repeat(auto-fit, minmax(250px, 1fr))',
  gap = '2rem'
}) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: columns,
        gap: gap,
        maxWidth: '1200px',
        margin: '0 auto',
      }}
    >
      {items.map((item, idx) => (
        <div
          key={item.id || item.title || idx}
          style={{
            background: 'var(--off-white)',
            padding: '2rem',
            borderRadius: '8px',
            borderLeft: '4px solid var(--cerulean-blue)',
          }}
        >
          <h3 style={{ marginBottom: '1rem', color: 'var(--cerulean-blue)' }}>
            {item.title}
          </h3>
          <p style={{ color: 'var(--slate-gray)' }}>
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
}
