import { createContext, useState, useMemo } from "react";

export const DarkModeContext = createContext({
  toggleLoginMode: () => {},
});

export const useDarkMode = () => {
  const [darkMode, setDarkMode] = useState(false);

  useMemo(() => {
    const Modetoken = window.localStorage.getItem("darkmode");
    setDarkMode(Modetoken === "true" ? true : false);
  }, []);
  const darkModeHandle = useMemo(
    () => ({
      toggleLoginMode: () => {
        setDarkMode(!darkMode);
        window.localStorage.setItem("darkmode", JSON.stringify(!darkMode));
      },
    }),
    [darkMode]
  );

  return [darkMode, darkModeHandle];
};

export const SidebarModeContext = createContext({
  toggleLoginMode: () => {},
});

export const useSidebarMode = () => {
  const [sidebarMode, setSidebarMode] = useState(true);

  const sidebarModeHandle = useMemo(
    () => ({
      toggleLoginMode: () => {
        setSidebarMode(!sidebarMode);
      },
    }),
    [sidebarMode]
  );

  return [sidebarMode, sidebarModeHandle];
};
