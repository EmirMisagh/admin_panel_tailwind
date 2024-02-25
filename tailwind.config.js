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
        background_box: withOpacity("--color-box"),

        bg_secend_100: withOpacity("--bg-secend-100"),
        bg_secend_200: withOpacity("--bg-secend-200"),
        bg_secend_300: withOpacity("--bg-secend-300"),
        bg_secend_400: withOpacity("--bg-secend-400"),

         // RED THEME -----------------------------------------

         themered100: withOpacity("--color-themered-100"),
         themered200: withOpacity("--color-themered-200"),
 
         // blue THEME -----------------------------------------
 
         themeblue100: withOpacity("--color-themeblue-100"),
         themeblue200: withOpacity("--color-themeblue-200"),
 
         // PURPLE THEME -----------------------------------------
 
         themepurple100: withOpacity("--color-themepurple-100"),
         themepurple200: withOpacity("--color-themepurple-200"),
 
         // YELLOW THEME -----------------------------------------
 
         themeyellow100: withOpacity("--color-themeyellow-100"),
         themeyellow200: withOpacity("--color-themeyellow-200"),
 
         // PURPLE THEME -----------------------------------------
 
         themebluesky100: withOpacity("--color-themebluesky-100"),
         themebluesky200: withOpacity("--color-themebluesky-200"),
 
         // PURPLE THEME -----------------------------------------
 
         themegreen100: withOpacity("--color-themegreen-100"),
         themegreen200: withOpacity("--color-themegreen-200"),
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

        // Theme --------------------------------------------------
        // --------------------------------------------------------

        theme100: withOpacity(" --theme-text-100"),
        theme200: withOpacity(" --theme-text-200"),
        theme300: withOpacity(" --theme-text-300"),
        theme400: withOpacity(" --theme-text-400"),
        theme500: withOpacity(" --theme-text-500"),
        theme600: withOpacity(" --theme-text-600"),
        theme700: withOpacity(" --theme-text-700"),
        theme800: withOpacity(" --theme-text-800"),
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
      },
      backgroundColor: {
        bg_0: withOpacity("--color-back-gray-0"),
        bg_50: withOpacity("--color-back-gray-50"),
        bg_100: withOpacity("--color-back-gray-100"),
        bg_200: withOpacity("--color-back-gray-200"),
        bg_300: withOpacity("--color-back-gray-300"),
        bg_400: withOpacity("--color-back-gray-400"),
        bg_500: withOpacity("--color-back-gray-500"),
        bg_600: withOpacity("--color-back-gray-600"),
        bg_700: withOpacity("--color-back-gray-700"),
        bg_800: withOpacity("--color-back-gray-800"),
        bg_900: withOpacity("--color-back-gray-900"),

         // COVER --------------------------------------------------
        // --------------------------------------------------------

        bg_cover_100: withOpacity("--color-cover-100"),
        bg_cover_200: withOpacity("--color-cover-200"),
        bg_cover_300: withOpacity("--color-cover-300"),
        bg_cover_400: withOpacity("--color-cover-400"),
        bg_cover_500: withOpacity("--color-cover-500"),
        bg_cover_600: withOpacity("--color-cover-600"),
        bg_cover_700: withOpacity("--color-cover-700"),
        bg_cover_800: withOpacity("--color-cover-800"),
        bg_cover_900: withOpacity("--color-cover-900"),

        // Theme --------------------------------------------------
        // --------------------------------------------------------

        theme100: withOpacity(" --theme-bg-100"),
        theme200: withOpacity(" --theme-bg-200"),
        theme300: withOpacity(" --theme-bg-300"),
        theme400: withOpacity(" --theme-bg-400"),
        theme500: withOpacity(" --theme-bg-500"),
        theme600: withOpacity(" --theme-bg-600"),
        theme700: withOpacity(" --theme-bg-700"),
        theme800: withOpacity(" --theme-bg-800"),
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
