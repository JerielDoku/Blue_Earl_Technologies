import React from 'react';
import HeroSection from '../../components/HeroSection';
import ComparisonSection from '../../components/ComparisonSection';
import Section from '../../components/Section';
import FeatureGrid from '../../components/FeatureGrid';

export default function Logistics() {
  const comparisonItems = [
    {
      before: '❌ Lack of real-time shipment tracking',
      after: '✓ Real-time tracking and visibility across shipments',
    },
    {
      before: '❌ Inefficient route planning and fuel waste',
      after: '✓ AI-optimized routing for cost savings',
    },
    {
      before: '❌ Manual documentation and compliance issues',
      after: '✓ Automated compliance and documentation',
    },
    {
      before: '❌ Limited visibility into fleet performance',
      after: '✓ Comprehensive fleet management analytics',
    },
  ];

  const features = [
    { title: 'Fleet Management', description: 'Real-time tracking and performance monitoring for all vehicles' },
    { title: 'Route Optimization', description: 'AI-powered route planning for faster deliveries and cost reduction' },
    { title: 'Warehouse Management', description: 'Inventory and warehouse operations optimization' },
    { title: 'Shipment Tracking', description: 'End-to-end shipment visibility for customers and staff' },
    { title: 'Proof of Delivery', description: 'Digital delivery confirmation and documentation' },
    { title: 'Performance Analytics', description: 'Insights into KPIs, efficiency, and cost management' },
  ];

  return (
    <>
      <HeroSection
        title={{
          main: 'Connected Solutions for',
          accent: 'Logistics',
          suffix: '& Distribution',
        }}
        subtitle="Enhance visibility, optimize routes, and streamline operations for efficient delivery and supply chain management."
        actions={[
          { label: 'Get Started', href: '/contact', variant: 'primary' },
          { label: 'Explore Services', href: '/services', variant: 'outline' },
        ]}
      />

      <ComparisonSection
        beforeTitle="Inefficient Operations"
        afterTitle="With Blue Earl"
        items={comparisonItems}
      />

      <Section title="Logistics & Distribution Solutions">
        <FeatureGrid items={features} />
      </Section>
    </>
  );
}
