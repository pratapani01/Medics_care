import React from 'react';
import { Link } from 'react-router-dom';

const quickCallouts = [
  // Existing Core Services
  { icon: 'fas fa-ambulance', text: '24x7 Emergency' },
  { icon: 'fas fa-procedures', text: 'ICU & Critical Care' },
  { icon: 'fas fa-notes-medical', text: 'Surgical & Diagnostic Support' },

  // Added Specialized OPDs/IPDs
  { icon: 'fas fa-child', text: 'Pediatrics (OPD & IPD)' },
  { icon: 'fas fa-baby', text: 'Obs & Gynae' },
  { icon: 'fas fa-bone', text: 'Orthopedics & Trauma' },
  
  // Added Diagnostics & Minimally Invasive
  { icon: 'fas fa-vials', text: 'Pathology & Lab Tests' }, // New
  { icon: 'fas fa-syringe', text: 'Minimally Invasive Surgery' }, // New

  // Added Support & General Medicine
  { icon: 'fas fa-stethoscope', text: 'General Medicine OPD' }, // New
  { icon: 'fas fa-heart-pulse', text: 'Cardiac & Neuro Consultation' }, // New
  { icon: 'fas fa-wheelchair', text: 'Physiotherapy & Rehab' }, // New

  // Added Essential Facilities
  { icon: 'fas fa-prescription-bottle-medical', text: 'On-site Pharmacy' }, // New
  { icon: 'fas fa-phone-square-alt', text: '24x7 Ambulance Facility' }, 

];

const Hero = () => {
  return (
    // Set up a Tailwind class to replicate your background image
    // You would add: bg-[url('/images/your-hero-image.jpg')] to the div below
    // and make sure to place your hero image in the public/images folder.
    <section className="relative h-screen flex items-center bg-primary-blue text-white overflow-hidden" 
             aria-label="Main hero" 
             style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/images/placeholder-hero.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
        {/* Placeholder image tag for the visualization of the hero section */}
        {/*  */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10 max-w-4xl">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-montserrat font-bold leading-tight mb-4 animate-fadeInUp">
          Excellence in Care, Right Here.
        </h1>

        <p className="text-lg mb-6 max-w-2xl text-gray-200">
          Your health is our mission. We combine advanced medical technology with compassionate, patient-centered care to serve our community 24/7.
        </p>

        {/* Hero Actions */}
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-8" role="region" aria-label="Primary actions">
          <Link to="/doctors" className="bg-medics-red text-white py-3 px-6 rounded-full font-bold text-lg hover:bg-red-700 transition duration-300 shadow-lg">
            Meet Our Specialists
          </Link>
          <a href="tel:+918700127481" className="bg-transparent border-2 border-white text-white py-3 px-6 rounded-full font-bold text-lg hover:bg-white hover:text-medics-red transition duration-300" aria-label="Emergency phone number">
            Emergency: +91 8700127481
          </a>
        </div>

        {/* Quick Callouts (Badges) */}
        <div className="flex flex-wrap gap-3 mt-4" role="region" aria-label="Key features">
          {quickCallouts.map((item, index) => (
            <div key={index} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm p-2 rounded-lg border border-white/20 text-white shadow-lg">
              <i className={`${item.icon} text-medics-red`} aria-hidden="true"></i>
              <small className="font-semibold text-sm">{item.text}</small>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;