import React, { useState } from 'react';
import PageHero from '../components/Layout/PageHero';

// Data structure based on your original HTML
const servicesData = [
  { 
    id: 'emergency', icon: 'fas fa-ambulance', title: '24x7 Emergency Services', 
    description: 'Round-the-clock emergency care with rapid triage, resuscitation bays, on-call specialists and a fully equipped trauma area for urgent life-saving interventions.',
    list: ['Rapid triage and resuscitation', 'Dedicated trauma team', 'Immediate access to imaging & labs']
  },
  { 
    id: 'icu', icon: 'fas fa-procedures', title: 'ICU / Critical Care Unit', 
    description: 'Multi-disciplinary ICU for critically ill patients with ventilatory support, monitoring and specialist intensivist care.',
    list: ['Ventilator support and invasive monitoring', 'Step-down unit & high-dependency care', '24x7 critical care nursing']
  },
  { 
    id: 'medicine-surgery', icon: 'fas fa-notes-medical', title: 'Medicine & Surgical Facilities', 
    description: 'General medicine and surgical services covering inpatient and outpatient care, with modern OT setups for elective and emergency surgeries.',
    list: ['Fully equipped operating theatres', 'Pre-op and post-op care', 'Ambulatory (daycare) procedures']
  },
  { 
    id: 'general-medicine', icon: 'fas fa-stethoscope', title: 'General Medicine', 
    description: 'Experienced physicians for acute and chronic medical conditions with diagnostic support and personalized care plans.',
    list: ['Diabetes and hypertension management', 'Infectious disease care', 'Chronic disease follow-up clinics']
  },
  { 
    id: 'general-surgery', icon: 'fas fa-scissors', title: 'General Surgery', 
    description: 'Comprehensive general surgical services — emergency and elective — supported by modern anesthesia and post-op care.',
    list: ['Open and laparoscopic surgery', 'Hernia, appendicitis and GI surgeries', 'Post-operative rehabilitation']
  },
  { 
    id: 'obsgyn', icon: 'fas fa-baby', title: 'Obstetrics & Gynaecology', 
    description: 'Maternal and reproductive health services including antenatal care, normal & assisted deliveries and gynecologic surgery.',
    list: ['Antenatal & postnatal care', 'Normal and cesarean deliveries', 'Women’s health clinics and family planning']
  },
  { 
    id: 'pediatrics', icon: 'fas fa-child', title: 'Pediatrics (OPD & IPD)', 
    description: 'Child-friendly clinical services for infants, children and adolescents with immunization, growth monitoring and pediatric emergency care.',
    list: ['Well-child visits & vaccinations', 'Pediatric emergency & inpatient care', 'Neonatal support & referrals']
  },
  { 
    id: 'pathology', icon: 'fas fa-vials', title: 'Pathology & Diagnostic Laboratory', 
    description: 'In-house laboratory services supporting timely diagnosis with routine and specialized tests.',
    list: ['Biochemistry, hematology, microbiology', 'Pre-op and emergency lab testing', 'Sample collection & home collection (on request)']
  },
  { 
    id: 'ambulance', icon: 'fas fa-phone-square-alt', title: '24x7 Ambulance Facility', 
    description: 'Emergency ambulance services with trained paramedics and life-support equipment for rapid transport.',
    list: ['Basic and advanced life support ambulances', 'Inter-hospital transfers and emergency pickup', 'Telephone dispatch & GPS-enabled routing']
  },
];

// Simple component to handle the accordion logic
const ServiceAccordionItem = ({ service }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button 
        className="flex justify-between items-center w-full py-4 px-3 text-left font-montserrat font-semibold text-lg text-primary-blue hover:bg-gray-50 transition duration-200"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={`content-${service.id}`}
      >
        <div className="flex items-center space-x-3">
          <i className={`${service.icon} text-medics-red text-xl`} aria-hidden="true"></i> 
          <span>{service.title}</span>
        </div>
        <i className={`fas fa-chevron-down transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} aria-hidden="true"></i>
      </button>
      
      {/* Accordion Content */}
      <div 
        id={`content-${service.id}`} 
        className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100 p-4' : 'max-h-0 opacity-0 p-0'}`}
        hidden={!isOpen}
      >
        <p className="mb-3 text-secondary-gray">{service.description}</p>
        <ul className="list-disc list-inside space-y-1 text-sm text-primary-blue/80">
          {service.list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <>
      <PageHero 
        title="Comprehensive Healthcare Services & Facilities" 
        subtitle="Our hospital provides a wide range of clinical and support services — available 24/7 to serve you and your family."
      />

      <section className="services-list container mx-auto px-4 sm:px-6 lg:px-8 py-10" aria-labelledby="services-heading">
        <h2 id="services-heading" className="text-3xl font-montserrat font-bold text-center mb-8 text-primary-blue">
            Our Key Departments & Facilities
        </h2>

        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden">
          {servicesData.map((service) => (
            <ServiceAccordionItem key={service.id} service={service} />
          ))}
        </div>
      </section>
      
      {/* Optional Features/Support section (can be added with a separate item in the data array if needed) */}
    </>
  );
};

export default Services;