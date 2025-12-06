import React, { useState } from 'react';
import { DOCTORS_DATA } from '../data/doctorsData'; // You'll create this file
import DoctorCard from '../components/Doctors/DoctorCard';
import PageHero from '../components/Layout/PageHero'; // Reusable page hero

// DOCTORS_DATA will be an array of objects like:
/*
[
  { name: 'Dr. Alok Sangam', credentials: 'MD, DM (Gastro)', specialty: 'Gastroenterology', category: 'gastro', photo: '/images/doctor-m-1.jpeg' },
  // ... rest of the doctors
]
*/

const specialties = [
  { key: 'all', label: 'All Specialties' },
  // { key: 'cardiology', label: 'Cardiology' },
  { key: 'pediatrics', label: 'Pediatrics' },
  { key: 'orthopedics', label: 'Orthopedics' },
  { key: 'neuro', label: 'Neurology' },
  { key: 'gastro', label: 'Gastro' },
  { key: 'pulmo', label: 'Pulmonology' },
  { key: 'physician', label: 'Physician' },
  { key: 'surgery', label: 'Surgery' },
  { key: 'gyn', label: 'Gynaecology' },
];


const Doctors = () => {
  const [activeSpecialty, setActiveSpecialty] = useState('all');

  const filteredDoctors = DOCTORS_DATA.filter(doctor => 
    activeSpecialty === 'all' || doctor.category === activeSpecialty
  );

  return (
    <>
      <PageHero 
        title="Our Medical Specialists" 
        subtitle="Meet our dedicated team of experienced doctors, committed to providing specialized and compassionate care across all departments."
      />

      <section className="doctors-directory container mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Doctor Tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-8 p-3 bg-gray-50 rounded-lg" role="tablist" aria-label="Filter by specialty">
          {specialties.map(spec => (
            <button
              key={spec.key}
              className={`py-2 px-4 rounded-full font-semibold transition duration-200 text-sm md:text-base ${
                activeSpecialty === spec.key 
                  ? 'bg-care-blue text-white shadow-md' 
                  : 'bg-white text-primary-blue hover:bg-gray-100'
              }`}
              onClick={() => setActiveSpecialty(spec.key)}
              role="tab"
              aria-selected={activeSpecialty === spec.key}
            >
              {spec.label}
            </button>
          ))}
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6" aria-live="polite">
          {filteredDoctors.length > 0 ? (
            filteredDoctors.map((doctor, index) => (
              <DoctorCard key={index} doctor={doctor} />
            ))
          ) : (
            <p className="col-span-full text-center text-secondary-gray p-8">No doctors found in this specialty.</p>
          )}
        </div>
      </section>
    </>
  );
};

export default Doctors;