import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const Footer = ({footerScroll}) => {
  const { lightTheme } = useContext(ThemeContext);
  return (
    <footer ref={footerScroll}
      className={`py-20 ${
        lightTheme ? "bg-[#005269]" : "bg-[black]"
      } text-white`}
    >
      <div className="w-[90%] max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 py-4">
        <div className="md:col-span-2">
          <h5 className={`mb-3 text-2xl md:text-3xl font-medium`}>Obehi Quincy</h5>
         
          <ul className="flex items-center  gap-6 md:w-full mt-2 md:mt-4">
            <li>
              <a
                href="https://github.com/quinnnaira"
                className="text-2xl flex items-center gap-1 hover:text-[#63f2a9] duration-300"
                target="_blank"
              >
                <ion-icon name="logo-github"></ion-icon>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/obehi-isikhuemen-297756205/"
                target="_blank"
                className="text-2xl flex items-center gap-1 hover:text-[#63f2a9] duration-300"
              >
                <ion-icon name="logo-linkedin"></ion-icon>
              </a>
            </li>
           
          </ul>
        </div>
        <div>
          <div className="text-md flex items-center gap-1 hover:text-[#63f2a9] duration-300">
            <ion-icon name="location"></ion-icon> Lagos, Nigeria
          </div>
          <div className="text-md flex items-center gap-1 hover:text-[#63f2a9] duration-300 my-3">
            <ion-icon name="call"></ion-icon> +2347056877425
          </div>
          <div className="text-md flex items-center gap-1 hover:text-[#63f2a9] duration-300">
            <ion-icon name="mail-unread"></ion-icon> obehiisi@gmail.com
          </div>
        </div>
        <div>
          <p>&copy; Obehi Quincy {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
