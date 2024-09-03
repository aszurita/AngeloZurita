import { info } from "../../../data/HomeInfo.js";
import Tool from "../Skills/tool.jsx";

function Project({ project }) {
  const tools = info.tools;

  return (
    <div className="min-w-[300px] w-1/3 flex flex-col items-center">
      <div className="h-[300px] w-full overflow-hidden">
        <img src={project.image} alt={project.name} className="w-full h-full object-cover" />
      </div>
      <div className="py-2 w-full">
        <p className="font-roboto-slab text-lg text-center">{project.name}</p>
      </div>
      <div className="flex place-content-center place-items-center gap-y-1 gap-x-2 flex-wrap w-full">
        {project.tools && project.tools.map((toolName, index) => {
          const tool = tools.find(t => t.name_tool === toolName);
          if (tool) {
            return <Tool key={index} tool={tool} smalltool={true} />;
          }
          return null;
        })}
      </div>
    </div>
  );
  
}

export default Project;
