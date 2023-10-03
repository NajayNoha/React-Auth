import { NavLink } from "react-router-dom";
import RdvDrop from "./RdvDrop";
import SmDrop from "./SmDrop";
import { useEffect, useState } from "react";
// import Menu from '../../assets/menu.png'
const MainHeader = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
  );

  const toggleTheme = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark");
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }
  }, [isDarkMode]);

  return (
    <div>
      <header className="w-full hidden md:block">
        <nav className="m-4 py-2 px-4 bg-lighter-lilac/50 dark:bg-[#080a1c] dark:text-light-purple rounded-xl flex items-center space-x-4 flex-1 shadow-md shadow-lighter-lilac border-2 border-lighter-purple">
          <div className="flex-1 w-[40%] dark:text-light-purple text-title-purple font-serif tracking-tighter font-semibold">
            RdvPermis
          </div>
          <button
            className="text-base-purple/75 dark:text-light-purple hover:bg-[#d2afff] hover:text-base-purple hover:border-lighter-purple hover:border-1  py-2 px-4 rounded-md"
            onClick={() => {
              toggleTheme();
            }}
          >
            {isDarkMode ? "Light Mode" : "Dark Mode"}
          </button>
          <div className="w-30 rounded-xl  text-base-purple/75 dark:text-light-purple flex items-center space-x-6 flex-3">
            <RdvDrop />
            <NavLink
              to="/login"
              className="hover:bg-[#d2afff] hover:text-base-purple text-base-purple/75 dark:text-light-purple py-2 px-4 rounded"
            >
              Condidats
            </NavLink>
            <button
              className="flex-2 hover:bg-[#d2afff] hover:text-base-purple/75 dark:text-light-purple  py-2 px-4 rounded hover:underline"
              onClick={() => {}}
            >
              {" "}
              LogOut{" "}
            </button>
          </div>
        </nav>
      </header>
      <header className="w-full md:hidden sm:block">
        <nav className="mx-2 text-base-purple px-4 bg-lighter-lilac dark:bg-[#080a1c] dark:text-light-purple rounded-xl flex items-center space-x-4 flex-1 shadow-md shadow-lighter-lilac border-2 border-lighter-purple">
          <div className="flex-1 w-[40%] dark:text-light-purple text-title-purple font-serif tracking-tighter font-semibold">
            RdvPermis
          </div>
          <button
            className="text-base-purple/75 dark:text-light-purple hover:bg-[#d2afff]/50 hover:text-base-purple hover:border-lighter-purple hover:border-1  py-2 px-4 rounded-md"
            onClick={() => {
              toggleTheme();
            }}
          >
            {isDarkMode ? "Light" : "Dark"}
          </button>
          <SmDrop />
        </nav>
      </header>
    </div>
  );
};

export default MainHeader;
