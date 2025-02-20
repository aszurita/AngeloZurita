import { useState, useContext } from "react";
import { Navbar } from "flowbite-react";
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";
import { ThemeContext } from "../../Shared/ThemeContext";

function NavbarHome() {
  const [activeLink, setActiveLink] = useState("HOME");
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <Navbar fluid rounded className={`fixed top-0 left-0 w-full z-50 ${darkMode ? "bg-black !text-white" : "bg-white"} `}>
      <Navbar.Brand href="#Home" className="ml-10" onClick={() => setActiveLink("HOME")}>
        <span className="font-roboto-slab self-center whitespace-nowrap text-xl dark:text-white text-green-calid">
          AngeloZurita
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="font-montserrat text-xl mr-10 lg:mr-40 select-none ">
      <Navbar.Link
          href="#Tools"
          className={`hover:!text-green-calid ${activeLink === "TOOLS" ? "text-green-calid !border-b-2 !border-green-calid" : ""} mt-1`}
          onClick={() => setActiveLink("TOOLS")}
        >
          TOOLS
        </Navbar.Link>
        <Navbar.Link
          href="#Portfolio"
          className={`hover:!text-green-calid ${activeLink === "PORTFOLIO" ? "text-green-calid !border-b-2 !border-green-calid" : ""} mt-1`}
          onClick={() => setActiveLink("PORTFOLIO")}
        >
          PORTFOLIO
        </Navbar.Link>
        <Navbar.Link
          href="#Articles"
          className={`hover:!text-green-calid ${activeLink === "ARTICLES" ? "text-green-calid !border-b-2 !border-green-calid" : ""} mt-1`}
          onClick={() => setActiveLink("ARTICLES")}
        >
          ARTICLES
        </Navbar.Link>
        <Navbar.Link
          href="#Presentations"
          className={`hover:!text-green-calid ${activeLink === "PRESENTATIONS" ? "text-green-calid !border-b-2 !border-green-calid" : ""} mt-1`}
          onClick={() => setActiveLink("PRESENTATIONS")}
        >
          PRESENTATIONS
        </Navbar.Link>
        <Navbar.Link
          href="#Experiences"
          className={`hover:!text-green-calid ${activeLink === "EXPERIENCES" ? "text-green-calid !border-b-2 !border-green-calid" : ""} mt-1`}
          onClick={() => setActiveLink("EXPERIENCES")}
        >
          EXPERIENCES
        </Navbar.Link>
        <div
          className="flex items-center cursor-pointer max-sm:pt-2 max-sm:pr-4 max-sm:pb-2 max-sm:pl-3"
          onClick={toggleDarkMode}
        >
          <span className="dark:text-white">
            {!darkMode ? "DARK MODE" : "LIGHT MODE"}&nbsp;
          </span>
          {darkMode ? (
            <MdDarkMode size={20} />
          ) : (
            <MdOutlineDarkMode size={20} />
          )}
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarHome;
