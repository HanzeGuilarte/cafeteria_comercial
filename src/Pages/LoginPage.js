import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import Container from "@material-ui/core/Container";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { SideContext } from "../Context/InitialContext";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import ButtonWait from "../Component/ButtonWait";
import Image from "../Images/cook1.jpg";
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/"></Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    backgroundImage: `url(${Image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "85%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  image: {
    backgroundImage: "url(https://source.unsplash.com/random)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  boxStyle: {
    borderRadius: "5%",
    borderColor: "black",
    backgroundColor: "#f5f5f5",
  },

  completo: {
    backgroundColor: "#364f6b",
  },
  icon: {
    color: "#185B6",
  },
}));

export default function LoginPage() {
  const { handleAuthenticate } = React.useContext(SideContext);

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [username, setUserName] = React.useState("");
  const [isMember, setIsMember] = React.useState(true);

  const history = useHistory();
  const classes = useStyles();

  const handleChange = (event) => {
    const value = event.target.value;
    if (event.target.name === "password") setPassword(value);
    if (event.target.name === "username") setUserName(value);
  };

  const handleSubmit = () => {};

  return (
    <Grid container component="main" className={classes.root}>
      <Container component="main" maxWidth="xs">
        <Box className={classes.boxStyle} boxShadow={3}>
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <AccountCircleIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>

            <ValidatorForm
              onSubmit={handleSubmit}
              onError={(errors) => console.log(errors)}
              className={classes.form}
            >
              <TextValidator
                label="Usuario"
                margin="normal"
                onChange={handleChange}
                name="username"
                value={username}
                fullWidth
                autoFocus
                validators={["required", "isEmail"]}
                errorMessages={["Este campo es requerido", "Usuario no valido"]}
              />

              <TextValidator
                label="Contraseña"
                margin="normal"
                onChange={handleChange}
                name="password"
                value={password}
                type="password"
                fullWidth
                autoFocus
                validators={["required"]}
                errorMessages={["Este campo es requerido"]}
              />
              <br />

              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <br />
              <br />
              <ButtonWait />

              <br />
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Olvido contraseña?
                  </Link>
                </Grid>
              </Grid>
            </ValidatorForm>
          </div>
          <Box mt={8}>
            <Copyright />
          </Box>
        </Box>
      </Container>
    </Grid>
  );
}
