import Particles from "./Background/ParticleBackground";

function Home() {
    return (
        <div className="h-full bg-white">
            <Particles />
            <div className="flex justify-center items-center h-full text-cyan-50">
                Hola como estas
            </div>
        </div>
    );
}

export default Home;


