import React from 'react';
import "../assets/styles/style.css";
import call from '../assets/images/Group 188.png';
import location from '../assets/images/Group 178.png';
import time from '../assets/images/Group 177.png';

function ContactUs() {
  return (
    <div className='mt-32'>
      <div className='contact-us'>
        <h1 className='contact-us-text'>Contact Us</h1>
      </div>

      <div className='grid md:grid-cols-2 grid-cols-1 p-4 md:p-20 gap-8 md:gap-20'>
        <div>
          <div className='contact-card'>
            <img src={call} alt="Call Icon" className='w-12 md:w-16'/>
            <h1 className='contact-title font-extrabold'>Clinic Number</h1>
            <a href="tel:+022-26204142" className='contact-description'>+022-26204142</a>
          </div>
          <br/>
          <div className='contact-card'>
            <img src={location} alt="Location Icon" className='w-12 md:w-16'/>
            <h1 className='contact-title font-extrabold'>Location</h1>
            <p className='contact-description'>406, DSquare,Dadabahi Road, Opp. CNMS, Vile Parle (West), 
            Mumbai - 56</p>
          </div>
          <br/>
          <div className='contact-card'>
            <img src={time} alt="Time Icon" className='w-12 md:w-16'/>
            <h1 className='contact-title font-extrabold'>Working Hours</h1>
            <p className='contact-description'>
            Mon - Sat: 10 am to 1:30 pm
            Evening by appointment
            <br/>
            Sunday closed
            </p>
          </div>
        </div>
        <div className='flex justify-center items-center'>
          <iframe 
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7540.080641205343!2d72.840909!3d19.105887!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c912b8d2087f%3A0x40caf85baa88a862!2sPaediatrician%20DR.%20JAGRUTI%20PARTHIV%20SANGHVI!5e0!3m2!1sen!2sin!4v1724163997072!5m2!1sen!2sin" 
            style={{ border: "0" }}
            className='google-map'
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </div>
      <br/>
    </div>
  )
}

export default ContactUs;
