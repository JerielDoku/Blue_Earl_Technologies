import React, { useState, useEffect } from 'react';
import { Stethoscope, Factory, GraduationCap, Truck, Building2 } from 'lucide-react';
import HeroSection from '../components/HeroSection';

const industries = ['Healthcare', 'Manufacturing', 'Education', 'Logistics', 'Real Estate'];

export default function Home() {
  const [spinText, setSpinText] = useState('Healthcare');
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setIsFading(true);
      // Synchronize with the 500ms transition found in the reference index.js
      setTimeout(() => {
        index = (index + 1) % industries.length;
        setSpinText(industries[index]);
        setIsFading(false);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const trustItems = [
    { icon: Stethoscope, label: 'Healthcare' },
    { icon: Factory, label: 'Manufacturing' },
    { icon: GraduationCap, label: 'Education' },
    { icon: Truck, label: 'Logistics' },
    { icon: Building2, label: 'Real Estate' },
  ];

  return (
    <HeroSection
      title={{
        main: 'Modernizing',
        accent: (
          <span style={{ opacity: isFading ? 0 : 1, transition: 'opacity 0.5s ease-in-out' }}>
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
      trustItems={trustItems}
    />
  );
}
