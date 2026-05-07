import React from 'react';
import { Link } from 'react-router-dom';

export default function Button({ 
  children, 
  variant = 'primary',
  href = '#',
  onClick = null,
  fullWidth = false,
  style = {}
}) {
  const variantClasses = {
    primary: 'btn-main',
    secondary: 'btn-outline',
    cta: 'btn-cta',
  };

  const buttonStyle = {
    ...(fullWidth && { width: '100%' }),
    ...style,
  };

  if (href && href !== '#') {
    return (
      <Link to={href} className={variantClasses[variant]} style={buttonStyle}>
        {children}
      </Link>
    );
  }

  return (
    <button 
      className={variantClasses[variant]} 
      onClick={onClick}
      style={buttonStyle}
    >
      {children}
    </button>
  );
}
