import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import "./Project.css";
import useProject from "../../../hooks/useProject";

const Projects = () => {
const [projects, projectLoading, projectError] = useProject();

// console.log(projects);


  return (
    <div className=" my-20"  id="project">
      {/* title */}
      <div className="flex-h-center">
        <div className="relative mb-9 mx-auto">
          <span className="w-[60px] h-[60px] bg-primary_shade rounded-full inline-block"></span>
          <h3 className="absolute top-4 left-7 text-3xl font-bold text-black whitespace-nowrap">
            My Projects
          </h3>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center">
          {projects?.map((project) => (
            <ProjectCard key={project._id} project={project}></ProjectCard>
          ))}
        </div>
        <button className="button block mx-auto mt-10 border border-primary transition-colors text-black hover:text-primary_shade">
          See More
        </button>
      </div>
    </div>
  );
};

export default Projects;
