import React from 'react';
import services from '../data/services';
import ServiceCard from '../components/servicecard';
import './services.css';

const Services = () => {
  return (
    <div className="services-page container fade-in" style={{ padding: '2rem 1rem' }}>
      <h1 className="section-title" style={{ marginBottom: '2rem' }}>Explore Our Services</h1>
      <div className="services-grid-3">
        {services.map(service => (
          <ServiceCard key={service.id} service={service} vertical={true} variant="compact" />
        ))}
      </div>
    </div>
  );
};

export default Services;