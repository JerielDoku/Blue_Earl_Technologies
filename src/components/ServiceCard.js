import React from 'react';

export default function ServiceCard({ 
  icon: Icon,
  title, 
  description, 
  features = [],
  featured = false,
  actionText = 'Get Started',
  actionHref = '#',
  onAction = null
}) {
  return (
    <div className={`service-card ${featured ? 'featured-card' : ''}`}>
      {Icon && (
        <Icon size={36} style={{ marginBottom: '1rem' }} />
      )}
      <h2>{title}</h2>
      <p style={{ marginBottom: '1rem' }}>{description}</p>
      
      {features.length > 0 && (
        <ul className="service-features">
          {features.map((feature, idx) => (
            <li key={idx}>
              <span style={{ 
                display: 'inline-block', 
                marginRight: '8px',
                color: featured ? 'var(--sky-tint)' : 'var(--cerulean-blue)'
              }}>
                ✓
              </span>
              {feature}
            </li>
          ))}
        </ul>
      )}
      
      <a 
        href={actionHref}
        className={featured ? 'btn-outline' : 'btn-main'} 
        style={{ display: 'block', textAlign: 'center', marginTop: '1.5rem' }}
        onClick={onAction}
      >
        {actionText}
      </a>
    </div>
  );
}
