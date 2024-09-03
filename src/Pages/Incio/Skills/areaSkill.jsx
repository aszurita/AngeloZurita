import { info } from "../../../data/HomeInfo.js";
import Skill from "./skill.jsx";

function AreaSkills() {
  return (
    <div className="flex flex-col place-content-center place-items-center text-center rounded-md w-full">
      <div className="flex flex-col w-[90%]">
        <h1 className="text-5xl font-roboto-slab font-bold py-10">Tools and Languages</h1>
        <div className="rounded-lg flex place-content-center place-items-center flex-wrap gap-4">
          {info.tools &&
            info.tools.map((tool, index) => (
              <Skill name_tool={tool.name_tools} image={tool.image} link={tool.link} />
            ))}
        </div>
        <div className="h-60 bg-lime-300 mt-52" >
          friugngvjtg
        </div>
      </div>
    </div>
  )
}

export default AreaSkills;