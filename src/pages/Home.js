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
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        index = (index + 1) % INDUSTRY_LABELS.length;
        setSpinText(INDUSTRY_LABELS[index]);
        setIsFading(false);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <HeroSection
      title={{
        main: 'Modernizing',
        accent: (
          <span style={{ 
            opacity: isFading ? 0 : 1, 
            transition: 'opacity 0.5s ease-in-out',
            display: 'inline-block'
          }}>
            {spinText}
          </span>
        ),
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
