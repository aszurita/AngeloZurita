import Particles from "./HomeDiv/ParticleBackground";
import NavbarHome from "./HomeDiv/components/Navbar";
import AreaToolsSkills from "./Skills/AreaToolsSkils";
import Projects from "./Portfolio/Projects";
import MeExperienceSection from "./Experience/MeExperienceSection";
function Home() {
    return (
        <div className="h-full bg-white">
            <NavbarHome/>
            <Particles />
            <AreaToolsSkills/>
            <Projects/>
            <MeExperienceSection/>
            <div className="bg-white h-40">
            </div>
        </div>
    );
}

export default Home;


