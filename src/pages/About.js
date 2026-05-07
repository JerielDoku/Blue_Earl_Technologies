import React from 'react';
import { Shield, Target, Zap } from 'lucide-react';
import Section from '../components/Section';
import Grid from '../components/Grid';

export default function About() {
  const values = [
    {
      icon: Shield,
      title: 'Trusted',
      description: 'Reliable delivery and consistent quality.',
    },
    {
      icon: Target,
      title: 'Precise',
      description: 'No unnecessary complexity, focused solutions.',
    },
    {
      icon: Zap,
      title: 'Innovative',
      description: 'Future-proof technology and forward thinking.',
    },
  ];

  return (
    <>
      <section style={{ padding: '120px 5% 60px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '3rem' }}>
          We Build the Tech That <br />
          <span style={{ color: 'var(--cerulean-blue)' }}>Powers Industry.</span>
        </h1>
      </section>

      <Section
        title="Our Mission & Values"
        background="var(--pure-white)"
        maxWidth="1000px"
      >
        <Grid columns="repeat(auto-fit, minmax(250px, 1fr))" gap="3rem">
          <div>
            <h2 style={{ marginBottom: '1rem', color: 'var(--dark-text)' }}>Our Mission</h2>
            <p style={{ color: 'var(--slate-gray)', lineHeight: '1.6' }}>
              To streamline operations and drive efficiency for businesses in essential industries. We earn confidence through reliable, high-quality delivery and precise solutions.
            </p>
          </div>
          <div>
            <h2 style={{ marginBottom: '1rem', color: 'var(--dark-text)' }}>The "Blue Earl" Way</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {values.map((value) => (
                <div key={value.title} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <value.icon size={20} style={{ color: 'var(--cerulean-blue)', marginTop: '2px', flexShrink: 0 }} />
                  <div>
                    <strong>{value.title}:</strong> {value.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Grid>
      </Section>
    </>
  );
}
