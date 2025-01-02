import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Start/Home";
import { ThemeProvider } from "./Pages/Start/Shared/ThemeContext";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      once: false,
      duration: 1000,
      offset: 100,
      delay: 0,
      easing: "ease-in-out-back",
    });
  }, []);

  function NotFound() {
    return <div>404 Not Found</div>;
  }

  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
