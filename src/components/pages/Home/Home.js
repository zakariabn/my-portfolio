import React from 'react';
import Hero from '../../Header/Hero/Hero';
import Contact from '../Contact/Contact';
import Projects from '../Projects/Projects';

const Home = () => {
  return (
    <div className=''>
      <Hero/>
      <Projects/>
      <Contact/>
    </div>
  );
};

export default Home;