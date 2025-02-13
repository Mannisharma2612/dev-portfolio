import Link from "next/link";
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
        return <FaReact size={20} color="white" />;
      case LanguageIcon.TypeScript:
        return <SiTypescript size={20} color="white" />;
      case LanguageIcon.Redux:
        return <SiRedux size={20} color="white" />;
      case LanguageIcon.JavaScript:
        return <FaJs size={20} color="white" />;
      case LanguageIcon.NodeJS:
        return <FaNodeJs size={20} color="white" />;
      case LanguageIcon.Python:
        return <FaPython size={20} color="white" />;
      case LanguageIcon.HTML:
        return <FaHtml5 size={20} color="white" />;
      case LanguageIcon.CSS:
        return <FaCss3 size={20} color="white" />;
      case LanguageIcon.Angular:
        return <FaAngular size={20} color="white" />;
      case LanguageIcon.VueJS:
        return <FaVuejs size={20} color="white" />;
      case LanguageIcon.Firebase:
        return <SiFirebase size={20} color="white" />;
      default:
        return null;
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-5 lg:px-10 relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] bg-black">
      <div className="flex flex-col gap-5 h-full">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
          {title}
        </h5>

        <p className="flex-grow font-normal text-gray-400">{description}</p>

        <div className="flex gap-5 items-center flex-wrap">
          {tech?.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <p className="text-gray-300">{item}</p>
              {renderLanguageIcon(item)}
            </div>
          ))}
        </div>

        <Link
          href={link ?? ""}
          target="_blank"
          className="relative inline-flex items-center justify-center px-6 py-3 font-bold text-white transition-all duration-300 bg-[#2A0E61] rounded-md shadow-lg group hover:bg-[#3B1785]"
        >
          <span className="absolute inset-0 w-full h-full transition-transform duration-300 transform translate-x-1 translate-y-1 bg-[#3B1785] rounded-md group-hover:translate-x-0 group-hover:translate-y-0"></span>
          <span className="absolute inset-0 w-full h-full bg-[#2A0E61] rounded-md"></span>
          <span className="relative">Github</span>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
