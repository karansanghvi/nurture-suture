import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import ns_logo from '../assets/images/ns_logo.png';
import '../assets/styles/style.css';

function Layout() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<>
      <header>
        <img src={ns_logo} alt="Surgical and Pediatric Clinic in Mumbai" className="pr-5" />
        <nav ref={navRef}>
          <Link to='/' className="link">Home</Link>
          <Link to="/aboutus" className="link">About Us</Link>
          <Link to="/services" className="link">Services</Link>
          <Link to="/programs" className="link">Programs</Link>
          <Link to="/socialwork" className="link">Social Work</Link>
          <Link to="/contactus" className="link">Contact Us</Link>
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