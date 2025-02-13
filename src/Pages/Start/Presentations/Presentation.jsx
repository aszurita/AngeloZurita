function Presentation({ presentation }) {
  return (
    <div className="flex flex-col lg:flex-row w-full gap-6 pb-5 p-5 border-r border-gray-2 rounded-xl bg-gray  shadow-lg shadow-green-calid text-black" data-aos="fade-up" data-aos-duration="300">
      {presentation.video && (
        <div className="lg:w-1/2 w-full">
          <video
            controls
            muted
            autoPlay
            loop
            className="rounded-lg shadow-lg w-full h-full object-cover"
          >
            <source src={presentation.video} type="video/mp4" />
          </video>
        </div>
      )}
      <div className="flex flex-col font-roboto-slab lg:w-1/2 w-full">
        <h2 className="text-2xl font-bold mb-4">{presentation.title}</h2>
        <p className="text-lg mb-4">{presentation.text}</p>
        {presentation.link && (
          <a
            href={presentation.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center hover:opacity-80 transition-opacity w-fit"
          >
            <img src="assets/logos/Medium.svg" alt="Medium" className="h-10 w-20" />
          </a>
        )}
      </div>
    </div>
  );
};

export default Presentation;