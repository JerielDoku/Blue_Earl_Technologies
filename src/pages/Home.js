import React, { useState, useEffect } from 'react';
import { Stethoscope, Factory, GraduationCap, Truck, Building2 } from 'lucide-react';
import HeroSection from '../components/HeroSection';

const TRUST_ITEMS = [
  { icon: Stethoscope, label: 'Healthcare' },
  { icon: Factory, label: 'Manufacturing' },
  { icon: GraduationCap, label: 'Education' },
  { icon: Truck, label: 'Logistics' },
  { icon: Building2, label: 'Real Estate' },
];

const INDUSTRY_LABELS = TRUST_ITEMS.map(item => item.label);

export default function Home() {
  const [spinText, setSpinText] = useState(INDUSTRY_LABELS[0]);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % INDUSTRY_LABELS.length;
      setSpinText(INDUSTRY_LABELS[index]);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <HeroSection
      title={{
        main: 'Modernizing',
        accent: spinText,
        suffix: 'for the Next Generation.'
      }}
      subtitle="We design, build, and implement cutting-edge software strategies that streamline operations for essential industries."
      actions={[
        { label: 'Get Started', href: '/contact', variant: 'primary' },
        { label: 'Our Services', href: '/services', variant: 'outline' },
      ]}
      showTrustBar={true}
      trustItems={TRUST_ITEMS}
    />
  );
}
