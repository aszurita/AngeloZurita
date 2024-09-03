import Particles from "./HomeDiv/ParticleBackground";
import NavbarHome from "./HomeDiv/components/navbar";
import AreaToolsSkills from "./Skills/areaToolsSkils";
import Projects from "./Portfolio/Projects";


function Home() {
    return (
        <div className="h-full bg-white">
            <NavbarHome/>
            <Particles />
            <AreaToolsSkills/>
            <Projects/>
        </div>
    );
}

export default Home;


