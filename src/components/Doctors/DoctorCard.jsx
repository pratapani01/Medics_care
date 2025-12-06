import React from 'react';

const DoctorCard = ({ doctor }) => {
  return (
    <article className="doctor-card bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300 border border-gray-100">
      {/* Photo (Ensure images are in public/images) */}
      <div className="w-full h-48 bg-gray-200 overflow-hidden">
        <img 
          src={doctor.photo || '/images/doctor_p.png'} 
          alt={doctor.name} 
          className="w-full h-full object-cover transition duration-300 hover:scale-105" 
        />
      </div>
      
      {/* Doctor Info */}
      <div className="p-4 text-center">
        <h3 className="text-xl font-montserrat font-bold text-primary-blue mb-1">{doctor.name}</h3>
        <p className="text-sm font-semibold text-medics-red mb-1">{doctor.credentials}</p>
        <p className="text-sm text-secondary-gray">{doctor.specialty}</p>
        
        {/* Optional: Add a profile link if you had individual doctor pages */}
        {/* <a href="#" className="mt-2 inline-block text-care-blue text-sm font-medium hover:underline">View Profile →</a> */}
      </div>
    </article>
  );
};

export default DoctorCard;