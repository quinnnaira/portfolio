import React, { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';
import data from '../data.json';

const Projects = ({ projectRef }) => {
  const { lightTheme } = useContext(ThemeContext);

  return (
    <section className={`py-10`} ref={projectRef}>
      <h1
        className={`text-center text-2xl md:text-3xl py-2 px-10 font-bold border-b-4 ${lightTheme ? 'border-b-[#005269]' : 'border-b-[#921267]'
          } duration-300 w-fit mx-auto`}
      >
        Projects
      </h1>

      {data.data.map((item) => (
        <div key={item.id}>

          <div className="py-5">
            <div className="w-[90%] max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 py-4">
              <img
                src={item.images}
                alt="DevHire"
                className="rounded-3xl"
                data-aos="fade-right"
              />
              <div data-aos="fade-left">
                <h2 className="text-xl md:text-2xl font-medium">
                  {item.name}
                </h2>
                <p className="leading-loose py-6  ">
                  {item.text}
                </p>

                <div className="flex gap-6">
                  <span>
                    <a
                      href={item.github}
                      target="_blank"
                      className={`flex items-center gap-1 text-md font-normal ${lightTheme
                        ? 'text-[#005269] visited:text-[#005269]'
                        : 'text-[#921267]  visited:text-[#921267]'
                        } hover:opacity-75 text-xl`}
                    >
                      <ion-icon name="logo-github"></ion-icon> Github
                    </a>
                  </span>
                  <span>
                    <a
                      href={item.visit}
                      target="_blank"
                      className={`flex items-center gap-1 text-md font-normal ${lightTheme
                        ? 'text-[#005269] visited:text-[#005269]'
                        : 'text-[#921267]  visited:text-[#921267]'
                        } hover:opacity-75 text-xl`}
                    >
                      <ion-icon name="eye"></ion-icon> Visit
                    </a>
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>
      ))}
    </section>
  );
};

export default Projects;
