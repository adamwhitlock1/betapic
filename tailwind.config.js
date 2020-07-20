module.exports = {
  purge: [],
  theme: {
    linearGradientColors: (theme) => theme("colors"),
    radialGradientColors: (theme) => theme("colors"),
    conicGradientColors: (theme) => theme("colors"),
    extend: {
      colors: {
        cyan: "#9cdbff",
        magenta: "#ea148c",
      },
    },
  },
  variants: {},
  plugins: [require("tailwindcss-gradients")],
};
