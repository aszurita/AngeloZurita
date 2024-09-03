import Particles from "./HomeDiv/ParticleBackground";
import NavbarHome from "./HomeDiv/components/navbar";
import AreaSkills from "./Skills/areaSkill";

function Home() {
    return (
        <div className="h-full bg-white">
            <NavbarHome/>
            <Particles />
            <AreaSkills/>
        </div>
    );
}

export default Home;


