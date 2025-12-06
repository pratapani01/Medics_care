import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-primary-blue text-white py-6 mt-12" role="contentinfo">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm">© 2025 Medics Care Hospital. All Rights Reserved.</p>
        <div className="social-links mt-2 space-x-3 text-lg">
            {/* Placeholder for social links (using Font Awesome) */}
            <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f hover:text-care-blue transition"></i></a>
            <a href="#" aria-label="Twitter"><i className="fab fa-twitter hover:text-care-blue transition"></i></a>
            <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in hover:text-care-blue transition"></i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;