import React from 'react';
import Hero from '../../Header/Hero/Hero';
import Contact from '../Contact/Contact';
import Projects from '../Projects/Projects';
import Resume from '../Resume/Resume';
import Skills from '../Resume/Resume';

const Home = () => {
  return (
    <div className=''>
      <Hero/>
      <Projects/>
      <Resume/>
      <Contact/>
    </div>
  );
};

export default Home;