import Particles from "./HomeDiv/ParticleBackground";
import NavbarHome from "./HomeDiv/components/navbar";
import AreaToolsSkills from "./Skills/areaToolsSkils";
import Projects from "./Portfolio/Projects";
import MeExperienceSection from "./Experience/MeExperienceSection";
import ArticlesSection from "./Article/ArticlesSection";
import PresentationsSection from "./Presentations/PresentationsSection";
import { ThemeContext } from "./Shared/ThemeContext";
import { useContext } from 'react';
function Home() {
    const { darkMode } = useContext(ThemeContext);
    return (
        <div className={`${darkMode ? 'bg-black text-white' : 'text-black bg-white'} h-ful`} id="Home">
            <NavbarHome />
            <Particles />
            <AreaToolsSkills />
            <Projects />
            <ArticlesSection/>
            <PresentationsSection/>
            <MeExperienceSection />
            <div className={`h-10 w-full`}>
            </div>
        </div>
    );
}

export default Home;


