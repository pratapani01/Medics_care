import React from 'react';
import { Link } from 'react-router-dom';

const services = [
  { title: "24x7 Emergency Care", description: "Rapid triage, resuscitation and immediate specialist access for trauma and acute medical emergencies.", link: "/services#emergency" },
  { title: "ICU & Critical Care", description: "Modern ICU with ventilatory and invasive monitoring facilities staffed by trained intensivists.", link: "/services#icu" },
  { title: "Surgical Services", description: "Fully equipped operation theaters for elective and emergency surgeries, including laparoscopy.", link: "/services#medicine-surgery" },
  { title: "Outpatient & Diagnostics", description: "OPDs across major specialties with on-site diagnostics such as lab, X-ray and ultrasound.", link: "/services#pathology" },
];

const ServicesSnapshot = () => {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-10" aria-labelledby="services-snapshot">
      <h2 id="services-snapshot" className="text-3xl font-montserrat font-bold text-center mb-8 text-primary-blue">
        Services Snapshot
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 border-t-4 border-care-blue">
            <h3 className="text-xl font-montserrat font-semibold mb-3">{service.title}</h3>
            <p className="text-secondary-gray mb-4">{service.description}</p>
            <p className="font-bold text-sm">
              <Link to={service.link} className="text-care-blue hover:text-medics-red transition duration-200">
                Read more →
              </Link>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSnapshot;