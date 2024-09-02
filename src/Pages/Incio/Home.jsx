import Particles from "./HomeDiv/ParticleBackground";

function Home() {
    return (
        <div className="h-full bg-white">
            <Particles />
            <div className="flex justify-center items-center h-40 bg-slate-400 text-cyan-50">
            </div>
            <div className="flex justify-center items-center h-40 bg-slate-400 text-cyan-50">
            </div>
            <div className="flex justify-center items-center h-40 bg-slate-400 text-cyan-50">
            </div>
            <div className="flex justify-center items-center h-40 bg-slate-400 text-cyan-50">
            </div>
        </div>
    );
}

export default Home;


