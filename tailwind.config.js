module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    darkMode: false, // or 'media' or 'class'
    theme: {
      screens: {
        xs: "456px",
        sm: "572px",
        // sm: "640px",
        md: "865px",
        lg: "1080px",
        xl: "1440px",
      },
      colors: {
        bgcolor: "#30475E",
        bgcolor2: "#2F3234",
        bgcolor3: "rgba(0, 0, 0, 0.65)",
        bgcolor4: "rgba(255, 255, 255, 0.65)",
        primary: "#34626C",
        "primary-100": "#3C727D",
        secondary: "#F3EAC2",
        tertiary: "#2998FF",
        yellow: "#F5B461",
        "yellow-100": "#f3a949",
        red: "#EC524B",
        blue: "#9AD3BC",
        white: "#F3EAC2",
      },
      fontFamily: {
        gugi: "Gugi, cursive",
      },
      extend: {},
    },
    variants: {
      extend: {},
    },
    plugins: [],
  };