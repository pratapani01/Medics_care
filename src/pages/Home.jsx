import React from 'react';
import Hero from '../components/Home/Hero';
import ServicesSnapshot from '../components/Home/ServicesSnapshot';
import WhyChooseUs from '../components/Home/WhyChooseUs';
import Stats from '../components/Home/Stats';

const Home = () => {
  return (
    <>
      <Hero />
      <ServicesSnapshot />
      <WhyChooseUs />
      <Stats />
      {/* Testimonials section can go here */}
    </>
  );
};

export default Home;