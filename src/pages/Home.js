import React from 'react';
import { Link } from 'react-router-dom';
import Layout from './Layout';
import Footer from './Footer';
import '../assets/styles/style.css';
import object from '../assets/images/Object 1.png';
import dr_parthiv from '../assets/images/Dr.-Parthiv-Sanghvi-300x289-removebg-preview 1.png';
import dr_jagruti from '../assets/images/dr-jagruti-removebg-preview 1.png';
import call from '../assets/images/Group 188.png';
import location from '../assets/images/Group 178.png';
import time from '../assets/images/Group 177.png';
import GoToTopButton from '../components/GoToTopButton';
import { Helmet } from 'react-helmet';
import ChatBotIcon from '../components/ChatBotIcon';

function Home() {
  return (
    <>
    <div>
      <Helmet>
        <meta 
          name="description"
          content="Nurture and Suture Clinic in Vile Parle Mumbai offers medical services related to Surgery and Paediatrics by eminent doctors like Dr. Parthiv Sanghvi and Dr. Jagruti Sanghvi"
        />
        <meta 
          name="keywords"
          content="Nurture and Suture Clinic, Surgical and Pediatric Clinic in Mumbai, Best Pediatric Clinic in Mumbai, Laparoscopic Surgeon in Mumbai, Paediatrician in Mumbai, General Surgery Consultation in Mumbai, Best clinic for general surgery and pediatric care in Mumbai, Top-rated laparoscopic surgeon near Nanavati Hospital Mumbai, Comprehensive child healthcare services in Vile Parle Mumbai, Pediatric allergy and asthma treatment clinic Mumbai, Leading surgeon for thyroid and hernia surgery in Mumbai, Where to get adolescent vaccination in Mumbai, Best pediatric vaccination center in Vile Parle"
        />
      </Helmet>
    </div>
    <Layout/>
    <div>
      {/* hero banner */}
      <div className='hero'>
        <div className='hero-box'>
          <h1 className='text-center text-white hero-text'>Nurture & Suture</h1>
          <h1 className='text-center text-white hero-text'>Surgical & Paediatric Clinic</h1>
          <p className='hero-slogan text-center'>...where care comes first!!</p>
          <h1 className='hero-ISO text-center'>ISO 9001:2015 Certified Clinic</h1>
        </div>
      </div>

      {/* services */}
      <div className='p-20 services-home'>
        <h1 className='service-home-text'>Our Services</h1>
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
            <h1 className='text-center text-2xl font-extrabold'>Lactation Counselling & Nutrition</h1>
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
              We offer a wide range of consultation services for general paediatrics and general surgery, paediatric surgery, GI surgery and laparoscopic surgery.
              Whether you are coming in for a consultation, dressing or vaccination, our team of highly skilled & experienced doctors will ensure that you receive the best possible care.
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
            <div className='doctor-box'>
              <img src={dr_parthiv} alt="" className='doctor-home-image'/>
            </div>
            <h1 className='doctor-home-name font-extrabold'>Dr. Parthiv Sanghvi</h1>
            <p className='doctor-home-title'>General, Gastrointestinal & Laparoscopic Surgeon</p>
            <div className='pt-5 flex justify-center'>
              <Link to="/aboutus"><p className='text-center button'>View More</p></Link>
            </div>
          </div>
          <div>
            <div className='doctor-box'>
              <img src={dr_jagruti} alt="" className='doctor-home-image'/>
            </div>
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
            <a href="tel:+022-26204142" className='contact-home-description'>+022-26204142</a>
          </div>
          <div className='contact-home-card'>
            <img src={location} alt="" />
            <h1 className='contact-home-title font-extrabold'>Location</h1>
            <p className='contact-home-description'>406, DSquare, Dadabhai Road, Opp. CNMS School, Vile Parle (West), 
            Mumbai - 56</p>
          </div>
          <div className='contact-home-card'>
            <img src={time} alt="" />
            <h1 className='contact-home-title font-extrabold'>Working Hours</h1>
            <p className='contact-home-description'>
            Mon - Sat: 10:30 am to 1:30 pm
            Evening by appointment
            <br/>
            Sunday closed
            </p>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    <GoToTopButton/>
    <ChatBotIcon/>
    </>
  );
}

export default Home;
