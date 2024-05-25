import { useState, useEffect } from "react";

//The Import below if for METHOD ONE.
//import { SunIcon, MoonIcon } from "../constants/icons";

// Add this "darkMode: 'class'," to the tailwindConfig File, after content but before theme.

const ThemeSwitcher = () => {

  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Use local storage to remember the user's theme preference
    const storedTheme = localStorage.getItem("theme");
    
    // Check for system's preferred theme
    const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (storedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    } else if (storedTheme === "light") {
      document.documentElement.classList.remove("dark");
      setIsDarkMode(false);
    } else if (prefersDarkMode) {
      // Set theme based on system preference
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="flex items-center space-x-2">

      {/* Button Method */}
      <button
        onClick={toggleTheme}
      >
        {/* Use onr of the button methods below to change button image on toggle */}

        {/* BTN METHOD ONE */}
        {/* {isDarkMode ? (
            // Render the first path(moon) when toggle is true
            <SunIcon className={"text-black bg-white rounded-full p-1"}/>
         ) : (
            // Render the second path(sun) when toggle is false
            <MoonIcon className={"text-white bg-black rounded-full p-1"}/>
        )} */}

        {/* BTN METHOD TWO */}
        {/* <img src={isDarkMode ? moon : sun} alt="dark mode" /> */}
        
      </button>


      {/* Toggle Switch Method */}
      {/* <label className=" inline-flex items-center cursor-pointer ">
        <input
          type="checkbox"
          checked={isDarkMode}
          onChange={toggleTheme}
          className="sr-only peer"
        />
        <div
          className=" flex items-center w-11 h-6 rounded-full bg-skin-fill
          peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-skin-focus2 "
        >
          <div
            className={` w-fit p-0.5 shadow-sm rounded-full 
              transition-all duration-300 bg-skin-fill4 text-skin-base-opposite
              ${isDarkMode  ? "translate-x-6 rotate-0" : "-rotate-180"}`
            }
          >
            {isDarkMode  ? <SunIcon className={" w-[18px] h-[18px] "}/> : <MoonIcon className={" w-[18px] h-[18px] "}/>}
          </div>
        </div>
      </label> */}
      
    </div>
  )
}

export default ThemeSwitcher
