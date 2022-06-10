import React from 'react';
import Hero from '../../Header/Hero/Hero';
import Contact from '../Contact/Contact';

const Home = () => {
  return (
    <div className=''>
      <Hero/>
      <h1 className='text-center text-4xl text-dark font-medium my-10'>This is project section</h1>
      <Contact/>
    </div>
  );
};

export default Home;