import React, {useState, useEffect} from 'react';
import Avatar from "@material-ui/core/Avatar";
import Select from "@material-ui/core/Select";
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
import Axios from 'axios';
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import '../Css/LoginCss.css';

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

  completo: {
    backgroundColor: "#364f6b",
  },
  icon: {
    color: "#185B6",
  },
  
}));



export default function LoginPage() {
  const { handleAuthenticate } = React.useContext(SideContext);

  const [password, setPassword] = React.useState("");
  const [nombre, setUserName] = React.useState("");
  const [cargo, setCargo] = React.useState("");
  //const [isMember, setIsMember] = React.useState(true);

  const history = useHistory();
  const classes = useStyles();

  const handleChange = (event) => {
    const value = event.target.value;
    if (event.target.name === "password") setPassword(value);
    if (event.target.name === "username") setUserName(value);
  };

  const handleSubmit = () => {};

  const register = async function (){
    let res = await Axios.post("http://localhost:3000/api/v1/inventario/usuario/register", {
          nombre: nombre,
          password: password,
          cargo: cargo,
  });
  console.log(res);
  }

const selectCargo = (e)=> {
    setCargo(e.target.value)
}

  return (
    <Grid container component="main" className='root'>
      <Container component="main" maxWidth="xs">
        <Box className='boxStyle' boxShadow={3}>
          <CssBaseline />
          <div className='paper'>
          <Typography className='typography' component="h1" variant="h5">
              Register
            </Typography>
            <Avatar className='avatar'>
              <AccountCircleIcon />
            </Avatar>
            

            <ValidatorForm
              onSubmit={handleSubmit}
              onError={(errors) => console.log(errors)}
              className='form'
            > 
            <div>
              <TextValidator
                label="Usuario"
                margin="normal"
                onChange={(e) => setUserName(e.target.value)}
                name="username"
                value={nombre}
                fullWidth
                autoFocus
                errorMessages={["Este campo es requerido", "Usuario no valido"]}
              />
              </div>
            <div>
              <TextValidator
                label="Contraseña"
                margin="normal"
                onChange={(e) => setPassword(e.target.value)}
                name="password"
                value={password}
                type="password"
                fullWidth
                autoFocus
                errorMessages={["Este campo es requerido"]}
              />
              </div>
            
            <div>
              <TextValidator
                label="Cargo"
                margin="normal"
                onChange={(e) => setCargo(e.target.value)}
                name="cargo"
                value={cargo}
                fullWidth
                autoFocus
                errorMessages={["Este campo es requerido", "Usuario no valido"]}
              />
              </div>
              
                {/* <Select className={classes.cargo} value={cargo} onChange={selectCargo}>
                    <MenuItem value={1}>Elaborador</MenuItem>
                    <MenuItem value={2}>Trabajador</MenuItem>
                    <MenuItem value={3}>Almacenero</MenuItem>
                </Select> */}
            
              <div className='submit'>
                  <Button variant="contained" color="primary" onClick={register}>Registrar</Button>
              {/* <ButtonWait 
                
              /> */}

              </div>
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

    /*     <div>
      <ValidatorForm
                
                onSubmit={handleSubmit}
                onError={errors => console.log(errors)}
            >
                <TextValidator
                    label="Username"
                    onChange={handleChange}
                    name="username"
                    value={username}
                    validators={['required', 'isEmail']}
                    errorMessages={['this field is required', 'email is not valid']}
                />
                <Button type="submit">Submit</Button>
            </ValidatorForm>
    </div> */
  );
}
