import React from 'react';
import HeroSection from '../../components/HeroSection';
import ComparisonSection from '../../components/ComparisonSection';
import Section from '../../components/Section';
import FeatureGrid from '../../components/FeatureGrid';

export default function Food() {
  const comparisonItems = [
    {
      before: '❌ Manual inventory and stock tracking',
      after: '✓ Real-time inventory management systems',
    },
    {
      before: '❌ Compliance documentation challenges',
      after: '✓ Automated compliance tracking and reporting',
    },
    {
      before: '❌ Supply chain visibility gaps',
      after: '✓ End-to-end supply chain visibility',
    },
    {
      before: '❌ Limited traceability for food safety',
      after: '✓ Complete traceability from farm to table',
    },
  ];

  const features = [
    { title: 'Inventory Systems', description: 'Real-time tracking of inventory levels and stock movements' },
    { title: 'Quality Management', description: 'Comprehensive quality control and assurance documentation' },
    { title: 'Supply Chain', description: 'Visibility and optimization of supply chain operations' },
    { title: 'Traceability', description: 'Complete product traceability for food safety compliance' },
    { title: 'Farm Management', description: 'Tools for crop planning, monitoring, and yield optimization' },
    { title: 'Compliance Reporting', description: 'Automated regulatory compliance and audit preparation' },
  ];

  return (
    <>
      <HeroSection
        title={{
          main: 'Modern Solutions for',
          accent: 'Food & Agriculture',
        }}
        subtitle="Optimize supply chains, ensure quality compliance, and drive sustainable growth in food production and distribution."
        actions={[
          { label: 'Get Started', href: '/contact', variant: 'primary' },
          { label: 'Explore Services', href: '/services', variant: 'outline' },
        ]}
      />

      <ComparisonSection
        beforeTitle="Traditional Operations"
        afterTitle="With Blue Earl"
        items={comparisonItems}
      />

      <Section title="Food & Agriculture Solutions">
        <FeatureGrid items={features} />
      </Section>
    </>
  );
}
