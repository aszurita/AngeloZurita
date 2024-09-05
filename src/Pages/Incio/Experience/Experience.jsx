function Experience({ experience }) {
  return (
    <div className="flex w-full pb-5">
      <div className="w-1/6 font-roboto-slab text-base">
        <p className="pt-2">{experience.date}</p>
      </div>
      <div className="flex flex-col w-5/6 font-roboto-slab text-base pl-8">
        <div className="w-full px-4">
          <p>
            <span className="font-bold text-xl">{experience.title}</span>,&nbsp;
            {experience.place}
          </p>
          <div className="flex flex-col place-content-start">
            {
              experience.description && experience.description.map((desc, index) => {
                return (
                  <div className="flex place-items-center">
                    <svg width="40" height="40">
                      <circle cx="20" cy="20" r="6" stroke="#f8f9fa" stroke-width="2" fill="#69b3a2" />
                    </svg>
                    <p key={index}>{desc}</p>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
