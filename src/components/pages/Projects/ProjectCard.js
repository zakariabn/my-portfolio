import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ProjectCard = ({logo, projImg, title, feathers, link}) => {
  return (
    <div className="flex flex-col max-w-[400px] w-full  bg-slate-100 p-10 rounded ">
      <img
        src={logo}
        alt="Project Logo"
        className="w-[80px] h-[80px] bg-gray-400 mb-4 rounded-full mx-auto"
      />
      <h3 className="text-3xl text-center font-semibold font-title-font mb-5">{title || "Project Title"}</h3>

      <ul className="feather-list mb-4">
        {" "}
        <span className="font-bold ">Key feather</span>
        <li>name</li>
        <li>name</li>
        <li>name</li>
      </ul>

      <button className="go-website-btn">
        <FontAwesomeIcon
          icon={faArrowRight}
          className="text-sm mr-3 font-bold  go-web-ico-animation"
        />
        <span className="font-bold font-title-font">GO TO PROJECT</span>
      </button>
    </div>
  );
};

export default ProjectCard;
