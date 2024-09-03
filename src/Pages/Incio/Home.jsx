import Particles from "./HomeDiv/ParticleBackground";
import NavbarHome from "./HomeDiv/components/navbar";
function Home() {
    return (
        <div className="h-full bg-white">
            <NavbarHome/>
            <Particles />
            <div className="flex justify-center items-center h-40 bg-gray text-cyan-50">
            </div>
        </div>
    );
}

export default Home;


