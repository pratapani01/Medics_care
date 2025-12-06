import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Tailwind classes for the active link and default link
  const navLinkClass = ({ isActive }) => 
    `text-primary-blue hover:text-medics-red transition duration-200 ${
      isActive ? 'font-bold text-medics-red border-b-2 border-medics-red' : ''
    }`;

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md font-open-sans" role="banner">
      <div className="container mx-auto flex justify-between items-center py-4 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2" aria-label="Medics Care Hospital home">
          {/* Ensure you have an image at /public/images/logo1.jpg */}
          <img src="/images/logo1.jpg" alt="Medics Care Hospital logo" className="h-8 w-auto" />
          <div className="text-xl font-bold font-montserrat">
            <span className="text-medics-red">Medics</span>
            <span className="text-care-blue">Care</span>
            <span className="text-medics-red">Hospital</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-8" role="navigation" aria-label="Main navigation">
          <NavLink to="/" className={navLinkClass}>Home</NavLink>
          <NavLink to="/doctors" className={navLinkClass}>Doctors</NavLink>
          <NavLink to="/services" className={navLinkClass}>Services</NavLink>
          <NavLink to="/contact" className={navLinkClass}>Contact Us</NavLink>
        </nav>

        {/* CTA Button (Desktop) */}
        <Link 
          to="/contact" 
          className="hidden lg:block bg-care-blue text-white py-2 px-4 rounded-full hover:bg-medics-red transition duration-300 font-bold shadow-md"
        >
          Book an Appointment
        </Link>

        {/* Mobile Hamburger Button */}
        <button 
          className="lg:hidden text-primary-blue text-2xl" 
          onClick={() => setIsOpen(!isOpen)} 
          aria-label="Menu" 
          aria-expanded={isOpen}
        >
          <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`} aria-hidden="true"></i>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="lg:hidden bg-white shadow-lg pb-4" role="navigation" aria-label="Mobile navigation">
          <ul className="flex flex-col space-y-2 px-6">
            <li><NavLink to="/" className={`${navLinkClass({isActive: false})} block py-2`} onClick={() => setIsOpen(false)}>Home</NavLink></li>
            <li><NavLink to="/doctors" className={`${navLinkClass({isActive: false})} block py-2`} onClick={() => setIsOpen(false)}>Doctors</NavLink></li>
            <li><NavLink to="/services" className={`${navLinkClass({isActive: false})} block py-2`} onClick={() => setIsOpen(false)}>Services</NavLink></li>
            <li><NavLink to="/contact" className={`${navLinkClass({isActive: false})} block py-2`} onClick={() => setIsOpen(false)}>Contact Us</NavLink></li>
            {/* Mobile CTA */}
            <li className="pt-2">
                <Link to="/contact" className="block text-center bg-medics-red text-white py-2 rounded-full font-bold">
                    Book an Appointment
                </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;