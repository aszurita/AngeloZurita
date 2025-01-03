import SocialMedia from "./socialmedia.jsx";
import { info } from "../../../../data/HomeInfo.js";
import { ThemeContext } from "../../Shared/ThemeContext.jsx";
import { useContext } from 'react';

function AboutMe() {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);
  const size_icon = 30;
  const size_icon_sm = 20;
  const string_className_max_sm = "rounded-full max-sm:hidden flex place-content-center place-items-center h-12 w-12 max-sm:h-10 max-sm:w-10 bg-black z-20";
  const string_className_sm = "rounded-full sm:hidden flex place-content-center place-items-center h-12 w-12  max-sm:h-10 max-sm:w-10 bg-black z-20";
  return (
    <div >
      <div className={`absolute top-[30%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 mt-12 h-40 bg-transparent z-10`}>
        <div className={`text-3xl md:text-4xl font-roboto-slab flex place-content-center place-items-center ${darkMode ? "text-white" : "text-black"}`} data-aos="fade-up"
      data-aos-anchor-placement="top-center"   data-aos-duration="1000" >
          <span className="hover:text-[#69B3A2]">A</span>
          <span className="hover:text-[#69B3A2]">N</span>
          <span className="hover:text-[#69B3A2]">G</span>
          <span className="hover:text-[#69B3A2]">E</span>
          <span className="hover:text-[#69B3A2]">L</span>
          <span className="hover:text-[#69B3A2]">O</span>
          <span>&nbsp;</span>
          <img src="/assets/logos/logo.png" alt="" className="w-10 h-10" />
          <span>&nbsp;</span>
          <span className="hover:text-[#69B3A2]">Z</span>
          <span className="hover:text-[#69B3A2]">U</span>
          <span className="hover:text-[#69B3A2]">R</span>
          <span className="hover:text-[#69B3A2]">I</span>
          <span className="hover:text-[#69B3A2]">T</span>
          <span className="hover:text-[#69B3A2]">A</span>
        </div>
        <div className="flex py-5 place-content-center place-items-center w-full" data-aos="fade-up"
      data-aos-anchor-placement="top-center">
          <div className={`h-1 w-[90%] max-sm:w-[100%] ${darkMode ? "bg-white" : "bg-black"} place-content-center place-items-center`}>
          </div>
        </div>
        <div className="flex place-content-center place-items-center gap-10  max-sm:gap-5 "  data-aos="fade-up"
      data-aos-anchor-placement="top-center" data-aos-duration="1500" >
          <SocialMedia sm={true} type='github' />
          <SocialMedia sm={true} type='linkedin' />
          <SocialMedia sm={true} type='X' />
          <SocialMedia sm={false} type='github' />
          <SocialMedia sm={false} type='linkedin' />
          <SocialMedia sm={false} type='X' />
        </div>
      </div>
      <div className={`absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 mt-24 h-40 w-[60%] max-sm:w-[80%] bg-transparent z-10`}>
        <div className="text-[2vw]  max-sm:text-[3vw] justify-center text-center pt-10 w-full font-roboto-slab" dangerouslySetInnerHTML={{ __html: info.introductoryparagraph }}  data-aos="fade-up" data-aos-duration="1600"  />
      </div>
    </div>
  )
}

export default AboutMe;