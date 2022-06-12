import React from "react";
import { faJs } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SkillsCard = (skill) => {
  const { icon, color, name } = skill.skill;
  
  return (
    <p>
      <span className={`${color}`}>{icon}</span>
      <span className="skill-text">{name}</span>
    </p>
  );
};

export default SkillsCard;
