import { profile } from "../../../data/Profile.js";
import { ThemeContext } from "../Shared/ThemeContext.jsx";
import { useContext } from 'react';
import Presentation from "./Presentation.jsx";
function PresentationsSection() {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);
  return (
    <div id="Presentations" className={`pt-2 ${darkMode ? "bg-black" : "bg-white"} }`} data-aos="fade-up"
    data-aos-duration="3000">
      <h1 className={`text-5xl font-roboto-slab font-bold py-10  mt-4 max-sm:text-3xl select-none text-center`}>Presentations</h1>
      <div className="flex w-full flex-wrap place-content-center ">
        <div className="w-4/5">
          {
            profile.presentations && profile.presentations.map((presentation, index) => (
              <Presentation key={index} presentation={presentation} />
            ))
          }
        </div>
      </div>
    </div>

  )
}
export default PresentationsSection;