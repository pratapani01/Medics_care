import React from 'react';

const PageHero = ({ title, subtitle }) => {
  return (
    // You can add a background color or image here for a more elegant look
    <section className="bg-care-blue/5 py-12 md:py-16 text-primary-blue shadow-inner" aria-hidden="false">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
        <h1 className="text-4xl font-montserrat font-bold mb-3">{title}</h1>
        <p className="text-lg text-secondary-gray leading-relaxed max-w-3xl mx-auto">{subtitle}</p>
      </div>
    </section>
  );
};

export default PageHero;