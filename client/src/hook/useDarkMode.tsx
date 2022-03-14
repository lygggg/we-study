import { useEffect, useState } from "react";
import { lightTheme, darkTheme, ITheme } from "../theme";

export const useDarkMode = (): [ITheme, () => void] => {
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

  useEffect(() => {
    if (theme !== lightTheme) {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    }
  }, [setToggleTheme]);

  return [theme, setToggleTheme];
};
