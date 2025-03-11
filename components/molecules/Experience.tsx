"use client";
import { EXPERIENCES } from "@/constants";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React from "react";

const Experience: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const imageVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const delay = 0.3;

  return (
    <section id="experience" className="p-6 sm:p-10 overflow-auto">
      <h1 className="text-center text-4xl font-semibold text-transparent bg-clip-text text-white">
        Experience
      </h1>
      <ol className="relative border-l border-gray-700">
        {EXPERIENCES?.map((exp, index) => (
          <motion.div
            key={index}
            ref={ref}
            initial="hidden"
            variants={imageVariants}
            animate={inView ? "visible" : "hidden"}
            custom={index}
            transition={{ delay: index * delay }}
          >
            <li className="mb-10 ml-6">
              <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 ring-8 ring-gray-900 bg-[#2A0E61]">
                <svg
                  className="w-2.5 h-2.5 text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </span>
              <h3 className="flex items-center mb-1 text-lg font-semibold text-white">
                {exp?.title}{" "}
                <span className="text-sm font-medium ml-3 px-2.5 py-0.5 rounded bg-[#2A0E61] text-white">
                  {exp?.company}
                </span>
              </h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-500">
                {exp?.duration}
              </time>
              <ul className="mb-4 text-base font-normal text-gray-400 list-disc list-inside leading-relaxed pl-4">
                {exp?.description
                  ?.split("\n")
                  ?.filter(i => i.trim()) 
                  ?.map((point, i) => (
                    <li key={i} style={{listStyle: 'outside'}} >
                      {point.trim()}
                    </li>
                  ))}
              </ul>
            </li>
          </motion.div>
        ))}
      </ol>
    </section>
  );
};

export default Experience;
