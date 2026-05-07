import React from 'react';

export default function Insights() {
  return (
    <>
      <section className="hero">
        <div className="hero-container">
          <h1 className="hero-title">Market Insights</h1>
          <p className="hero-subtitle">
            Stay informed with our latest tech industry analysis and trends.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="section-content">
          <article
            style={{
              background: 'var(--pure-white)',
              padding: '2rem',
              borderRadius: '8px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
            }}
          >
            <h2 style={{ color: 'var(--cerulean-blue)', marginBottom: '1rem' }}>Digital Transformation in 2024</h2>
            <p style={{ color: 'var(--slate-gray)', marginBottom: '1rem' }}>
              As we move further into 2024, digital transformation continues to be a priority for businesses across essential industries. Cloud-first strategies, AI integration, and cybersecurity are reshaping how organizations operate.
            </p>
            <p style={{ fontSize: '0.85rem', color: 'var(--slate-gray)' }}>Published: May 2024</p>
          </article>

          <article
            style={{
              background: 'var(--pure-white)',
              padding: '2rem',
              borderRadius: '8px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
            }}
          >
            <h2 style={{ color: 'var(--cerulean-blue)', marginBottom: '1rem' }}>The Future of Cybersecurity</h2>
            <p style={{ color: 'var(--slate-gray)', marginBottom: '1rem' }}>
              With increasing cyber threats targeting healthcare, manufacturing, and logistics sectors, robust cybersecurity measures have become non-negotiable. Organizations must invest in zero-trust architectures and real-time threat detection.
            </p>
            <p style={{ fontSize: '0.85rem', color: 'var(--slate-gray)' }}>Published: April 2024</p>
          </article>

          <article
            style={{
              background: 'var(--pure-white)',
              padding: '2rem',
              borderRadius: '8px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
            }}
          >
            <h2 style={{ color: 'var(--cerulean-blue)', marginBottom: '1rem' }}>AI Adoption Across Industries</h2>
            <p style={{ color: 'var(--slate-gray)', marginBottom: '1rem' }}>
              Artificial intelligence is revolutionizing how businesses in essential industries operate. From predictive maintenance in manufacturing to diagnostic assistance in healthcare, AI is yielding measurable results.
            </p>
            <p style={{ fontSize: '0.85rem', color: 'var(--slate-gray)' }}>Published: March 2024</p>
          </article>
        </div>
      </section>
    </>
  );
}
