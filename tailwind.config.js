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

        bg_secend_100: withOpacity("--bg-secend-100"),
        bg_secend_200: withOpacity("--bg-secend-200"),
        bg_secend_300: withOpacity("--bg-secend-300"),
        bg_secend_400: withOpacity("--bg-secend-400"),

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

      },
      borderColor: {
        color_border_50: withOpacity("--color-border-50"),
        color_border_100: withOpacity("--color-border-100"),
        color_border_200: withOpacity("--color-border-200"),
        color_border_300: withOpacity("--color-border-300"),
        color_border_400: withOpacity("--color-border-400"),
        color_border_500: withOpacity("--color-border-500"),
        color_border_600: withOpacity("--color-border-600"),
        color_border_700: withOpacity("--color-border-700"),
        color_border_800: withOpacity("--color-border-800"),
        color_border_900: withOpacity("--color-border-900"),
      }
    },
  },
  plugins: [],
  darkMode: "class",
};
