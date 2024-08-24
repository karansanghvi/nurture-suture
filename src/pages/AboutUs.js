import React from 'react';
import "../assets/styles/style.css";
import dr_parthiv from "../assets/images/image 1.png";
import dr_jagruti from "../assets/images/image 2.png";
import { IoMdCall, IoMdMail } from 'react-icons/io';
import Layout from './Layout';
import Footer from './Footer';
import GoToTopButton from '../components/GoToTopButton';
import { Helmet } from 'react-helmet';

function AboutUs() {
  return (
    <>
    <div>
      <Helmet>
        <meta 
          name='keywords'
          content='Dr. Parthiv Sanghvi Laparoscopic Surgeon, Dr. Parthiv Sanghvi General Surgeon Mumbai, Dr. Jagruti Sanghvi Pediatrician Mumbai, Dr. Jagruti Sanghvi Child Specialist, Experienced Pediatric Surgeon in Mumbai, Gastrointestinal Surgery Specialist Mumbai, Best Newborn and Child Specialist Mumbai, Top Pediatric Doctor in Mumbai'
        />
      </Helmet>
    </div>
    <Layout/>
    <div>
      <div className='about-us'>
        <h1 className='about-us-text'>About Us</h1>
      </div>
      <p className='about-us-description p-20'>
        The clinic is run by a team of specialists including Dr. Parthiv Sanghvi, a prominent laparoscopic surgeon, and Dr. Jagruti Sanghvi, a paediatrician. 
        The facility is fully equipped with the most up-to-date technology and resources.
        Nurture & Suture Clinic offer a wide range of consultation services for general surgery, paediatric surgery, laparoscopic surgery, gynaecological surgery, ENT surgery, urology surgery etc. 
        Whether you are coming in for a consultation, dressing or vaccination, our team of highly skilled & experienced doctors will ensure that you receive the best possible care.
      </p>

      {/* meet our doctors */}
        <h1 className='meet-our-doctor'>Meet Our Doctors</h1>
        <div className='md:pl-20 pl-10 md:pr-20 pr-10 pt-10 pb-10'>
          {/* dr parthiv sanghvi */}
          <div className='grid md:grid-cols-2 grid-cols-1'>
            <div>
              <img src={dr_parthiv} alt="General Surgery Consultation in Mumbai" />
            </div>
            <div>
              <h1 className='doctor-name'>Dr. Parthiv Sanghvi</h1>
              <p className='doctor-title'>General, Gastrointestinal & Laparoscopic Surgeon</p>
              <p className='doctor-description'>
                Dr. Parthiv Sanghvi is an eminent General, Gastrointestinal and Laparoscopic Surgeon attached to tertiary hospitals which includes: Nanavati Super Speciality Hospital, BSES MG Hospital, Advanced Multispeciality Hospital, Criticare Hospital in Mumbai with two decades of experience. He is a leader with a vision, a compassionate doctor and a dedicated Surgeon with great finesse in his work.
              </p>
              <div className='logo-box'>
                <IoMdCall className='doctor-symbol' />
                <a href="tel:+91-9820304284">+91-9820304284</a>
              </div>
              <br/>
              <div className='logo-box'>
                <IoMdMail className='doctor-symbol' />
                <a href="mailto:dr_parthiv@rediffmail.com">dr_parthiv@rediffmail.com</a>
              </div>
            </div>
          </div>
          <h1 className='pt-10 specialist-text pb-5'>Specialist In:</h1>
          <div className='grid md:grid-cols-3 grid-cols-1 gap-5'>
            <div className='specialist-card'>
              <h1 className='specialist-card-text'>Staper Surgey For Piles</h1>
            </div>
            <div className='specialist-card'>
              <h1 className='specialist-card-text'>Laparoscopic Appendicectomy</h1>
            </div>
            <div className='specialist-card'>
              <h1 className='specialist-card-text'>Laparoscopic Hernia</h1>
            </div>
          </div>
          <div className='grid md:grid-cols-3 grid-cols-1 gap-5 pt-10'>
            <div className='specialist-card'>
              <h1 className='specialist-card-text'>Laparoscopic Splenectomy</h1>
            </div>
            <div className='specialist-card'>
              <h1 className='specialist-card-text'>Surgery of GERD</h1>
            </div>
            <div className='specialist-card'>
              <h1 className='specialist-card-text'>Complex Gastro</h1>
            </div>
          </div>
          <div className='pt-10 center-box'>
            <div className='specialist-card'>
              <h1 className='specialist-card-text'>Complex Gastro</h1>
            </div>
          </div>

          <br/> <br/>

          {/* dr jagruti sanghvi */}
          <div className='grid md:grid-cols-2 grid-cols-1 gap-5'>
            <div>
              <h1 className='doctor-name'>Dr. Jagruti Sanghvi</h1>
              <p className='doctor-title'>Newborn And Child Specialist</p>
              <p className='doctor-description'>
                Dr. Jagruti Sanghvi is a leading Newborn & Child Specialist in Mumbai with 2 decades of wholesome experience. She is attached to esteemed tertiary hospitals in Mumbai which includes: Nanavati Super Speciality Hospital, Advanced Multispeciality Hospital and numerous Medical Associations. A multifaceted personality, she is an acclaimed orator, a clinician par excellence and a compassionate doctor with Childcare and Adolescent Health as her passion.
              </p>
              <div className='logo-box'>
                <IoMdCall className='doctor-symbol' />
                <a href="tel:+91-9819313303">+91-9819313303</a>
              </div>
              <br/>
              <div className='logo-box'>
                <IoMdMail className='doctor-symbol' />
                <a href="mailto:dr_jagruti@hotmail.com">dr_jagruti@hotmail.com</a>
              </div>
            </div>
            <div>
              <img src={dr_jagruti} alt="Paediatrician in Mumbai" />
            </div>
          </div>
          <h1 className='pt-10 specialist-text pb-5'>Specialist In:</h1>
          <div className='grid md:grid-cols-3 grid-cols-1 gap-5'>
            <div className='specialist-card'>
              <h1 className='specialist-card-text'>Adolescent Health</h1>
            </div>
            <div className='specialist-card'>
              <h1 className='specialist-card-text'>Lactation Counselling</h1>
            </div>
            <div className='specialist-card'>
              <h1 className='specialist-card-text'>Immunization</h1>
            </div>
          </div>
          <div className='grid md:grid-cols-2 grid-cols-1 gap-5 pt-10 center-box'>
            <div className='specialist-card'>
              <h1 className='specialist-card-text'>Paediatric Allergy & Asthma</h1>
            </div>
            <div className='specialist-card'>
              <h1 className='specialist-card-text'>Childhood Nutrition</h1>
            </div>
          </div>
        </div>
      <br></br>
    </div>
    <Footer/>
    <GoToTopButton/>
    </>
  )
}

export default AboutUs
