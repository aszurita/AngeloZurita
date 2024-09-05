import { info } from "../../../data/HomeInfo.js";
import Tool from "./Tool.jsx";
import SkillsSection from "./Skills.jsx";
import { ThemeContext } from "../Shared/ThemeContext.jsx";
import {useContext} from 'react';

function AreaToolsSkills() {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);
  return (
    <div className={`flex flex-col place-content-center place-items-center text-center w-full pt-2 ${darkMode?"bg-black":"bg-white"}`} id="Tools">
      <div className="flex flex-col w-[90%]">
        <h1 className="text-5xl font-roboto-slab font-bold py-10 max-sm:text-3xl select-none">Tools and Languages</h1>
        <div className="rounded-lg flex place-content-center place-items-center flex-wrap gap-4">
          {info.tools &&
            info.tools.map((tool, index) => (
              <Tool key={index} tool={tool} />
            ))}
        </div>
        <div className="pt-10" >
          <h1 className="text-5xl font-roboto-slab font-bold py-10 max-sm:text-3xl select-none">Skills</h1>
          <div className="flex place-content-center place-items-center gap-5 flex-wrap">
            {info.areas && info.areas.map((area, index) => (
              <SkillsSection key={index} area={area} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AreaToolsSkills;