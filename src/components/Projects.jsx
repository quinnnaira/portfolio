import React, { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';
import ecommerce from '../images/ecommerce.png';
import portfolio from '../images/portfolio.png';
import todoapp from '../images/todo.png';
import calculator from '../images/calculator.png';

const Projects = ({ projectRef }) => {
  const { lightTheme } = useContext(ThemeContext);

  return (
    <section className={`py-10`} ref={projectRef}>
      <h1
        className={`text-center text-2xl md:text-3xl py-2 px-10 font-bold border-b-4 ${
          lightTheme ? 'border-b-[#005269]' : 'border-b-[#921267]'
        } duration-300 w-fit mx-auto`}
      >
        Projects
      </h1>
      <div className="py-5">
        <div className="w-[90%] max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 py-4">
          <img
            src={ecommerce}
            alt="DevHire"
            className="rounded-3xl"
            data-aos="fade-right"
          />
          <div data-aos="fade-left">
            <h2 className="text-xl md:text-2xl font-medium">
              Quinnnaira store
            </h2>
            <p className="leading-loose">
              An ecommerce website that serves as a digital platform for buying
              and selling products or services. Its primary function is to
              enable online transactions, making it convenient for customers to
              browse, select, purchase
            </p>
            <div className="my-4">
              <p>
                <strong>Tools: </strong>html & jsx, react.js, redux, bootstrap,
                fake Store API, vscode, GitHub
              </p>
            </div>
            <div className="flex gap-3">
              <span>
                <a
                  href="https://github.com/quinnnaira/Quinnnaira-store"
                  target="_blank"
                  className={`flex items-center gap-1 text-md font-normal ${
                    lightTheme
                      ? 'text-[#005269] visited:text-[#005269]'
                      : 'text-[#921267]  visited:text-[#921267]'
                  } hover:opacity-75 text-xl`}
                >
                  <ion-icon name="logo-github"></ion-icon> Github
                </a>
              </span>
              <span>
                <a
                  href="https://quinnnaira-store.vercel.app/"
                  target="_blank"
                  className={`flex items-center gap-1 text-md font-normal ${
                    lightTheme
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
        <div className="w-[90%] max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 py-4">
          <img
            src={portfolio}
            alt="DevHire"
            className="rounded-3xl"
            data-aos="fade-right"
          />
          <div data-aos="fade-left">
            <h2 className="text-xl md:text-2xl font-medium">Portfolio</h2>
            <p className="leading-loose">
              My portfolio website functions as a platform where people can
              display my projects, information about me, and demonstrate my
              proficiency with modern web development technologies and tools. It
              allows potential employers or clients to explore my work and learn
              more about my capabilities in a visually appealing and
              user-friendly manner
            </p>
            <div className="my-4">
              <p>
                <strong>Tools: </strong>html & jsx, react.js, tailwind css,
                vscode, Github
              </p>
            </div>
            <div className="flex gap-3">
              <span>
                <a
                  href="https://github.com/quinnnaira/portfolio"
                  target="_blank"
                  className={`flex items-center gap-1 text-md font-normal ${
                    lightTheme
                      ? 'text-[#005269] visited:text-[#005269]'
                      : 'text-[#921267]  visited:text-[#921267]'
                  } hover:opacity-75 text-xl`}
                >
                  <ion-icon name="logo-github"></ion-icon> Github
                </a>
              </span>
              <span>
                <a
                  href="https://obehi-portfolio.vercel.app/"
                  target="_blank"
                  className={`flex items-center gap-1 text-md font-normal ${
                    lightTheme
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
        <div className="w-[90%] max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 py-4">
          <img
            src={todoapp}
            alt="DevHire"
            className="rounded-3xl"
            data-aos="fade-right"
          />
          <div data-aos="fade-left">
            <h2 className="text-xl md:text-2xl font-medium">To do list app</h2>
            <p className="leading-loose">
              Todo- list app allow users to create, manage, and organize their
              to-do lists. Users can add tasks, mark them as completed, edit
              task details, and remove tasks as needed
            </p>
            <div className="my-4">
              <p>
                <strong>Tools: </strong>html & jsx, react.js, bootstrap, vscode,
                GitHub
              </p>
            </div>
            <div className="flex gap-3">
              <span>
                <a
                  href="https://github.com/quinnnaira/todo-list-app"
                  target="_blank"
                  className={`flex items-center gap-1 text-md font-normal ${
                    lightTheme
                      ? 'text-[#005269] visited:text-[#005269]'
                      : 'text-[#921267]  visited:text-[#921267]'
                  } hover:opacity-75 text-xl`}
                >
                  <ion-icon name="logo-github"></ion-icon> Github
                </a>
              </span>
              <span>
                <a
                  href="https://obehi-todo-lists-app.vercel.app/"
                  target="_blank"
                  className={`flex items-center gap-1 text-md font-normal ${
                    lightTheme
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
        <div className="w-[90%] max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 py-4">
          <img
            src={calculator}
            alt="DevHire"
            className="rounded-3xl"
            data-aos="fade-right"
          />
          <div data-aos="fade-left">
            <h2 className="text-xl md:text-2xl font-medium">Calculator App</h2>
            <p className="leading-loose">
              Calculator app allows users to input numeric values and then
              calculate results with the desired operation. The app also
              includes features for clearing the input, displaying results, and
              handling decimal numbers.
            </p>
            <div className="my-4">
              <p>
                <strong>Tools: </strong>html5, Vanilla JavaScript, css3,
                cssgrid, vscode, GitHub
              </p>
            </div>
            <div className="flex gap-3">
              <span>
                <a
                  href="https://github.com/quinnnaira/calculatorApp"
                  target="_blank"
                  className={`flex items-center gap-1 text-md font-normal ${
                    lightTheme
                      ? 'text-[#005269] visited:text-[#005269]'
                      : 'text-[#921267]  visited:text-[#921267]'
                  } hover:opacity-75 text-xl`}
                >
                  <ion-icon name="logo-github"></ion-icon> Github
                </a>
              </span>
              <span>
                <a
                  href="https://effervescent-mousse-a71268.netlify.app/"
                  target="_blank"
                  className={`flex items-center gap-1 text-md font-normal ${
                    lightTheme
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
    </section>
  );
};

export default Projects;
