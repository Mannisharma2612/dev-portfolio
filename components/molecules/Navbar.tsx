"use client";
import Link from "next/link";
import React, { useState } from "react";
import { RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinkClasses =
    "relative text-gray-200 text-lg font-medium transition-all duration-300 hover:text-white";

  return (
    <div className="sticky top-0 z-30 bg-[#03001417] backdrop-blur-md shadow-lg border-b border-white">
      <div className="flex items-center justify-between h-[65px] px-5 md:px-10">
        {/* Left Section: Navigation Links */}
        <div className="hidden md:flex w-auto gap-8">
          <NavLink href="#skills" className={navLinkClasses}>
            Skills
          </NavLink>
          <NavLink href="#experience" className={navLinkClasses}>
            Experience
          </NavLink>
          <NavLink href="#projects" className={navLinkClasses}>
            Projects
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-200">
            {isOpen ? <HiX size={30} /> : <HiMenu size={30} />}
          </button>
        </div>

        {/* Right Section: Social Links */}
        <div className="flex gap-5 items-center">
          <Link href="https://github.com/Mannisharma2612" target="_blank">
            <RxGithubLogo color="white" size={26} />
          </Link>
          <Link href="https://www.linkedin.com/in/manni-sharma" target="_blank">
            <RxLinkedinLogo color="white" size={26} />
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-start gap-5 mt-4 bg-[#0300145e] p-5 rounded-lg shadow-md">
          <NavLink
            href="#skills"
            className={navLinkClasses}
            onClick={closeMenu}
          >
            Skills
          </NavLink>
          <NavLink
            href="#experience"
            className={navLinkClasses}
            onClick={closeMenu}
          >
            Experience
          </NavLink>
          <NavLink
            href="#projects"
            className={navLinkClasses}
            onClick={closeMenu}
          >
            Projects
          </NavLink>
        </div>
      )}
    </div>
  );
};

interface NavLinkProps {
  href: string;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({
  href,
  className,
  children,
  onClick,
}) => (
  <Link href={href} className={`${className} group relative`} onClick={onClick}>
    <span className="group-hover:text-white">{children}</span>
    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-[#2A0E61] to-white transition-all duration-300 group-hover:w-full"></span>
    <span className="absolute inset-0 rounded-lg shadow-[0_4px_15px_0_rgba(42,14,97,0.3)] group-hover:shadow-[0_0px_20px_0_rgba(42,14,97,0.5)]"></span>
  </Link>
);

export default Navbar;
