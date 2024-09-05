"use client";

import { useState } from "react";
import { Navbar } from "flowbite-react";

function NavbarHome() {
  const [activeLink, setActiveLink] = useState("ABOUT ME");

  return (
    <Navbar fluid rounded className="fixed top-0 left-0 w-full z-50 bg-white">
      <Navbar.Brand href="" className="ml-10">
        <span className="font-roboto-slab self-center whitespace-nowrap text-xl dark:text-white text-green-calid">
          AngeloZurita
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="font-montserrat text-xl mr-10 lg:mr-40 select-none">
        <Navbar.Link
          href="#AboutMe"
          className={`hover:!text-green-calid ${
            activeLink === "ABOUT ME" ? "text-green-calid !border-b-2 !border-green-calid" : ""
          }`}
          onClick={() => setActiveLink("ABOUT ME")} 
        >
          ABOUT ME
        </Navbar.Link>
        <Navbar.Link
          href="#Portfolio"
          className={`hover:!text-green-calid ${
            activeLink === "PORTFOLIO" ? "text-green-calid !border-b-2 !border-green-calid" : ""
          }`}
          onClick={() => setActiveLink("PORTFOLIO")} 
        >
          PORTFOLIO
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarHome;
