import React, { useContext, useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import About from "./components/About";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import ThemeContext from "./context/ThemeContext";

const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  const { lightTheme } = useContext(ThemeContext);
  const aboutMeRef = useRef(null)
  const projectRef = useRef(null)
  const footerRef =useRef(null)

  const scrollRefs = {
    aboutMeRef,
    projectRef,
    footerRef
  }

  return (
    <div
      className={`${
        lightTheme ? "bg-[#faf9f6] text-black" : "bg-[#2d2e32] text-white"
      } min-h-screen duration-300 ease-linear`}
    >
      
      <Navbar scrollRefs={scrollRefs}/>
      <Hero />
      <About aboutMeRef={aboutMeRef}/>
      <Projects projectRef={projectRef} />
      <Footer footerScroll={footerRef}/>
    </div>
  );
};

export default App;
