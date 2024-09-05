import Particles from "./HomeDiv/ParticleBackground";
import NavbarHome from "./HomeDiv/components/Navbar";
import AreaToolsSkills from "./Skills/AreaToolsSkils";
import Projects from "./Portfolio/Projects";
import MeExperienceSection from "./Experience/MeExperienceSection";
import { MdDarkMode,MdOutlineDarkMode } from "react-icons/md";
function Home() {
    return (
        <div className="h-full bg-white">
            <NavbarHome />
            <Particles />
            <AreaToolsSkills />
            <Projects />
            <MeExperienceSection />
            <div className="flex">
                <div>
                    {true ? <div className="flex align-middle justify-center">DARK MODE <MdDarkMode size={20}/></div> : <div>LIGHT MODE <MdOutlineDarkMode size={20}/></div>}
                </div>
            </div>
        </div>
    );
}

export default Home;


