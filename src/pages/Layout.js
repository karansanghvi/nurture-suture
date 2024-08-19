import React, { useState } from 'react';
import { Outlet, Link } from "react-router-dom";
import '../App.css';
import '../assets/styles/style.css';
import logo from '../assets/images/ns_logo.png';

function Layout() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="bg-white border-gray-200 shadow-lg fixed w-full top-0 z-10">
        <div className="flex flex-wrap items-center justify-between p-4 ml-4 mr-4">
          <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={logo} className="md:h-30 h-20 pr-5" alt="Nurture And Suture Logo" />
            <h1 className='navbar-text'>Nurture & Suture</h1>
          </a>
          
          {/* hamburger */}
          <button
            onClick={toggleMenu}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-black rounded-lg hover:bg-backgroundColor focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-black dark:hover:bg-backgroundColor dark:focus:ring-black md:hidden"
            aria-controls="navbar-cta"
            aria-expanded={isMenuOpen ? "true" : "false"}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </button>

          {/* items for mobile view */}
          <div className={`items-center justify-between w-full md:hidden ${isMenuOpen ? 'block' : 'hidden'}`} id="navbar-cta">
            <ul className="flex flex-col font-medium p-4 mt-4 border  rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white text-xl">
              <li>
                <Link to="/" className="block py-2 px-3 md:p-0  rounded  md:hover:bg-transparent  text-black md:dark:hover:bg-transparent font-semibold"aria-current="page">Home</Link>
              </li>
              <li>
                <Link to="/aboutus" className="block py-2 px-3 md:p-0  rounded  md:hover:bg-transparent  text-black md:dark:hover:bg-transparent font-semibold"aria-current="page">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="block py-2 px-3 md:p-0  rounded  md:hover:bg-transparent  text-black md:dark:hover:bg-transparent font-semibold"aria-current="page">Services</Link>
              </li>
              <li>
                <a href="/programs" className="block py-2 px-3 md:p-0  rounded  md:hover:bg-transparent  text-black md:dark:hover:bg-transparent font-semibold">Programs</a>
              </li>
              <li>
                <a href="/socialwork" className="block py-2 px-3 md:p-0  rounded  md:hover:bg-transparent  text-black md:dark:hover:bg-transparent font-semibold">Social Work</a>
              </li>
              <li>
                <a href="/contactus" className="block py-2 px-3 md:p-0  rounded  md:hover:bg-transparent  text-black md:dark:hover:bg-transparent font-semibold">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* items for desktop view */}
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
            <ul className="flex flex-col md:flex-row font-xl p-4 md:p-0 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:border-0 md:bg-white text-lg">
              <li>
                <Link to="/" className="block py-2 px-3 md:p-0  rounded  md:hover:bg-transparent  text-black md:dark:hover:bg-transparent font-semibold"aria-current="page">Home</Link>
              </li>
              <li>
                <Link to="/aboutus" className="block py-2 px-3 md:p-0  rounded  md:hover:bg-transparent  text-black md:dark:hover:bg-transparent font-semibold"aria-current="page">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="block py-2 px-3 md:p-0  rounded  md:hover:bg-transparent  text-black md:dark:hover:bg-transparent font-semibold"aria-current="page">Services</Link>
              </li>
              <li>
                <a href="/programs" className="block py-2 px-3 md:p-0  rounded  md:hover:bg-transparent  text-black md:dark:hover:bg-transparent font-semibold">Programs</a>
              </li>
              <li>
                <a href="/socialwork" className="block py-2 px-3 md:p-0  rounded  md:hover:bg-transparent  text-black md:dark:hover:bg-transparent font-semibold">Social Work</a>
              </li>
              <li>
                <a href="/contactus" className="block py-2 px-3 md:p-0  rounded  md:hover:bg-transparent  text-black md:dark:hover:bg-transparent font-semibold">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default Layout;