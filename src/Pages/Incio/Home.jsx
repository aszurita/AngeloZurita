import Particles from "./HomeDiv/ParticleBackground";
import NavbarHome from "./HomeDiv/components/Navbar";
import AreaToolsSkills from "./Skills/AreaToolsSkils";
import Projects from "./Portfolio/Projects";
import MeExperienceSection from "./Experience/MeExperienceSection";
import { MdDarkMode,MdOutlineDarkMode } from "react-icons/md";
import { ThemeContext } from "../Incio/Shared/ThemeContext";
import { useContext } from 'react';
function Home() {
    const { darkMode } = useContext(ThemeContext);
    return (
        <div className={`${darkMode ? 'bg-black text-white' : 'text-black bg-white'} h-ful`}>
            <NavbarHome />
            <Particles />
            <AreaToolsSkills />
            <Projects />
            <MeExperienceSection />
            <div className={`h-10 w-full`}>
            </div>
        </div>
    );
}

export default Home;


