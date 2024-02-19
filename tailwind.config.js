function withOpacity(cssVariable) {
  return ({ opacityValue }) => {
    return opacityValue ? `var(${cssVariable})` : `rgb(var(${cssVariable}))`;
  };
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {

        // Background ----------------
        background_body: withOpacity("--background-body"),

      },
      textColor: {

        textSecond_0: withOpacity("--color-textSecond-0"),
        textSecond_50: withOpacity("--color-textSecond-50"),
        textSecond_100: withOpacity("--color-textSecond-100"),
        textSecond_200: withOpacity("--color-textSecond-200"),
        textSecond_300: withOpacity("--color-textSecond-300"),
        textSecond_400: withOpacity("--color-textSecond-400"),
        textSecond_500: withOpacity("--color-textSecond-500"),
        textSecond_600: withOpacity("--color-textSecond-600"),
        textSecond_700: withOpacity("--color-textSecond-700"),
        textSecond_800: withOpacity("--color-textSecond-800"),
        textSecond_900: withOpacity("--color-textSecond-900"),

          // Theme ----------------

      }
    },
  },
  plugins: [],
  darkMode: "class",
};
