import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#394867",
      
    },
    secondary: {
      main: "#f1f6f9",
    },

    common: {
      main: "#efbbcf",
    },
  },
  typography: {
    fontFamily: "'Montserrat', sans-serif",
    h3: {
      fontSize: "1.5rem",
    },

    h4: {
      fontSize: "1rem",
    },
    h5: {
      fontSize: "0.8rem",
    },

    h6: {
      fontSize: "0.5rem",
    },
  },
});

export default theme;
