import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { DOCTORS_DATA } from '../data/doctorsData';

const DoctorProfile = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const doctor = DOCTORS_DATA.find((d) => d.slug === slug);

  if (!doctor) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-3xl font-bold text-primary-blue mb-4">Doctor Not Found</h2>
        <p className="text-secondary-gray mb-6">We couldn't find the doctor profile you're looking for.</p>
        <button
          onClick={() => navigate('/doctors')}
          className="bg-care-blue text-white px-6 py-2 rounded-full font-semibold hover:bg-primary-blue transition"
        >
          ← Back to Doctors
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-primary-blue to-care-blue py-10 px-4">
        <div className="container mx-auto flex items-center gap-3">
          <button
            onClick={() => navigate('/doctors')}
            className="text-white text-sm font-medium hover:underline flex items-center gap-1"
          >
            ← Doctors
          </button>
          <span className="text-white opacity-40">/</span>
          <span className="text-white text-sm opacity-80">{doctor.name}</span>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 max-w-5xl">
        {/* Doctor Card Top */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-10">
          <div className="flex flex-col md:flex-row">
            {/* Photo */}
            <div className="md:w-64 flex-shrink-0">
              <img
                src={doctor.photo || '/images/doctor_p.png'}
                alt={doctor.name}
                className="w-full h-64 md:h-full object-cover"
              />
            </div>

            {/* Info */}
            <div className="flex-1 p-6 md:p-8 flex flex-col justify-center">
              <span className="inline-block bg-blue-100 text-care-blue text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-3 w-fit">
                {doctor.specialtyTitle}
              </span>
              <h1 className="text-3xl md:text-4xl font-montserrat font-bold text-primary-blue mb-1">
                {doctor.name}
              </h1>
              <p className="text-medics-red font-semibold text-lg mb-1">{doctor.credentials}</p>
              <p className="text-secondary-gray text-base mb-4">{doctor.specialty}</p>
              {doctor.slug === 'ankur-shukla' && (
                <p className="text-secondary-gray text-sm italic">
                  Assistant Professor, Department of Psychiatry — Saraswati Medical College, Unnao
                </p>
              )}
              <div className="mt-4 pt-4 border-t border-gray-100">
                <p className="text-primary-blue leading-relaxed text-sm md:text-base">{doctor.about}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Specialty Info */}
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-10">
          <h2 className="text-2xl font-montserrat font-bold text-primary-blue mb-3 flex items-center gap-2">
            <span className="w-1 h-7 bg-care-blue rounded-full inline-block"></span>
            About {doctor.specialtyTitle}
          </h2>
          <p className="text-secondary-gray leading-relaxed">{doctor.specialtyDescription}</p>
        </div>

        {/* Conditions Treated */}
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-10">
          <h2 className="text-2xl font-montserrat font-bold text-primary-blue mb-6 flex items-center gap-2">
            <span className="w-1 h-7 bg-medics-red rounded-full inline-block"></span>
            Conditions Treated
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {doctor.conditions.map((cond, i) => (
              <div
                key={i}
                className="bg-gray-50 border border-gray-100 rounded-xl p-4 hover:border-care-blue transition-colors duration-200"
              >
                <h3 className="font-semibold text-primary-blue mb-1 text-sm">{cond.name}</h3>
                <p className="text-secondary-gray text-sm leading-relaxed">{cond.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Back Button */}
        <div className="text-center">
          <button
            onClick={() => navigate('/doctors')}
            className="bg-care-blue text-white px-8 py-3 rounded-full font-semibold hover:bg-primary-blue transition duration-200 shadow-md"
          >
            ← Back to All Doctors
          </button>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;
