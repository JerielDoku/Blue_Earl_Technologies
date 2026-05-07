import React from 'react';
import HeroSection from '../../components/HeroSection';
import ComparisonSection from '../../components/ComparisonSection';
import Section from '../../components/Section';
import FeatureGrid from '../../components/FeatureGrid';

export default function ProfessionalServices() {
  const comparisonItems = [
    {
      before: '❌ Time tracking and billing challenges',
      after: '✓ Automated time tracking and accurate billing',
    },
    {
      before: '❌ Project visibility and scope creep',
      after: '✓ Project management with scope control',
    },
    {
      before: '❌ Manual client communication',
      after: '✓ Integrated client portal and communication',
    },
    {
      before: '❌ Resource allocation inefficiencies',
      after: '✓ Optimized resource planning and utilization',
    },
  ];

  const features = [
    { title: 'Project Management', description: 'Comprehensive project tracking and delivery management' },
    { title: 'Time & Billing', description: 'Accurate time tracking and professional invoicing' },
    { title: 'Client Portals', description: 'Secure client access to projects and deliverables' },
    { title: 'Resource Planning', description: 'Optimize team allocation and utilization' },
    { title: 'Collaboration Tools', description: 'Enhanced team communication and document sharing' },
    { title: 'Business Intelligence', description: 'Analytics for profitability and project performance' },
  ];

  return (
    <>
      <HeroSection
        title={{
          main: 'Powerful Tools for',
          accent: 'Professional Services',
        }}
        subtitle="Enhance client relationships, streamline project delivery, and optimize resource utilization."
        actions={[
          { label: 'Get Started', href: '/contact', variant: 'primary' },
          { label: 'Explore Services', href: '/services', variant: 'outline' },
        ]}
      />

      <ComparisonSection
        beforeTitle="Manual Processes"
        afterTitle="With Blue Earl"
        items={comparisonItems}
      />

      <Section title="Professional Services Solutions">
        <FeatureGrid items={features} />
      </Section>
    </>
  );
}
