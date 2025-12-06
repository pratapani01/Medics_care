import React from 'react';

const highlights = [
  { icon: 'fas fa-user-md', title: 'Experienced Doctors', description: 'Our team comprises senior consultants with years of experience in critical care, surgery, medicine and paediatrics.' },
  { icon: 'fas fa-ambulance', title: '24/7 Emergency', description: 'Dedicated trauma and emergency services with a skilled team available around the clock for immediate care.' },
  { icon: 'fas fa-award', title: 'Advanced Technology', description: 'Modern diagnostic imaging, operation theaters and monitoring systems provide accurate diagnosis and safer outcomes.' },
  { icon: 'fas fa-heartbeat', title: 'Patient-First Approach', description: 'We build personalized treatment plans and provide clear communication so patients and families are involved in care decisions.' },
];

const WhyChooseUs = () => {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 bg-white" aria-labelledby="why-choose-us">
      <h2 id="why-choose-us" className="text-3xl font-montserrat font-bold text-center mb-10 text-primary-blue">
        Why Choose Us?
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {highlights.map((item, index) => (
          <article key={index} className="text-center p-6 border rounded-xl shadow-sm hover:shadow-lg transition duration-300">
            <i className={`${item.icon} text-5xl text-medics-red mb-4`} aria-hidden="true"></i>
            <h3 className="text-xl font-montserrat font-semibold mb-2">{item.title}</h3>
            <p className="text-secondary-gray">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;