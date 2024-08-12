import { useMemo } from "react";
import { useSelector } from "react-redux";

export const tokens = (mode) => ({
  ...(mode === "English"
    ? {
        user: {
          admin: "Admin",
          manager: "Manager",
          user: "User",
          400: "#858585",
          500: "#666666",
          600: "#525252",
          700: "#3d3d3d",
          800: "#292929",
          900: "#141414",
        },
        sidebar: {
          overview: "OVERVIEW",
          app: "App",
          files: "Files",
          calendar: "Calendar",
          managment: "Managment",
          list: "List",
          create: "Create",
          800: "#080b12",
          900: "#040509",
        },
        setting: {
          100: "#dbf5ee",
          200: "#b7ebde",
          300: "#94e2cd",
          400: "#70d8bd",
          500: "#4cceac",
          600: "#3da58a",
          700: "#2e7c67",
          800: "#1e5245",
          900: "#0f2922",
        },
        redAccent: {
          100: "#f8dcdb",
          200: "#f1b9b7",
          300: "#e99592",
          400: "#e2726e",
          500: "#db4f4a",
          600: "#af3f3b",
          700: "#832f2c",
          800: "#58201e",
          900: "#2c100f",
        },
        blueAccent: {
          100: "#e1e2fe",
          200: "#c3c6fd",
          300: "#a4a9fc",
          400: "#868dfb",
          500: "#6870fa",
          600: "#535ac8",
          700: "#3e4396",
          800: "#2a2d64",
          900: "#151632",
        },
      }
    : mode === "French" ? {
        user: {
          admin: "Administratrice",
          manager: "Directrice",
          user: "Utilisatrice",
          300: "#3d3d3d",
          400: "#525252",
          500: "#666666",
          600: "#858585",
          700: "#a3a3a3",
          800: "#c2c2c2",
          900: "#e0e0e0",
        },
        sidebar: {
          overview: "APERÇU",
          files: "Fichiers",
          calendar: "Calendrier",
          managment: "Gestion",
          list: "Liste",
          create: "Créer",
          700: "#727681",
          800: "#a1a4ab",
          900: "#d0d1d5",
        },
        setting: {
          100: "#0f2922",
          200: "#1e5245",
          300: "#2e7c67",
          400: "#3da58a",
          500: "#4cceac",
          600: "#70d8bd",
          700: "#94e2cd",
          800: "#b7ebde",
          900: "#dbf5ee",
        },
        redAccent: {
          100: "#2c100f",
          200: "#58201e",
          300: "#832f2c",
          400: "#af3f3b",
          500: "#db4f4a",
          600: "#e2726e",
          700: "#e99592",
          800: "#f1b9b7",
          900: "#f8dcdb",
        },
        blueAccent: {
          100: "#151632",
          200: "#2a2d64",
          300: "#3e4396",
          400: "#535ac8",
          500: "#6870fa",
          600: "#868dfb",
          700: "#a4a9fc",
          800: "#c3c6fd",
          900: "#e1e2fe",
        },
      }
    :{
      user: {
        admin: "Administratrice",
        manager: "Directrice",
        user: "Utilisatrice",
        300: "#3d3d3d",
        400: "#525252",
        500: "#666666",
        600: "#858585",
        700: "#a3a3a3",
        800: "#c2c2c2",
        900: "#e0e0e0",
      },
      sidebar: {
        overview: "APERÇU",
        app: "App",
        files: "Fichiers",
        400: "#f2f0f0",
        500: "#141b2d",
        600: "#434957",
        700: "#727681",
        800: "#a1a4ab",
        900: "#d0d1d5",
      },
      greenAccent: {
        100: "#0f2922",
        200: "#1e5245",
        300: "#2e7c67",
        400: "#3da58a",
        500: "#4cceac",
        600: "#70d8bd",
        700: "#94e2cd",
        800: "#b7ebde",
        900: "#dbf5ee",
      },
      redAccent: {
        100: "#2c100f",
        200: "#58201e",
        300: "#832f2c",
        400: "#af3f3b",
        500: "#db4f4a",
        600: "#e2726e",
        700: "#e99592",
        800: "#f1b9b7",
        900: "#f8dcdb",
      },
      blueAccent: {
        100: "#151632",
        200: "#2a2d64",
        300: "#3e4396",
        400: "#535ac8",
        500: "#6870fa",
        600: "#868dfb",
        700: "#a4a9fc",
        800: "#c3c6fd",
        900: "#e1e2fe",
      },
    }
    ),
});

export const languageSetting = (mode) => {
  const language = tokens(mode);
  return {
    user: {
      admin: language.user["admin"],
      manager: language.user["manager"],
      user: language.user["user"],
    },
    sidebar: {
      overview: language.sidebar["overview"],
      files: language.sidebar["files"],
      calendar: language.sidebar["calendar"],
      managment: language.sidebar["managment"],
      list: language.sidebar["list"],
      create: language.sidebar["create"],
    },
    loginPage: {
      left: "Hi, Welcome back",
    },
  };
};
export const useMode = () => {
  const language = useSelector((state) => state.languageReducer.language);
  const Language = useMemo(() => languageSetting(language), []);

  return Language;
};
export default useMode;
