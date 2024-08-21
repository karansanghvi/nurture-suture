import React, { useState } from 'react';
import servicesData from '../data/servicesData.json';
import Layout from './Layout';
import "../assets/styles/style.css";
import Footer from './Footer';
import GoToTopButton from '../components/GoToTopButton';

function Services() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedService, setSelectedService] = useState(null);

  const filteredServices = servicesData.filter(service => {
    if (selectedCategory === 'All') return true;
    return service.offeredBy === selectedCategory;
  });

  const openModal = (service) => {
    setSelectedService(service);
  };

  const closeModal = () => {
    setSelectedService(null);
  }

  return (
    <>
    <Layout/>
    <div>
      <div className='services'>
        <h1 className='services-text'>Services</h1>
      </div>
      <div className='p-20'>
        <div className='category-box'>
          <button
            onClick={() => setSelectedCategory('All')}
            className={`category-button ${selectedCategory === 'All' ? 'selected' : ''}`}
          >
            All
          </button>
          <button
            onClick={() => setSelectedCategory('Dr. Parthiv Sanghvi')}
            className={`category-button ${selectedCategory === 'Dr. Parthiv Sanghvi' ? 'selected' : ''}`}
          >
            Dr. Parthiv Sanghvi
          </button>
          <button
            onClick={() => setSelectedCategory('Dr. Jagruti Sanghvi')}
            className={`category-button ${selectedCategory === 'Dr. Jagruti Sanghvi' ? 'selected' : ''}`}
          >
            Dr. Jagruti Sanghvi
          </button>
        </div>

        <div className='grid grid-cols-3 gap-4 pt-20'>
          {filteredServices.map(service => (
            <div key={service.id} className='service-card'>
              <h2 className='service-card-text'>{service.name}</h2>
              <div className='service-card-button'>
                <button onClick={() => openModal(service)}>Know More</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedService && (
        <div className='modal-overlay'>
          <div className='modal'>
            <h2>{selectedService.name}</h2>
            {typeof selectedService.description === 'string' ? (
              <p>{selectedService.description}</p>
            ) : (
              <div className='pb-5'>
                <p className='text-justify'>{selectedService.description.text}</p>
                <ul>
                  {selectedService.description.points.map((point, index) => (
                    <li key={index}>{index + 1}. {point}</li>
                  ))}
                </ul>
              </div>
            )}
            <div className='flex justify-center'>
              <button onClick={closeModal}>Close</button>
            </div>
          </div>
        </div>
      )}
      <br />
    </div>
    <Footer/>
    <GoToTopButton/>
    </>
  );
}

export default Services;
