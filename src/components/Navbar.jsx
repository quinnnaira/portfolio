import React, { useContext, useState } from 'react';
import ThemeContext from '../context/ThemeContext';

const Navbar = ({ scrollRefs }) => {
  const { lightTheme, setTheme } = useContext(ThemeContext);

  const [navOpen, setNavOpen] = useState(false);

  const handleNavOpen = () => {
    setNavOpen((open) => !open);
  };

  const handleProjectClick = () => {
    scrollRefs.projectRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const handleAboutClick = () => {
    scrollRefs.aboutMeRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const footerClick = () => {
    scrollRefs.footerRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="py-6">
      <nav className="w-[90%] max-w-[1240px] mx-auto  items-center relative gap-16">
        <div>
          <h1 className="text-xl font-medium flex gap-1 w-fit items-center">
            Obehi <span className="font-light">Quincy</span>
          </h1>
        </div>

        <div className="absolute right-[10px] top-[50%]  translate-y-[-50%] flex items-center gap-4">
          <div
            className={`absolute  left-[5px] right-[20px] md:w-full ${
              lightTheme
                ? 'bg-black text-white md:bg-transparent md:text-black'
                : 'bg-[#00859d]'
            } md:bg-transparent md:static  ${
              navOpen
                ? 'opacity-100 top-[40px] w-[100px] right-[50px]'
                : 'opacity-0 top-[-50vh]'
            } md:opacity-100 duration-100 ease-in md:flex justify-between items-center py-6 md:py-0 shadow-md md:shadow-none rounded-lg md:rounded-none md:mr-24 gap-60`}
          >
            <ul className="flex flex-col md:flex-row items-center gap-6 md:gap-6">
              <li>
                <a
                  href="#"
                  className="hover:text-[#63f2a9] duration-300"
                  onClick={handleAboutClick}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#63f2a9] duration-300"
                  onClick={handleProjectClick}
                >
                  Projects
                </a>
              </li>
              <li>
                <a href="#" onClick={footerClick } className="hover:text-[#63f2a9] duration-300">
                  Contact Me
                </a>
              </li>
            </ul>
          </div>
          <button
            onClick={setTheme}
            className={`text-2xl ${
              lightTheme ? 'text-black' : 'text-white'
            } duration-300 ease-linear flex items-center`}
          >
            <ion-icon
              name={`${lightTheme ? 'moon' : 'sunny-outline'}`}
            ></ion-icon>
          </button>

          <button
            onClick={handleNavOpen}
            className={`text-4xl ${
              navOpen ? 'opacity-100' : 'opacity-85'
            }  duration-300 md:hidden flex items-center`}
          >
            <ion-icon name={`${navOpen ? 'close' : 'menu'}`}></ion-icon>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;


