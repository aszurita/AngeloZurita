import Profile from "./Profile.jsx";
import Experience from "./Experience.jsx";
import { profile } from "../../../data/Profile.js";
import { ThemeContext } from "../Shared/ThemeContext.jsx";
import { useContext } from 'react';
function MeExperienceSection() {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);
  return (
    <div id="Experiences" className={`pt-2 ${darkMode ? "bg-black" : "bg-white"} }`}>
      <h1 className={`text-5xl font-roboto-slab font-bold py-10  mt-4 max-sm:text-3xl select-none text-center`}>Experience</h1>
      <div className="flex w-full flex-wrap place-content-center ">
        <div className="w-1/3 min-w-[325px]">
          <Profile />
        </div>
        <div className="w-2/3 max-lg:pt-5">
          {
            profile.experiences && profile.experiences.map((experience, index) => (
              <Experience key={index} experience={experience}/>
            ))
          }
        </div>
      </div>
    </div>

  )
}
export default MeExperienceSection;