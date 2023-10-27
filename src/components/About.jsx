import React, { useContext } from "react";
import picture from "../images/obehi.jpg";
import ThemeContext from "../context/ThemeContext";

const About = ({ aboutMeRef }) => {
  const { lightTheme } = useContext(ThemeContext);

  return (
    <section className={`py-10`} ref={aboutMeRef}>
      <h1
        className={`text-center text-2xl md:text-3xl py-2 px-10 font-bold border-b-4 ${
          lightTheme ? "border-b-[#005269]" : "border-b-[#921267]"
        } duration-300 w-fit mx-auto`}
        
      >
        About Me
      </h1>
      <div className="w-[90%] max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center py-5">
        <img
          src={picture}
          alt="obehi quincy"
          className="h-[150px] w-[150px] md:h-[350px] md:w-[350px] object-cover rounded-full mx-auto md:mx-0"
         
        />
        <p className="leading-loose text-md md:text-lg" >
        A Frontend Developer with deep understanding of usability goals. Perfectly marries functional requirements and creative elements to produce optimal interface.Skilled at managing time, projects and collaborating with team mates to accomplish development goal
        </p>
      </div>
    </section>
  );
};

export default About;
