"use client";
import { userInfo, headerItems } from "@/app/constant/constant";
import { BiMenuAltRight } from "react-icons/bi";
import { useState } from "react";
import { Link, Link as Scrolllink } from "react-scroll";

const Header: React.FC = () => {
  const [NavItems, showNavItems] = useState<boolean>(false);
  return (
    <header className="bg-white p-6 justify-between fixed top-0 md:flex w-full z-0">
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold ">{userInfo.name}</h2>
        <BiMenuAltRight
          size={30}
          className="md:hidden"
          onClick={() => showNavItems((prevState) => !prevState)}
        />
      </div>
      <div
        className={`mr-8 md:space-x-6 mt-3 md:mt-0 md:block ${
          NavItems ? "block" : "hidden"
        }`}
      >
        <Link
          to={headerItems.home.page}
          spy={true}
          smooth={true}
          hashSpy={true}
          offset={50}
          duration={1000}
          delay={300}
          isDynamic={true}
          ignoreCancelEvents={false}
          spyThrottle={500}
          className="block md:inline-block cursor-pointer"
          onClick={() => showNavItems((prevState) => !prevState)}
        >
          Home
        </Link>
        <Link
          to={headerItems.about.page}
          spy={true}
          smooth={true}
          hashSpy={true}
          offset={50}
          duration={1000}
          delay={300}
          isDynamic={true}
          ignoreCancelEvents={false}
          spyThrottle={500}
          className="block md:inline-block cursor-pointer"
          onClick={() => showNavItems((prevState) => !prevState)}
        >
          About
        </Link>
        <Link
          to={headerItems.projects.page}
          spy={true}
          smooth={true}
          hashSpy={true}
          offset={50}
          duration={1200}
          delay={300}
          isDynamic={true}
          ignoreCancelEvents={false}
          spyThrottle={500}
          className="block md:inline-block cursor-pointer"
          onClick={() => showNavItems((prevState) => !prevState)}
        >
          Projects
        </Link>
      </div>
    </header>
  );
};

export default Header;
