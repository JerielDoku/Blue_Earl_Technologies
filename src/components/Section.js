import React from 'react';

export default function Section({ 
  title,
  background = 'var(--pure-white)',
  children,
  padding = '5rem 5%',
  maxWidth = '1200px'
}) {
  return (
    <section style={{ padding, background }}>
      {title && (
        <h2 style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '2rem' }}>
          {title}
        </h2>
      )}
      <div
        style={{
          maxWidth: maxWidth,
          margin: '0 auto',
        }}
      >
        {children}
      </div>
    </section>
  );
}
