import React from 'react';
import { Link } from 'react-router-dom';
import { Code2, TrendingUp, Server } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import ServiceCard from '../components/ServiceCard';
import Grid from '../components/Grid';

export default function Services() {
  const services = [
    {
      icon: Code2,
      title: 'Custom Development',
      description: 'Bespoke software solutions tailored to your specific operational needs.',
      features: ['Web & Mobile Apps', 'System Integration'],
      featured: false,
    },
    {
      icon: TrendingUp,
      title: 'Digital Transformation',
      description: 'Modernize legacy systems and implement future-proof tech stacks.',
      features: ['Cloud Migration', 'Process Automation'],
      featured: true,
    },
    {
      icon: Server,
      title: 'Managed IT Services',
      description: 'Reliable support and infrastructure management for essential industries.',
      features: ['24/7 Monitoring', 'Cybersecurity'],
      featured: false,
    },
  ];

  return (
    <>
      <HeroSection
        title="Our Services"
        subtitle="Cutting-edge software and technology strategies."
        accentColor={false}
      />

      <section style={{ padding: '4rem 5%' }}>
        <Grid columns="repeat(auto-fit, minmax(300px, 1fr))" gap="2rem">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              features={service.features}
              featured={service.featured}
              actionHref="/contact"
            />
          ))}
        </Grid>
      </section>
    </>
  );
}
