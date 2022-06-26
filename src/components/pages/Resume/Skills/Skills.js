import React from "react";
import "./Skills.css";
import SkillsCard from "./SkillsCard";
import {expertise, comfortable, familiar,  tools } from "./SkillsData";

const Skills = () => {


  return (
    <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-10">
      
      {/* expert skill */}
      <div className="border border-dark rounded-lg mt-4">
        <h2 className="skill-title pl-6 pt-4">Expertise</h2>
        <div className="skill-container">
          {expertise.map((exp) => (
            <SkillsCard key={exp.id} skill={exp} />
          ))}
        </div>
      </div>

      {/* comfortable skill */}
      <div className="border border-neutral rounded-lg mt-4">
        <h2 className="skill-title pl-6 pt-4">Comfortable</h2>
        <div className="skill-container">
          {comfortable.map((exp) => (
            <SkillsCard key={exp.id} skill={exp} />
          ))}
        </div>
      </div>

      {/* familiar skill */}
      <div className="border border-neutral rounded-lg mt-4">
        <h2 className="skill-title pl-6 pt-4">Familiar</h2>
        <div className="skill-container">
          {familiar.map((exp) => (
            <SkillsCard key={exp.id} skill={exp} />
          ))}
        </div>
      </div>

      {/* tools skill */}
      <div className="border border-dark rounded-lg mt-4">
        <h2 className="skill-title pl-6 pt-4">Tools</h2>
        <div className="skill-container">
          {tools.map((exp) => (
            <SkillsCard key={exp.id} skill={exp} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
