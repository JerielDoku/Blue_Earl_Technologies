import React, { useState } from 'react';
import FormInput from '../components/FormInput';
import ContactInfo from '../components/ContactInfo';
import Button from '../components/Button';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    industry: 'healthcare',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will contact you soon.');
    setFormData({ firstName: '', lastName: '', industry: 'healthcare', message: '' });
  };

  const industryOptions = [
    { value: 'healthcare', label: 'Healthcare & Insurance' },
    { value: 'manufacturing', label: 'Manufacturing' },
    { value: 'education', label: 'Private Education' },
    { value: 'logistics', label: 'Logistics & Distribution' },
    { value: 'realestate', label: 'Real Estate' },
  ];

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', padding: '120px 5% 80px' }}>
      <ContactInfo
        heading="Let's Build the Future Together."
        description="Have a project in mind or want to learn more about our industry solutions? Our architects are ready to help."
        email="hello@blueearl.tech"
        location="Global Operations"
      />

      <form
        onSubmit={handleSubmit}
        style={{
          background: 'var(--pure-white)',
          padding: '3rem',
          borderRadius: '8px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
        }}
      >
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          <FormInput
            label="First Name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <FormInput
            label="Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>

        <FormInput
          label="Industry"
          name="industry"
          value={formData.industry}
          onChange={handleChange}
          options={industryOptions}
        />

        <FormInput
          label="Message"
          name="message"
          type="textarea"
          value={formData.message}
          onChange={handleChange}
          placeholder="How can we help?"
          rows={4}
        />

        <Button variant="primary" fullWidth={true}>
          Send Inquiry
        </Button>
      </form>

      <style>{`
        @media (max-width: 768px) {
          div[style*="display: grid"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
