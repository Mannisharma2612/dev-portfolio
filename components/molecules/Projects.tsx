import React from "react";
import ProjectCard from "../atoms/ProjectCard";
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
      <div className="h-auto w-auto flex flex-col md:flex-row gap-10 px-10">
        {PROJECTS?.map((project, index) => {
          return (
            <ProjectCard
              key={index}
              link={project.link}
              title={project.title}
              description={project.description}
              tech={project.tech}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
