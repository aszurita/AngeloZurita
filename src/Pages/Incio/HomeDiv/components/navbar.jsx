"use client";
import { Navbar } from "flowbite-react";

function NavbarHome() {
  return (
    <Navbar fluid rounded className="xl:mx-20 mx-5 mt-4 bg-transparent">
      <Navbar.Brand href="">
        <span className="font-roboto-slab self-center whitespace-nowrap text-xl dark:text-white text-[#69B3A2]">HOME</span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="font-montserrat">
        <Navbar.Link href="#" >
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



