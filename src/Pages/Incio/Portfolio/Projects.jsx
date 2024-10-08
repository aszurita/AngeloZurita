import { projects } from "../../../data/Projects.js";
import Project from "./Project.jsx";
import { ThemeContext } from "../Shared/ThemeContext.jsx";
import { useContext } from 'react';
function Projects() {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);
  return (
    <div className={`flex flex-col place-content-center place-items-center text-center ${darkMode ? "bg-black" : "bg-white"}`} id="Portfolio">
      <h1 className="text-5xl font-roboto-slab font-bold py-10  mt-4 max-sm:text-3xl select-none">Portfolio</h1>
      <div className="flex flex-wrap place-content-center gap-10">
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