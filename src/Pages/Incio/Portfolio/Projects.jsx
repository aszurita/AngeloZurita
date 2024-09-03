import { projects } from "../../../data/Projects.js";
import Project from "./Project.jsx";
function Projects() {
  return (
    <div className="flex flex-col place-content-center place-items-center text-center">
      <h1 className="text-5xl font-roboto-slab font-bold py-10 max-sm:text-3xl">Portfolio</h1>
      <div className="flex flex-wrap place-content-center place-items-center gap-10">
        {
          projects && projects.map((project, index) => (
            <Project key={index} project={project} />
          ))
        }
      </div>
    </div>
  )
}
export default Projects;