import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/style.css';
import object from '../assets/images/Object 1.png';
import dr_parthiv from '../assets/images/Dr.-Parthiv-Sanghvi-300x289-removebg-preview 1.png';
import dr_jagruti from '../assets/images/dr-jagruti-removebg-preview 1.png';
import call from '../assets/images/Group 188.png';
import location from '../assets/images/Group 178.png';
import time from '../assets/images/Group 177.png';
import Footer from './Footer';

function Home() {
  return (
    <div className='mt-32'>
      {/* hero banner */}
      <div className='hero'>
        <div className='hero-box'>
          <h1 className='text-center text-white hero-text'>Welcome To - Nurture & Suture</h1>
          <h1 className='text-center text-white hero-text'>Surgical & Paediatric Clinic</h1>
          <p className='hero-slogan text-center'>...where care comes first!!</p>
          <h1 className='hero-ISO text-center'>ISO 9001:2015 Certified Clinic</h1>
        </div>
      </div>

      {/* services */}
      <div className='p-20 services-home'>
        <p className='services-pretext font-extrabold'>Care you believe in</p>
        <h1 className='services-text'>Our Services</h1>
        <div className='grid md:grid-cols-4 grid-cols-1 gap-10'>
          <div className='services-home-card'>
            <h1 className='text-center text-2xl font-extrabold'>General, GI & Laparosocopic Surgery</h1>
          </div>
          <div className='services-home-card'>
            <h1 className='text-center text-2xl font-extrabold'>Varicose Veins Treatment</h1>
          </div>
          <div className='services-home-card'>
            <h1 className='text-center text-2xl font-extrabold'>Childhood Vaccination</h1>
          </div>
          <div className='services-home-card'>
            <h1 className='text-center text-2xl font-extrabold'>Paediatric Allery & Asthama</h1>
          </div>
        </div>
        <div className='pt-10 flex justify-center'>
          <Link to="/services"><p className='text-center button'>View More</p></Link>
        </div>
      </div>

      {/* why choose us? */}
      <div className='p-20 about-home'>
        <div className='grid md:grid-cols-2 grid-cols-1 gap-5'>
          <div>
            <img src={object} alt="" />
          </div>
          <div>
            <p className='about-home-pretext font-extrabold'>Welcome To Nurture & Suture</p>
            <h1 className='about-home-text'>Why Choose Us?</h1>
            <p className='about-home-description'>
              We offer a wide range of consultation services for general surgery, paediatric surgery, laparoscopic surgery, gynaecological surgery, ENT surgery, urology surgery etc.  Whether you are coming in for a consultation, dressing or vaccination, our team of highly skilled & experienced doctors will ensure that you receive the best possible care.
            </p>
          </div>
        </div>
      </div>

      {/* our doctors */}
      <div className='doctor-home p-20'>
        <p className='doctor-home-pretext font-extrabold'>Trusted Care</p>
        <h1 className='doctor-home-text'>Our Doctors</h1>
        <div className='grid md:grid-cols-2 grid-cols-1 md:gap-72 gap-10'>
          <div>
            <img src={dr_parthiv} alt="" className='doctor-home-image'/>
            <h1 className='doctor-home-name font-extrabold'>Dr. Parthiv Sanghvi</h1>
            <p className='doctor-home-title'>General, Gastrointestinal & Laparoscopic Surgeon</p>
            <div className='pt-5 flex justify-center'>
              <Link to="/aboutus"><p className='text-center button'>View More</p></Link>
            </div>
          </div>
          <div>
            <img src={dr_jagruti} alt="" className='doctor-home-image'/>
            <h1 className='doctor-home-name font-extrabold'>Dr. Jagruti Sanghvi</h1>
            <p className='doctor-home-title'>Newborn And Child Specialist</p>
            <div className='pt-5 flex justify-center'>
              <Link to="/aboutus"><p className='text-center button'>View More</p></Link>
            </div>
          </div>
        </div>
      </div>

      <div className='contact-home p-20'>
        <div className='contact-home-pretext font-extrabold'>Get In Touch</div>
        <h1 className='contact-home-text'>Contact Us</h1>
        <div className='grid md:grid-cols-3 grid-cols-1 gap-10'>
          <div className='contact-home-card'>
            <img src={call} alt="" />
            <h1 className='contact-home-title font-extrabold'>Clinic Number</h1>
            <p className='contact-home-description'>+022-26204142</p>
          </div>
          <div className='contact-home-card'>
            <img src={location} alt="" />
            <h1 className='contact-home-title font-extrabold'>Location</h1>
            <p className='contact-home-description'>406, DSquare,Dadabahi Road, Opp. CNMS, Vile Parle (West), 
            Mumbai - 56</p>
          </div>
          <div className='contact-home-card'>
            <img src={time} alt="" />
            <h1 className='contact-home-title font-extrabold'>Working Hours</h1>
            <p className='contact-home-description'>
            Mon - Sat: 10 am to 1:30 pm
            Evening by appointment
            <br/>
            Sunday closed
            </p>
          </div>
        </div>
      </div>

      <Footer/>
    </div>
  );
}

export default Home;