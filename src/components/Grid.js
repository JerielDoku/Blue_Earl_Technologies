import React from 'react';

export default function Grid({ 
  children,
  columns = 'repeat(auto-fit, minmax(300px, 1fr))',
  gap = '2rem',
  style = {}
}) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: columns,
        gap,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
