"use client";

import { Navbar } from "flowbite-react";

function NavbarHome() {
  return (
    <Navbar
      fluid
      rounded
      className="fixed top-0 left-0 w-full z-50 bg-white"
    >
      <Navbar.Brand href="" className="ml-10">
        <span className="font-roboto-slab self-center whitespace-nowrap text-xl dark:text-white text-[#69B3A2]">
          HOME
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="font-montserrat mr-10">
        <Navbar.Link href="#">
          ABOUT ME
        </Navbar.Link>
        <Navbar.Link href="#">
          PORTFOLIO
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarHome;
