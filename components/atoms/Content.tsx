import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "@/utils/motion";
import Image from "next/image";
import { TiAttachmentOutline } from "react-icons/ti";

export default function Content() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="grid grid-cols-2 p-6 sm:p-10 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            <span className="text-white text-transparent bg-clip-text">
              {" "}
              HI, I&apos;M MANNI
            </span>
          </span>
        </motion.div>
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400  max-w-[600px]"
        >
          Enthusiastic Frontend Developer with a burgeoning interest in back-end
          development
        </motion.p>
        <motion.a
          variants={slideInFromLeft(1)}
          className="justify-center flex gap-2 items-center py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          Resume
          <TiAttachmentOutline color="white" />
        </motion.a>
      </div>
      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full pl-5 h-full flex justify-center items-center"
      >
        <Image
          src={"/mainIconsdark.svg"}
          alt="work-icons"
          height={650}
          width={650}
        />
      </motion.div>
    </motion.div>
  );
}
