import Particles from "./HomeDiv/ParticleBackground";
import NavbarHome from "./HomeDiv/components/navbar";
import AreaTAreaToolsSkillsools from "./Skills/areaToolsSkils";

function Home() {
    return (
        <div className="h-full bg-white">
            <NavbarHome/>
            <Particles />
            <AreaTAreaToolsSkillsools/>
        </div>
    );
}

export default Home;


