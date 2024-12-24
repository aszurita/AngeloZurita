import { profile } from "../../../data/Profile.js";
import { ThemeContext } from "../Shared/ThemeContext.jsx";
import { useContext } from 'react';
import Article from "./Article.jsx";
function ArticlesSection() {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);
  return (
    <div id="Articles" className={`pt-2 ${darkMode ? "bg-black" : "bg-white"} }`}>
      <h1 className={`text-5xl font-roboto-slab font-bold py-10  mt-4 max-sm:text-3xl select-none text-center`}>Articles</h1>
      <div className="flex w-full flex-wrap place-content-center ">
        <div className="w-4/5">
          {
            profile.articles && profile.articles.map((article, index) => (
              <Article key={index} article={article} />
            ))
          }
        </div>
      </div>
    </div>

  )
}
export default ArticlesSection;