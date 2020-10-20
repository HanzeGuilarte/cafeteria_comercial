import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#8675a9",
    },
    secondary: {
      main: "#c3aed6",
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
