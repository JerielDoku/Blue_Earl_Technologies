import React from 'react';
import { TrendingUp, BarChart3 } from 'lucide-react';

export default function Investing() {
  return (
    <>
      <section className="hero">
        <div className="hero-container">
          <h1 className="hero-title">Invest in Innovation</h1>
          <p className="hero-subtitle">
            Blue Earl Technologies is building the future of essential industry technology.
          </p>
        </div>
      </section>

      <section className="section">
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ marginBottom: '2rem', fontSize: '2rem' }}>Investment Opportunities</h2>
          <p style={{ marginBottom: '2rem', fontSize: '1.1rem', color: 'var(--slate-gray)' }}>
            We're looking for strategic partners who believe in the transformative power of technology for essential industries. Our proven track record in digital transformation positions us for significant growth.
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '2rem',
              marginTop: '3rem',
            }}
          >
            <div
              style={{
                background: 'var(--pure-white)',
                padding: '2rem',
                borderRadius: '8px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
              }}
            >
              <TrendingUp size={40} style={{ color: 'var(--cerulean-blue)', marginBottom: '1rem' }} />
              <h3 style={{ marginBottom: '1rem' }}>Strong Growth</h3>
              <p style={{ color: 'var(--slate-gray)' }}>
                Our expansion into new markets demonstrates consistent revenue growth and market opportunity.
              </p>
            </div>

            <div
              style={{
                background: 'var(--pure-white)',
                padding: '2rem',
                borderRadius: '8px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
              }}
            >
              <BarChart3 size={40} style={{ color: 'var(--cerulean-blue)', marginBottom: '1rem' }} />
              <h3 style={{ marginBottom: '1rem' }}>Proven Model</h3>
              <p style={{ color: 'var(--slate-gray)' }}>
                Our business model has been validated across multiple industries with strong customer retention.
              </p>
            </div>
          </div>

          <div
            style={{
              background: 'var(--sky-tint)',
              padding: '2rem',
              borderRadius: '8px',
              marginTop: '3rem',
              textAlign: 'center',
            }}
          >
            <p style={{ color: 'var(--dark-text)', marginBottom: '1.5rem' }}>
              Interested in learning more? Contact our investor relations team.
            </p>
            <a href="mailto:investors@blueearl.tech" className="btn-main">
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
