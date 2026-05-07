import React from 'react';
import HeroSection from '../../components/HeroSection';
import ComparisonSection from '../../components/ComparisonSection';
import Section from '../../components/Section';
import FeatureGrid from '../../components/FeatureGrid';

export default function CoreServices() {
  const comparisonItems = [
    {
      before: '❌ Limited system monitoring and control',
      after: '✓ 24/7 monitoring and rapid response systems',
    },
    {
      before: '❌ Vulnerable to cyber threats',
      after: '✓ Military-grade security and threat detection',
    },
    {
      before: '❌ Manual incident response processes',
      after: '✓ Automated incident management',
    },
    {
      before: '❌ Lack of integrated data visibility',
      after: '✓ Integrated SCADA and control systems',
    },
  ];

  const features = [
    { title: 'SCADA Systems', description: 'Supervisory Control and Data Acquisition for critical infrastructure' },
    { title: 'Cybersecurity', description: 'Advanced threat detection and security protocols' },
    { title: '24/7 Monitoring', description: 'Continuous system monitoring and alerting' },
    { title: 'Disaster Recovery', description: 'Business continuity and disaster recovery planning' },
    { title: 'Integration Platform', description: 'Unified control and integration of legacy systems' },
    { title: 'Compliance & Audit', description: 'Regulatory compliance and audit trail management' },
  ];

  return (
    <>
      <HeroSection
        title={{
          main: 'Critical Infrastructure for',
          accent: 'Core Services',
        }}
        subtitle="Ensure reliability, security, and continuous operations for essential infrastructure and utilities."
        actions={[
          { label: 'Get Started', href: '/contact', variant: 'primary' },
          { label: 'Explore Services', href: '/services', variant: 'outline' },
        ]}
      />

      <ComparisonSection
        beforeTitle="Legacy Infrastructure"
        afterTitle="With Blue Earl"
        items={comparisonItems}
      />

      <Section title="Core Services & Infrastructure Solutions">
        <FeatureGrid items={features} />
      </Section>
    </>
  );
}
