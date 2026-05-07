import React from 'react';
import HeroSection from '../../components/HeroSection';
import ComparisonSection from '../../components/ComparisonSection';
import Section from '../../components/Section';
import FeatureGrid from '../../components/FeatureGrid';

export default function Healthcare() {
  const comparisonItems = [
    {
      before: '❌ Manual data entry and inefficient workflows',
      after: '✓ Automated workflows and seamless integration',
    },
    {
      before: '❌ Compliance vulnerabilities and audit risks',
      after: '✓ HIPAA-compliant systems and secure data handling',
    },
    {
      before: '❌ Fragmented systems and data silos',
      after: '✓ Unified patient records and provider connectivity',
    },
    {
      before: '❌ Limited patient engagement capabilities',
      after: '✓ Enhanced patient engagement and telehealth capabilities',
    },
  ];

  const features = [
    { title: 'EHR Integration', description: 'Seamless integration with existing electronic health record systems' },
    { title: 'Patient Portals', description: 'Secure patient portals for appointments, records, and communication' },
    { title: 'Claims Processing', description: 'Automated insurance claims management and billing' },
    { title: 'Compliance & Security', description: 'HIPAA, HITRUST, and SOC 2 compliance built-in' },
    { title: 'Telemedicine', description: 'Modern telehealth platforms for remote consultations' },
    { title: '24/7 Support', description: 'Dedicated support team familiar with healthcare operations' },
  ];

  return (
    <>
      <HeroSection
        title={{
          main: 'Advanced Solutions for',
          accent: 'Healthcare',
          suffix: '& Insurance',
        }}
        subtitle="Streamline patient care, ensure compliance, and drive operational efficiency with our healthcare-tailored software solutions."
        actions={[
          { label: 'Get Started', href: '/contact', variant: 'primary' },
          { label: 'Explore Services', href: '/services', variant: 'outline' },
        ]}
      />

      <ComparisonSection
        beforeTitle="Without Our Solutions"
        afterTitle="With Blue Earl"
        items={comparisonItems}
      />

      <Section title="Specialized Capabilities for Healthcare">
        <FeatureGrid items={features} />
      </Section>
    </>
  );
}
