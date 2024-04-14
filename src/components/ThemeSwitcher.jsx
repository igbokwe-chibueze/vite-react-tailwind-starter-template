import { useState, useEffect } from "react";

//The Import below if for METHOD ONE.
//import { SunIcon, MoonIcon } from "../constants/icons";

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
      {/* None animated button */}
      <button
        onClick={toggleTheme}
         
      >
        {/* Use any of the methos below to change button image on toggle */}

        {/* METHOD ONE */}
        {/* {isDarkMode ? (
            // Render the first path(moon) when toggle is true
            <SunIcon className={"text-black bg-white rounded-full p-1"}/>
         ) : (
            // Render the second path(sun) when toggle is false
            <MoonIcon className={"text-white bg-black rounded-full p-1"}/>
        )} */}

        {/* METHOD TWO */}
        {/* <img src={isDarkMode ? moon : sun} alt="dark mode" /> */}
        
      </button>
      
    </div>
  )
}

export default ThemeSwitcher