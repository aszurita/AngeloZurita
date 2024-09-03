import { info } from "../../../data/HomeInfo.js";
import Tool from "./tool.jsx";
import SkillsSection from "./skills.jsx";
function AreaToolsSkills() {
  return (
    <div className="flex flex-col place-content-center place-items-center text-center rounded-md w-full">
      <div className="flex flex-col w-[90%]">
        <h1 className="text-5xl font-roboto-slab font-bold py-10 max-sm:text-3xl">Tools and Languages</h1>
        <div className="rounded-lg flex place-content-center place-items-center flex-wrap gap-4">
          {info.tools &&
            info.tools.map((tool, index) => (
              <Tool  key={index}  tool={tool}  />
            ))}
        </div>
        <div className="pb-20 pt-10" >
          <h1 className="text-5xl font-roboto-slab font-bold py-10 max-sm:text-3xl">Skills</h1>
          <div className="flex place-content-center place-items-center gap-5 flex-wrap">
            {info.areas && info.areas.map((area, index) => (
              <SkillsSection  key={index}  area={area}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AreaToolsSkills;