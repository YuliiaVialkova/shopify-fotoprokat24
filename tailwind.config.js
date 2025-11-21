module.exports = {
  content: ["./**/*.liquid", "./**/*.json", "./**/*.html", "./**/*.js"],
  theme: {
    extend: {
      colors: {
        main: "#000000",
        secondary: "#75758A",
        accent: "#60B021",
        "btn-main": "#000000",
        "btn-secondary": "#FFFFFF",
        border: {
          main: "#EFEFEF",
        },
      },
      backgroundImage: {
        "btn-secondary": "linear-gradient(180deg, #8EE902 0%, #4F9C2C 100%)",
      },
      backgroundColor: {
        main: "#FFFFFF",
        secondary: "#F5F5F5",
        additional: "#4F9C2C",
        "btn-main": "#FFFFFF",
        "btn-additional": "#4F9C2C",
      },
    },
  },
  plugins: [],
  variantGroups: true,
};
