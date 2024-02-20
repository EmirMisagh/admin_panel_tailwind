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
  const [sidebarMode, setSidebarMode] = useState(false);

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

export const SettingModeContext = createContext({
  toggleLoginMode: () => {},
});

export const useSettingMode = () => {
  const [settingMode, setSettingMode] = useState(false);

  const settingModeHandle = useMemo(
    () => ({
      toggleLoginMode: () => {
        setSettingMode(!settingMode);
      },
    }),
    [settingMode]
  );

  return [settingMode, settingModeHandle];
};
