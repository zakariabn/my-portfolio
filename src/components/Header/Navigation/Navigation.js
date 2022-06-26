import React from "react";
import { Link } from "react-router-dom";
import NavLink from "../../Sheared/NavLink/NavLink";

const Navigation = () => {
  return (
    <div className="bg-dark">
      <nav className="flex-center gap-4 relative z-50">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/project">Project</NavLink>
        <NavLink to="/resume">Resume</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </div>
  );
};

export default Navigation;
