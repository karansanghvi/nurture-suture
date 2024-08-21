import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom"; // Import NavLink instead of Link
import ns_logo from '../assets/images/ns_logo.png';
import '../assets/styles/style.css';

function Layout() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	return (
		<>
      <header>
        <img src={ns_logo} alt="" className="pr-5" />
        <nav ref={navRef}>
          <NavLink to='/' className="link" activeClassName="active-link">Home</NavLink>
          <NavLink to="/aboutus" className="link" activeClassName="active-link">About Us</NavLink>
          <NavLink to="/services" className="link" activeClassName="active-link">Services</NavLink>
          <NavLink to="/programs" className="link" activeClassName="active-link">Programs</NavLink>
          <NavLink to="/socialwork" className="link" activeClassName="active-link">Social Work</NavLink>
          <NavLink to="/contactus" className="link" activeClassName="active-link">Contact Us</NavLink>
          <button
            className="nav-btn nav-close-btn"
            onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <button
          className="nav-btn"
          onClick={showNavbar}>
          <FaBars />
        </button>
      </header>
    </>
	);
}

export default Layout;
