import { PROJECTS } from "@/constants";
import ProjectCard from "../atoms/ProjectCard";
const Projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center py-20"
    >
      <h1 className="text-white text-[40px] font-semibold text-transparent bg-clip-text pb-5">
        My Projects
      </h1>
      <div className="w-full grid  grid-cols-1 md:grid-cols-2 gap-10">
        {PROJECTS?.map((project, index) => (
          <ProjectCard
            key={index}
            link={project.link}
            title={project.title}
            description={project.description}
            tech={project.tech}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
