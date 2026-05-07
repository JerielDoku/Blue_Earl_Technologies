import React from 'react';

export default function FormInput({ 
  label, 
  name, 
  type = 'text', 
  value, 
  onChange, 
  required = false,
  options = null,
  placeholder = '',
  rows = null
}) {
  const inputStyle = {
    width: '100%',
    padding: '12px',
    border: '1px solid var(--light-gray)',
    borderRadius: '4px',
    fontFamily: 'inherit',
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '8px',
    fontWeight: 'bold',
    fontSize: '0.9rem',
    color: 'var(--dark-text)',
  };

  return (
    <div style={{ marginBottom: '1.5rem' }}>
      {label && (
        <label style={labelStyle}>
          {label}
          {required && <span style={{ color: '#E53E3E' }}>*</span>}
        </label>
      )}
      
      {type === 'textarea' ? (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          rows={rows || 4}
          placeholder={placeholder}
          required={required}
          style={inputStyle}
        />
      ) : options ? (
        <select
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          style={inputStyle}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          style={inputStyle}
        />
      )}
    </div>
  );
}
