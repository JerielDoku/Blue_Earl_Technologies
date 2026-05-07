import React from 'react';

export default function Card({ 
  children,
  variant = 'default',
  shadow = true,
  padding = '2rem',
  style = {}
}) {
  const variantStyles = {
    default: {
      background: 'var(--pure-white)',
      borderRadius: '6px',
    },
    light: {
      background: 'var(--off-white)',
      borderRadius: '8px',
    },
    accent: {
      background: 'var(--sky-tint)',
      borderRadius: '8px',
    },
    dark: {
      background: 'var(--navy-blue)',
      color: 'var(--pure-white)',
      borderRadius: '6px',
    },
  };

  return (
    <div
      style={{
        padding,
        boxShadow: shadow ? '0 2px 8px rgba(0,0,0,0.08)' : 'none',
        ...variantStyles[variant],
        ...style,
      }}
    >
      {children}
    </div>
  );
}
