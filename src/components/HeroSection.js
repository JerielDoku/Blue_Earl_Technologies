import React from 'react';
import { Link } from 'react-router-dom';

export default function HeroSection({ 
  title, 
  subtitle, 
  primaryText, 
  accentColor = true,
  actions = [],
  showTrustBar = false,
  trustItems = []
}) {
  return (
    <section className="hero">
      <div className="hero-container">
        <h1 className="hero-title">
          {typeof title === 'string' ? (
            title
          ) : (
            <>
              {title.main} {accentColor && <span className="text-accent">{title.accent}</span>}
              {title.suffix && <br />}
              {title.suffix}
            </>
          )}
        </h1>
        {subtitle && <p className="hero-subtitle">{subtitle}</p>}
        
        {actions && actions.length > 0 && (
          <div className="hero-btns">
            {actions.map((action, idx) => (
              <Link
                key={idx}
                to={action.href}
                className={action.variant === 'outline' ? 'btn-outline' : 'btn-main'}
                {...(action.onClick && { onClick: action.onClick })}
              >
                {action.label}
              </Link>
            ))}
          </div>
        )}

        {showTrustBar && trustItems.length > 0 && (
          <div className="trust-bar">
            <p className="trust-label">Trusted by Leaders in</p>
            <div className="logo-track">
              {trustItems.map((item, idx) => (
                <div key={idx} className="logo-item">
                  <item.icon size={24} />
                  {item.label}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
