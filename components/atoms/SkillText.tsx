"use client";
import { slideInFromLeft } from "@/utils/motion";
import { motion } from "framer-motion";
import React from "react";

const SkillText = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      <motion.div
        variants={slideInFromLeft(0.5)}
        className="text-[30px] text-white font-medium mt-[10px] text-center mb-[15px]"
      >
        Making apps with modern technologies
      </motion.div>
    </div>
  );
};

export default SkillText;
