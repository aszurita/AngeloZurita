import { useState, useContext } from "react";
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";
import { ThemeContext } from "../../Shared/ThemeContext";

function NavbarHome() {
  const [activeLink, setActiveLink] = useState("HOME");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 ${darkMode ? "bg-black text-white" : "bg-white text-black"}`}>
      <div className="container mx-auto flex justify-between items-center p-4">
        <a href="#Home" className="ml-4 lg:ml-10" onClick={() => setActiveLink("HOME")}>
          <span className="font-roboto-slab self-center whitespace-nowrap text-xl text-green-calid">
            ANGELO ZURITA
          </span>
        </a>
        <button
          className="lg:hidden p-2 rounded-md focus:outline-none"
          onClick={toggleMenu}
        >
          <span className="sr-only">Toggle menu</span>
          <svg
            className={`w-6 h-6 ${darkMode ? 'text-white' : 'text-black'}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
        <div className={`lg:flex lg:items-center lg:space-x-6 font-roboto-slab text-xl mr-4 lg:mr-40 select-none ${isMenuOpen ? `block absolute top-full left-0 right-0 ${darkMode ? "bg-black text-white" : "bg-white text-black"}` : 'hidden'}`}>
          {['ABOUT ME', 'PORTFOLIO', 'TOOLS'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(' ', '')}`}
              className={`block py-2 px-4 border-b border-gray-200 lg:inline-block lg:border-none hover:text-green-calid ${activeLink === item ? "text-green-calid border-green-calid" : ""}`}
              onClick={() => {
                setActiveLink(item);
                setIsMenuOpen(false);
              }}
            >
              {item}
            </a>
          ))}
          <div
            className="flex items-center cursor-pointer py-2 px-4 border-b border-gray-200 lg:inline-block lg:border-none max-sm:pt-2 max-sm:pr-4 max-sm:pb-2 max-sm:pl-3"
            onClick={() => {
              toggleDarkMode();
              setIsMenuOpen(false);
            }}
          >
              {darkMode ? <div className="flex flex-row pt-4 hover:text-green-calid"> LIGHT MODE <MdOutlineDarkMode size={20}/> </div>: <div className="flex flex-row pt-4 hover:text-green-calid"> DARK MODE <MdDarkMode size={20} /> </div>}&nbsp;
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavbarHome;