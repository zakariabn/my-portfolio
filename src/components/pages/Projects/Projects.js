import React from 'react';
import ProjectCard from './ProjectCard';
import "./Project.css"

const Projects = () => {
  return (
    <div className=' my-20'>
      <h1 className='text-5xl text-primary text-center font-bold mb-10'>My Projects</h1>
      <div className='max-w-screen-xl mx-auto px-4'>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center'>
          <ProjectCard/>
          <ProjectCard/>
          <ProjectCard/>
        </div>
        <button className='button block mx-auto mt-10 text-black hover:text-primary_shade'>See More</button>
      </div>
    </div>
  );
};

export default Projects;