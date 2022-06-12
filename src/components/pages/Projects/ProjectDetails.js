import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useProject from "../../../hooks/useProject";

const ProjectDetails = () => {
  const {id} = useParams();
  
  const [projects, projectLoading] = useProject();


  return (
    <div></div>
  );
};

export default ProjectDetails;

// in this i will do full page scroll animation
