import { useEffect, useState } from "react";
import { lightTheme, darkTheme } from "../theme";

export const useDarkMode = () => {
  const [theme, setTheme] = useState(lightTheme);

  const setMode = (mode) => {
    mode === lightTheme
      ? localStorage.setItem("theme", "light")
      : localStorage.setItem("theme", "dark");
    setTheme(mode);
  };

  const setToggleTheme = () => {
    theme === lightTheme ? setMode(darkTheme) : setMode(lightTheme);
  };

  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    if (!localTheme) {
      return;
    }

    if (localTheme === "dark") {
      setTheme(darkTheme);
    }

    if (localTheme === "light") {
      setTheme(lightTheme);
    }
  }, []);

  return [theme, setToggleTheme];
};
