import { useRef, useEffect } from 'react';

function Article({ article }) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = 1;
    }
  }, [article.video]);

  return (
    <div className="flex flex-col lg:flex-row w-full gap-6 pb-5 p-5 border-r border-gray-2 rounded-xl bg-gray  shadow-lg shadow-green-calid text-black" data-aos="fade-up">
      <div className="flex flex-col font-roboto-slab lg:w-1/2 w-full">
        <h2 className="text-2xl font-bold mb-4">{article.title}</h2>
        <p className="text-lg mb-4">{article.text}</p>
        {article.link && (
          <a
            href={article.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center hover:opacity-80 transition-opacity w-fit"
          >
            <img src="assets/logos/Medium.svg" alt="Medium" className="h-10 w-20" />
          </a>
        )}
      </div>

      {article.video && (
        <div className="lg:w-1/2 w-full">
          <video
            ref={videoRef}
            controls
            className="rounded-lg shadow-lg w-full h-full object-cover"
          >
            <source src={article.video} type="video/mp4" />
          </video>
        </div>
      )}
    </div>
  );
};

export default Article;