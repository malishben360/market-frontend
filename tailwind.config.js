// tailwind.config.js
module.exports = {
  purge: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        white: "white",
        veryLightCyan: "hsl(180,28.57%,94.51%)",
        veryLightGray: "hsl(180,4.35%,86.47%)",
        brightCyanLight: "hsl(186.67,32.14%,89.02%)",
        brightCyan: "hsl(184, 94%, 31%)",
        brihtGrayishCyan: "hsl(184.19,18.3%,46.08%)",
        veryDarkCyan: "hsl(188.06,100%,13.14%)",
        brightRed: "hsl(339.76,100%,50%)",
        gray: "hsl(229.09,4.38%,50.78%)",
      },
      letterSpacing: {
        tightest: "-.075em",
        tighter: "-.05em",
        tight: "-.025em",
        normal: "0",
        wide: ".025em",
        wider: ".05em",
        widest: ".1em",
      },
      fontFamily: {
        pacific: ['"Pacifico"'],
        nunito: ['"Nunito+Sans"'],
        sans: [
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
        serif: [
          "ui-serif",
          "Georgia",
          "Cambria",
          "Times New Roman",
          "Times",
          "serif",
        ],
        mono: [
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "Liberation Mono",
          "Courier New",
          " monospace",
        ],
      },
      height: {
        110: "40rem",
        90: "20rem",
      },
      width: {
        110: "40rem",
        90: "22rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("tw-elements/dist/plugin")],
};
