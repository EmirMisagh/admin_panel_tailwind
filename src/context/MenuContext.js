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
  toggleMode: () => {},
});

export const useSidebarMode = () => {
  const [sidebarMode, setSidebarMode] = useState(true);

  const sidebarModeHandle = useMemo(
    () => ({
      toggleMode: () => {
        setSidebarMode(!sidebarMode);
      },
    }),
    [sidebarMode]
  );

  return [sidebarMode, sidebarModeHandle];
};

export const SettingModeContext = createContext({
  toggleLoginMode: () => {},
});

export const useSettingMode = () => {
  const [settingMode, setSettingMode] = useState(true);

  const settingModeHandle = useMemo(
    () => ({
      toggleMode: () => {
        setSettingMode(!settingMode);
      },
    }),
    [settingMode]
  );

  return [settingMode, settingModeHandle];
};