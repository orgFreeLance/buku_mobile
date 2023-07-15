import { extendTheme } from "native-base";

const newTheme = {
    brand: {
      900: "#FE3092",
      800: "#FF6C43",
      700: "#1ce4ff",
    },
  };

  const theme = extendTheme({ colors: newTheme });

  export default theme;