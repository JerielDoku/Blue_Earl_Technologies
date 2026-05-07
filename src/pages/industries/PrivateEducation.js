import React from 'react';
import HeroSection from '../../components/HeroSection';
import ComparisonSection from '../../components/ComparisonSection';
import Section from '../../components/Section';
import FeatureGrid from '../../components/FeatureGrid';

export default function PrivateEducation() {
  const comparisonItems = [
    {
      before: '❌ Manual grading and attendance tracking',
      after: '✓ Digital learning management systems',
    },
    {
      before: '❌ Limited student-parent engagement',
      after: '✓ Real-time parent-teacher communication',
    },
    {
      before: '❌ Dispersed educational resources',
      after: '✓ Centralized educational resources and content',
    },
    {
      before: '❌ Administrative overhead and inefficiency',
      after: '✓ Automated administrative processes',
    },
  ];

  const features = [
    { title: 'Learning Management', description: 'Comprehensive LMS for course management and student progress tracking' },
    { title: 'Virtual Classrooms', description: 'Secure live learning environments for distance and hybrid education' },
    { title: 'Parent Portals', description: 'Real-time access to grades, attendance, and school communications' },
    { title: 'Assessment Tools', description: 'Digital testing and comprehensive student evaluation systems' },
    { title: 'Student Information', description: 'Centralized student records and enrollment management' },
    { title: 'Staff Portal', description: 'Streamlined tools for teacher collaboration and resource sharing' },
  ];

  return (
    <>
      <HeroSection
        title={{
          main: 'Empowering',
          accent: 'Private Education',
          suffix: 'Through Technology',
        }}
        subtitle="Enhance learning experiences, streamline administration, and improve student outcomes with modern education technology."
        actions={[
          { label: 'Get Started', href: '/contact', variant: 'primary' },
          { label: 'Explore Services', href: '/services', variant: 'outline' },
        ]}
      />

      <ComparisonSection
        beforeTitle="Traditional Methods"
        afterTitle="With Blue Earl"
        items={comparisonItems}
      />

      <Section title="Education Technology Solutions">
        <FeatureGrid items={features} />
      </Section>
    </>
  );
}
