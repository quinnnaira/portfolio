import React, { useContext } from "react";
import picture from "/images/obehi.jpg";
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
        <div className="flex justify-center">
        <img
          src={picture}
          alt="obehi quincy"
          className="h-[150px] w-[150px] md:h-[350px] md:w-[350px] object-cover rounded-full mx-auto md:mx-0"
         
        />
        </div>
        <p className="leading-loose text-md md:text-lg" >
       A Frontend Developer with a deep understanding of usability goals.
Passionate about creating interfaces that are both functional and visually appealing.
Expert at translating design concepts into seamless, responsive web experiences.
Skilled at combining creative elements with practical requirements to enhance user engagement.
Proficient in managing time effectively, ensuring projects are completed on schedule.
Adept at collaborating with team members to achieve development objectives efficiently.
Constantly learning new technologies to stay ahead in the fast-evolving frontend landscape.
Committed to delivering high-quality, user-centric solutions that drive business success.
        </p>
      </div>
    </section>
  );
};

export default About;
