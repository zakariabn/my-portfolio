import React from 'react';
import Hero from '../../Header/Hero/Hero';
import Footer from '../../Sheared/Footer/Footer';
import Contact from '../Contact/Contact';
import Projects from '../Projects/Projects';
import Resume from '../Resume/Resume';
import Skills from '../Resume/Resume';

const Home = () => {
  return (
    <div id='home'>
      <Hero/>
      <Projects/>
      <Resume/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default Home;