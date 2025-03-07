import { BackendSkills, FrontendSkills, OtherSkills } from "@/constants";
import React from "react";
import SkillItem from "../atoms/SkillItem";
import SkillText from "../atoms/SkillText";

const Skills: React.FC = () => {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-20"
      style={{ transform: `scale(0.9)` }}
    >
      <SkillText />
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {FrontendSkills?.map((image, index) => (
          <SkillItem
            src={image.Image}
            key={index}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {BackendSkills?.map((image, index) => (
          <SkillItem
            src={image.Image}
            key={index}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {OtherSkills?.map((image, index) => (
          <SkillItem
            src={image.Image}
            key={index}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;
