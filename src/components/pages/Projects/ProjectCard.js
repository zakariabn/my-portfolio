import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { a } from "react-spring";

const ProjectCard = ({ project }) => {
  const {_id, logo, name, screen_short, bullet_point, site_url } = project;

  const navigate = useNavigate();

  const cardBg = {
    background: `url(${screen_short[0]})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    //   backgroundColor: "#ffffef",
    //   backgroundBlendMode: "darken",
  };

  return (
    <div className="flex flex-col  w-full p-10 rounded bg-center bg-backdrop">
      <div className="background-img" style={cardBg}></div>

      <div className="w-[80px] h-[80px] mb-4 rounded-full mx-auto overflow-hidden p-logo-shadow flex-center">
        <img src={logo} alt="Project Logo" className="h-[50%]" />
      </div>

      <h3 className="text-3xl text-center font-semibold font-title-font mb-5">
        {name || "Project Title"}
      </h3>

      <div className="flex-center gap-4">
        <button
          className="button text-white py-1 bg-neutral  rounded-full hover:text-primary transition-color duration-200"
          onClick={() => navigate(`/project/${_id}`)}>
          See Details
        </button>

        <button className="go-website-btn border border-neutral px-2 py-[.1rem] rounded-full transition-all">
          <FontAwesomeIcon
            icon={faArrowRight}
            className="text-sm mr-3 font-bold  go-web-ico-animation"
          />

          <span className="font-bold font-title-font relative">
            <a
              href={site_url}
              target="_blank"
              rel="noreferrer"
              className="link-animation">
              Live Link
            </a>
          </span>
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
