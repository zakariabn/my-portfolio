import React from "react";
import { Link } from "react-router-dom";
import "./Resume.css";
import Skills from "./Skills/Skills";
const Resume = () => {
  return (
    <div className="bg-neutral  px-4">
      <div className="py-10 max-w-screen-xl mx-auto">
        {/* section title */}
        <div className="flex-h-center">
          <div className="relative mb-9 mx-auto">
            <span className="w-[60px] h-[60px] bg-primary_shade rounded-full inline-block"></span>
            <h3 className="absolute top-4 left-7 text-3xl font-bold text-black whitespace-nowrap">
              My Resume
            </h3>
          </div>
        </div>

        {/* route */}
        <div className="">
          <ul className="resume-navigation">
            <li>
              <Link to="">Skills</Link>
            </li>
            <li>
              <Link to="">Education</Link>
            </li>
            <li>
              <Link to="">Professional Trainee</Link>
            </li>
          </ul>
        </div>

        <div className="">
          <Skills />
        </div>
      </div>
    </div>
  );
};

export default Resume;
