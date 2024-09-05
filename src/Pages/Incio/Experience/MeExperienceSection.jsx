import Profile from "./Profile";
import Experience from "./experience";
import { profile } from "../../../data/Profile";
function MeExperienceSection() {
  return (
    <div id="AboutMe">
      <h1 className="text-5xl font-roboto-slab font-bold py-10  mt-4 max-sm:text-3xl select-none text-center">About Me</h1>
      <div className="flex w-full flex-wrap place-content-center ">
        <div className="w-1/3 min-w-[325px]">
          <Profile />
        </div>
        <div className="w-2/3 max-lg:pt-5">
          <div className="w-full">
            <p className="text-2xl font-roboto-slab font-bold select-none">Experiences</p>
          </div>
          {
            profile.experiences && profile.experiences.map((experience, index) => (
              <Experience key={index} experience={experience} />
            ))
          }
          <div className="w-full">
            <p className="text-2xl font-roboto-slab font-bold select-none">Education</p>
            {
              profile.education && profile.education.map((education, index) => {
                return (
                  <div className="flex place-items-center font-roboto-slab text-base">
                  <svg width="40" height="40">
                    <circle cx="20" cy="20" r="6" stroke="#f8f9fa" stroke-width="2" fill="#69b3a2" />
                  </svg>
                  <span key={index}>{education.title}</span>
                </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>

  )
}
export default MeExperienceSection;