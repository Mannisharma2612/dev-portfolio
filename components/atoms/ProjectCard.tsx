import React from "react";
import {
  FaReact,
  FaJs,
  FaNodeJs,
  FaPython,
  FaHtml5,
  FaCss3,
  FaAngular,
  FaVuejs,
} from "react-icons/fa";
import { SiTypescript, SiRedux, SiFirebase } from "react-icons/si";

export declare type ProjectCardProps = {
  link?: string;
  title?: string;
  description?: string;
  tech?: string[];
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  link,
  title,
  description,
  tech,
}) => {
  enum LanguageIcon {
    React = "React",
    TypeScript = "Typescript",
    Redux = "Redux",
    JavaScript = "JavaScript",
    NodeJS = "NodeJS",
    Python = "Python",
    HTML = "HTML",
    CSS = "CSS",
    Angular = "Angular",
    VueJS = "VueJS",
    Firebase = "Firebase",
  }

  const renderLanguageIcon = (language: string) => {
    switch (language) {
      case LanguageIcon.React:
        return <FaReact size={20} color="gray" />;
      case LanguageIcon.TypeScript:
        return <SiTypescript size={20} color="gray" />;
      case LanguageIcon.Redux:
        return <SiRedux size={20} color="gray" />;
      case LanguageIcon.JavaScript:
        return <FaJs size={20} color="gray" />;
      case LanguageIcon.NodeJS:
        return <FaNodeJs size={20} color="gray" />;
      case LanguageIcon.Python:
        return <FaPython size={20} color="gray" />;
      case LanguageIcon.HTML:
        return <FaHtml5 size={20} color="gray" />;
      case LanguageIcon.CSS:
        return <FaCss3 size={20} color="gray" />;
      case LanguageIcon.Angular:
        return <FaAngular size={20} color="gray" />;
      case LanguageIcon.VueJS:
        return <FaVuejs size={20} color="gray" />;
      case LanguageIcon.Firebase:
        return <SiFirebase size={20} color="gray" />;
      default:
        return null;
    }
  };
  return (
    <div className="z-[20] max-w-100 w-full h-auto relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]">
      <div className="flex flex-col gap-5 p-6 w-full h-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>

        <p className="flex flex-grow font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
        <div className="flex gap-5 items-center flex-wrap">
          {tech?.map((item, index) => {
            return (
              <div key={index} className="flex flex-row items-center gap-2">
                <p className="text-gray-300">{item}</p>
                {renderLanguageIcon(item)}
              </div>
            );
          })}
        </div>
        <a
          href={link}
          target="_blank"
          className="cursor-pointer inline-flex w-fit items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Github
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
