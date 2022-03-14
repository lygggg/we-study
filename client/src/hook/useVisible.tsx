import { useState, useRef, useEffect } from "react";

export const useVisible = (initialIsVisible) => {
  const [isVisible, setIsVisible] = useState(initialIsVisible);
  const ref = useRef(null);

  const ClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", ClickOutside, true);
    return () => {
      document.removeEventListener("click", ClickOutside, true);
    };
  }, []);

  return [ref, isVisible, setIsVisible];
};
