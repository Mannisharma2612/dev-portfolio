import React from "react";
import { AnimatedPinDemo } from "@/components/atoms/Card";

import { PROJECTS } from "@/constants";
const Projects: React.FC = () => {
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center py-20"
    >
      <h1 className="text-white text-[40px] font-semibold text-transparent bg-clip-text pb-5">
        My Projects
      </h1>
      <div className="w-full flex flex-col md:flex-row gap-10">
        {PROJECTS?.map((project, index) => {
          return (
            <AnimatedPinDemo
              key={index}
              link={project.link}
              title={project.title}
              description={project.description}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
