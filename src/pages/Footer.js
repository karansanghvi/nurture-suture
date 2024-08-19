import React from 'react'
import '../assets/styles/style.css';
import { IoMdCall } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { FaFacebook } from "react-icons/fa";

function Footer() {
  return (
    <div className='p-20 footer'>
      <div className='footer-box grid md:grid-cols-2 grid-cols-1'>
        <div>
            <h1 className='footer-text font-extrabold'>Nurture & Suture</h1>
            <p className='footer-title font-medium'>Surgical & Paediatric Clinic</p>
        </div>
        <div>
            <div className='footer-contact'>
                <IoMdCall className='footer-logo' />
                <p className='footer-description font-medium'><a href='tel:+022-26204142'>+022-26204142</a></p>
            </div>
            <br/>
            <div className='footer-contact'>
                <FaLocationDot className='footer-logo' />
                <p className='footer-description font-medium'>406, DSquare, Dadabahi Road, Opp. CNMS, Vile Parle (West), 
                Mumbai - 56</p>
            </div>
            <br/>
            <div className='footer-contact'>
                <FaFacebook className='footer-logo' />
                <p className='footer-description font-medium'>surgicalandpaediatricclinic</p>
            </div>
        </div>
      </div>
      <div className='pt-10 pb-10 grid md:grid-cols-2 grid-cols-1 md:gap-40 gap-10'>
        <div>
            <h1 className='footer-bigText'>About Us</h1>
            <p className='footer-smallText'>Whether you come for dressing or vaccination, our doctors will make sure that you receive the best possible care</p>
        </div>
        <div>
            <h1 className='footer-bigText'>Useful Links</h1>
            <ul>
                <li className='footer-smallText'>
                    <Link to="/">Home</Link>
                </li>
                <li className='footer-smallText'>
                    <Link to="/aboutus">About Us</Link>
                </li>
                <li className='footer-smallText'>
                    <Link to="/services">Services</Link>
                </li>
                <li className='footer-smallText'>
                    <Link to="/programs">Programs</Link>
                </li>
                <li className='footer-smallText'>
                    <Link to="/socialwork">Social Work</Link>
                </li>
                <li className='footer-smallText'>
                    <Link to="/contactus">Contact Us</Link>
                </li>
            </ul>
        </div>
      </div>

      <hr/>
      
      <h1 className='pt-10 footer-base'>Copyright 2024 | All Rights Reserved | Nurture And Suture Clinic</h1>
    </div>
  )
}

export default Footer
