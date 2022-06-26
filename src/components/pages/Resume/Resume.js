import React, { useState } from "react";
import { Link } from "react-router-dom";
import Education from "./Education/Education";
import "./Resume.css";
import Skills from "./Skills/Skills";
import Training from "./Training/Training";
const Resume = () => {
  const [visibleSection, setVisibleSection] = useState({
    skills: true,
    education: false,
    courses: false,
  });

  function handelSkillsClick() {
    setVisibleSection({ skills: true, education: false, courses: false });
  }

  function handelEducationClick() {
    setVisibleSection({ skills: false, education: true, courses: false });
  }

  function handelCoursesClick() {
    setVisibleSection({ skills: false, education: false, courses: true });
  }

  return (
    <div className="bg-dark  px-4" id="resume">
      <div className="py-10 max-w-screen-xl mx-auto">
        {/* section title */}
        <div className="flex-h-center">
          <div className="relative mb-9 mx-auto">
            <span className="w-[60px] h-[60px] bg-primary_shade rounded-full inline-block"></span>
            <h3 className="absolute top-4 left-7 text-3xl font-bold text-white whitespace-nowrap">
              My Resume
            </h3>
          </div>
        </div>

        {/* route */}
        <div className="hidden md:block">
          <ul className="resume-navigation">

            <li onClick={handelSkillsClick}>
              <Link to="">Skills</Link>
            </li>

            <li onClick={handelEducationClick}>
              <Link to="">Education</Link>
            </li>

            <li onClick={handelCoursesClick}>
              <Link to="">Courses</Link>
            </li>
          </ul>
        </div>

        <div className="">
          {visibleSection.skills && <Skills />}
          {visibleSection.education && <Education />}
          {visibleSection.courses && <Training />}
          <div className={`w-full h-full md:hidden`}>
          <Skills />
          <Education/>
          <Training />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
