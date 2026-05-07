import React from 'react';

export default function ComparisonSection({ 
  beforeTitle = 'Before',
  afterTitle = 'After',
  items = []
}) {
  return (
    <section className="comparison-section">
      <div className="comparison-card card-before">
        <h3>{beforeTitle}</h3>
        <ul className="comparison-list">
          {items.map((item, idx) => (
            <li key={idx}>
              {item.before || item}
            </li>
          ))}
        </ul>
      </div>
      <div className="comparison-card card-after">
        <h3>{afterTitle}</h3>
        <ul className="comparison-list">
          {items.map((item, idx) => (
            <li key={idx}>
              {item.after || item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
