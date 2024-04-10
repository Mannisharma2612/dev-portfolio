import Link from "next/link";
import React from "react";
import { RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";

const Navbar: React.FC = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex gap-5 items-center justify-between w-full h-auto  bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a
              href="#skills"
              className="cursor-pointer hover:border-b-2 border-b-white"
            >
              Skills
            </a>
            <a
              href="#experience"
              className="cursor-pointer hover:border-b-2 border-b-white"
            >
              Experience
            </a>
            <a
              href="#projects"
              className="cursor-pointer hover:border-b-2 border-b-white"
            >
              Projects
            </a>
          </div>
        </div>

        <div className="flex cursor-pointer flex-row gap-5">
          <Link href={"https://github.com/Mannisharma2612"} target="_blank">
            <RxGithubLogo color="white" size={26} />
          </Link>
          <Link
            href={"https://www.linkedin.com/in/manni-sharma"}
            target="_blank"
          >
            <RxLinkedinLogo color="white" size={26} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
