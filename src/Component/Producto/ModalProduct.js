import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";

import {
  Fade,
  Backdrop,
  TextField,
  MenuItem,
  Typography,
  Button,
  IconButton,
} from "@material-ui/core";
import { ProductoContext } from "../../Context/ProductContext";
import { IoMdAddCircle } from "react-icons/io";
import PhotoCamera from "@material-ui/icons/PhotoCamera";

const currencies = [
  {
    value: "Primitivo",
  },
  {
    value: "Elaborado",
  },
];

const unidades = [
  {
    value: "lb",
  },
  {
    value: "kg",
  },
  {
    value: "lt",
  },
  {
    value: "g",
  },
];

const useStyles = makeStyles((theme) => ({
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
}));

export default function TransitionsModal() {
  const classes = useStyles();

  const { openModal, handleOpenModal, handleCloseModal } = useContext(
    ProductoContext
  );

  const [currency, setCurrency] = React.useState("Primitivo");
  const [unidadM, setUnidadM] = React.useState("Kg");

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  const handleUnidad = (event) => {
    setUnidadM(event.target.value);
  };
  console.log(openModal);

  return (
    <div>
      <button className={"scroll-btn"} onClick={handleOpenModal}>
        <IoMdAddCircle></IoMdAddCircle>
      </button>
      <Modal
        disableAutoFocus
        disableEnforceFocus
        className={classes.modal}
        open={openModal}
        onClose={handleCloseModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openModal}>
          <div className={classes.paper}>
            {/* Text */}
            <Typography
              className={classes.typoField}
              variant="h4"
              color="initial"
            >
              Crear Producto
            </Typography>
            {/*tipo */}
            <div className={classes.textField}>
              <TextField
                id="tipo"
                name="tipo"
                select
                label="Tipo"
                value={currency}
                onChange={handleChange}
                variant="outlined"
                size="small"
                fullWidth
              >
                {currencies.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.value}
                  </MenuItem>
                ))}
              </TextField>
            </div>

            {/* Nombre */}
            <div className={classes.textField}>
              <TextField
                id="nombre"
                name="nombre"
                label="Nombre"
                variant="outlined"
                size="small"
              />
            </div>
            {/* Precio */}
            <div className={classes.textField}>
              <TextField
                id="precio"
                name="precio"
                label="Precio"
                variant="outlined"
                size="small"
                placeholder="$"
              />
            </div>

            {/*Peso */}
            <div className={classes.textField}>
              <TextField
                id="peso"
                name="peso"
                label="Contenido Neto"
                variant="outlined"
                size="small"
              />
            </div>

            {/* Unidad */}
            <div className={classes.textField}>
              <TextField
                id="unidad"
                name="unidad"
                select
                label="Unidad"
                value={unidadM}
                onChange={handleUnidad}
                variant="outlined"
                size="small"
                fullWidth
              >
                {unidades.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.value}
                  </MenuItem>
                ))}
              </TextField>
            </div>

            {/*Descripcion*/}
            <div className={classes.textField}>
              <TextField
                id="descripcion"
                name="descripcion"
                label="Descripcion"
                multiline
                rows={2}
                rowsMax={4}
                variant="outlined"
                size="small"
                fullWidth
              />
            </div>

            {/*Img*/}
            <div className={classes.root}>
              <Typography variant="h4" color="initial">
                Subir foto
                <input
                  accept="image/*"
                  className={classes.input}
                  id="icon-button-file"
                  type="file"
                />
                <label htmlFor="icon-button-file">
                  <IconButton
                    color="primary"
                    aria-label="upload picture"
                    component="span"
                  >
                    <PhotoCamera />
                  </IconButton>
                </label>
              </Typography>
            </div>

            {/*Crear*/}
            <div className={classes.buttonField}>
              <Button variant="contained" color="primary">
                Crear
              </Button>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
