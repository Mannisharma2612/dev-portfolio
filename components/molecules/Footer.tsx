import Link from "next/link";
import React from "react";
import { AiFillMail } from "react-icons/ai";
import { RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";

const Footer: React.FC = () => {
  return (
    <div className=" w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px]">
      <div className="w-full h-full flex flex-col items-center">
        <div className="font-bold text-2xl pb-5">Contact</div>
        <div className="z-[20] w-auto h-auto flex flex-row gap-10 items-center flex-wrap flex-auto justify-center">
          <Link href={"https://github.com/Mannisharma2612"} target="_blank">
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <RxGithubLogo color="white" size={26} />
            </p>
          </Link>
          <p className="flex flex-row items-center my-[15px] cursor-pointer">
            <Link
              href={"https://www.linkedin.com/in/manni-sharma"}
              target="_blank"
            >
              <RxLinkedinLogo color="white" size={26} />
            </Link>
          </p>
          <p className="flex flex-row items-center my-[15px] cursor-pointer">
            <AiFillMail size={26} color="white" />
            <span className="text-[20px] ml-[6px]">
              mannisharma1226@gmail.com
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
