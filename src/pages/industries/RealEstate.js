import React from 'react';
import HeroSection from '../../components/HeroSection';
import ComparisonSection from '../../components/ComparisonSection';
import Section from '../../components/Section';
import FeatureGrid from '../../components/FeatureGrid';

export default function RealEstate() {
  const comparisonItems = [
    {
      before: '❌ Paper-based maintenance and lease management',
      after: '✓ Digital property and lease management systems',
    },
    {
      before: '❌ Slow tenant communication processes',
      after: '✓ Real-time tenant communication platforms',
    },
    {
      before: '❌ Fragmented financial tracking and reporting',
      after: '✓ Integrated financial dashboards and reporting',
    },
    {
      before: '❌ Unable to optimize occupancy rates',
      after: '✓ Predictive analytics for occupancy optimization',
    },
  ];

  const features = [
    { title: 'Property Portals', description: 'Websites and portals for property listings and inquiries' },
    { title: 'Tenant Portals', description: 'Self-service portals for payments, maintenance requests, and documents' },
    { title: 'Lease Management', description: 'Digital lease creation, signing, and renewal tracking' },
    { title: 'Maintenance Tracking', description: 'Streamlined maintenance request and work order management' },
    { title: 'Financial Reporting', description: 'Real-time income tracking and expense analysis' },
    { title: 'Occupancy Analytics', description: 'Data-driven insights for market optimization' },
  ];

  return (
    <>
      <HeroSection
        title={{
          main: 'Digital Innovation for',
          accent: 'Real Estate',
          suffix: '& Property',
        }}
        subtitle="Transform property management, enhance tenant experience, and optimize operations with intelligent software solutions."
        actions={[
          { label: 'Get Started', href: '/contact', variant: 'primary' },
          { label: 'Explore Services', href: '/services', variant: 'outline' },
        ]}
      />

      <ComparisonSection
        beforeTitle="Outdated Approach"
        afterTitle="With Blue Earl"
        items={comparisonItems}
      />

      <Section title="Real Estate Technology Solutions">
        <FeatureGrid items={features} />
      </Section>
    </>
  );
}
