import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: "3px solid #14274e",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      margin: theme.spacing(2),
      outline: "none",
    },
    textField: {
      margin: "20px",
      alignItems: "center",
      justifyContent: "center",
    },
    buttonField: {
      margin: "20px",
      justifyContent: "center",
      paddingLeft: "25%",
    },
  
    typoField: {
      margin: "20px",
      justifyContent: "center",
      paddingLeft: "20%",
    },
  
    root: {
      justifyContent: "center",
      paddingLeft: "20%",
      "& > *": {
        margin: theme.spacing(1),
      },
    },
    input: {
      display: "none",
    },
    buttonAdd: {
      marginTop: "20px",
      justifyContent: "center",
      alignItems: "center",
      float: "right",
    },
    rootList: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
  }));