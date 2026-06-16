import React from 'react';
import { useNavigate } from 'react-router-dom';

const DoctorCard = ({ doctor }) => {
  const navigate = useNavigate();

  return (
    <article
      className="doctor-card bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300 border border-gray-100 cursor-pointer group"
      onClick={() => navigate(`/doctors/${doctor.slug}`)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && navigate(`/doctors/${doctor.slug}`)}
      aria-label={`View profile of ${doctor.name}`}
    >
      {/* Photo */}
      <div className="w-full aspect-square bg-gray-200 overflow-hidden relative">
        <img
          src={doctor.photo || '/images/doctor_p.png'}
          alt={doctor.name}
          className="w-full h-full object-cover transition duration-300 group-hover:scale-105"
        />
        {/* Overlay hint */}
        <div className="absolute inset-0 bg-care-blue bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
          <span className="text-white font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-care-blue px-3 py-1 rounded-full shadow">
            View Profile →
          </span>
        </div>
      </div>

      {/* Doctor Info */}
      <div className="p-4 text-center">
        <h3 className="text-xl font-montserrat font-bold text-primary-blue mb-1 group-hover:text-care-blue transition-colors duration-200">
          {doctor.name}
        </h3>
        <p className="text-sm font-semibold text-medics-red mb-1">{doctor.credentials}</p>
        <p className="text-sm text-secondary-gray">{doctor.specialty}</p>
      </div>
    </article>
  );
};

export default DoctorCard;
