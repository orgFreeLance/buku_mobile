import { extendTheme } from "native-base";

const newTheme = {
  brand: {
    900: "#FE3092",
    800: "#FF6C43",
    700: "#1ce4ff",
    600: "#C4C4C4",
    500: "#EAEAEA",
    main: "#02448e",
    secondary: "#00a8cb",
    white: "white"
  },
};

const theme = extendTheme({ colors: newTheme });

export default theme;