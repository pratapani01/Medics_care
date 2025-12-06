import React from 'react';

const stats = [
  { value: '20+', label: 'Experienced Doctors' },
  { value: '50+', label: 'Inpatient Beds' },
  { value: '24/7', label: 'Emergency Response' },
  { value: '100+', label: 'Patients Treated / Month' },
];

const Stats = () => {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-8" aria-label="Hospital statistics">
      <div className="flex flex-wrap justify-center gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="min-w-[160px] p-4 bg-white rounded-xl shadow-md text-center border-b-4 border-care-blue">
            <div className="text-4xl font-extrabold text-care-blue font-montserrat">{stat.value}</div>
            <div className="text-secondary-gray mt-2">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;