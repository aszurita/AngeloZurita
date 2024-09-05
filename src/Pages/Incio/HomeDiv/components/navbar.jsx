"use client";

import { useState, useContext } from "react";
import { Navbar } from "flowbite-react";
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";
import { ThemeContext } from "../../Shared/ThemeContext";

function NavbarHome() {
  const [activeLink, setActiveLink] = useState("HOME");
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <Navbar fluid rounded className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-gray-900">
      <Navbar.Brand href="" className="ml-10" onClick={() => setActiveLink("HOME")}>
        <span className="font-roboto-slab self-center whitespace-nowrap text-xl dark:text-white text-green-calid">
          AngeloZurita
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="font-montserrat text-xl mr-10 lg:mr-40 select-none ">
        <Navbar.Link
          href="#AboutMe"
          className={`hover:!text-green-calid ${activeLink === "ABOUT ME" ? "text-green-calid !border-b-2 !border-green-calid" : ""} mt-1`}
          onClick={() => setActiveLink("ABOUT ME")}
        >
          ABOUT ME
        </Navbar.Link>
        <Navbar.Link
          href="#Portfolio"
          className={`hover:!text-green-calid ${activeLink === "PORTFOLIO" ? "text-green-calid !border-b-2 !border-green-calid" : ""} mt-1`}
          onClick={() => setActiveLink("PORTFOLIO")}
        >
          PORTFOLIO
        </Navbar.Link>
        <Navbar.Link
          href="#Tools"
          className={`hover:!text-green-calid ${activeLink === "TOOLS" ? "text-green-calid !border-b-2 !border-green-calid" : ""} mt-1`}
          onClick={() => setActiveLink("TOOLS")}
        >
          TOOLS
        </Navbar.Link>
        <div
          className="flex items-center cursor-pointer max-sm:pt-2 max-sm:pr-4 max-sm:pb-2 max-sm:pl-3"
          onClick={toggleDarkMode}
        >
          <span className="dark:text-white">
            {darkMode ? "DARK MODE" : "LIGHT MODE"}&nbsp;
          </span>
          {darkMode ? (
            <MdDarkMode size={20} className="dark:text-white" />
          ) : (
            <MdOutlineDarkMode size={20} className="text-gray-900" />
          )}
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarHome;
