import React from 'react';
import HeroSection from '../../components/HeroSection';
import ComparisonSection from '../../components/ComparisonSection';
import Section from '../../components/Section';
import FeatureGrid from '../../components/FeatureGrid';

export default function Manufacturing() {
  const comparisonItems = [
    {
      before: '❌ Reactive maintenance and unexpected downtime',
      after: '✓ Predictive maintenance and minimal downtime',
    },
    {
      before: '❌ Limited production visibility and control',
      after: '✓ Real-time production monitoring and optimization',
    },
    {
      before: '❌ Manual quality inspection processes',
      after: '✓ Automated quality assurance systems',
    },
    {
      before: '❌ Disconnected production and business systems',
      after: '✓ Fully integrated manufacturing execution systems',
    },
  ];

  const features = [
    { title: 'MES Systems', description: 'Manufacturing Execution Systems for floor-to-office visibility' },
    { title: 'IoT Integration', description: 'Real-time equipment monitoring and predictive maintenance' },
    { title: 'Quality Control', description: 'Automated inspection and quality assurance processes' },
    { title: 'Production Planning', description: 'Optimize scheduling and resource allocation' },
    { title: 'Inventory Optimization', description: 'Smart inventory management and supply chain coordination' },
    { title: 'Analytics & Reporting', description: 'Data-driven insights for continuous improvement' },
  ];

  return (
    <>
      <HeroSection
        title={{
          main: 'Industry 4.0 Solutions for',
          accent: 'Manufacturing',
        }}
        subtitle="Accelerate production efficiency, reduce downtime, and optimize operations with smart manufacturing technology."
        actions={[
          { label: 'Get Started', href: '/contact', variant: 'primary' },
          { label: 'Explore Services', href: '/services', variant: 'outline' },
        ]}
      />

      <ComparisonSection
        beforeTitle="Legacy Systems"
        afterTitle="With Blue Earl"
        items={comparisonItems}
      />

      <Section title="Manufacturing Technology Solutions">
        <FeatureGrid items={features} />
      </Section>
    </>
  );
}
