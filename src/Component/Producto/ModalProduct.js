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
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core";
import { ProductoContext } from "../../Context/ProductContext";
import { IoMdAddCircle } from "react-icons/io";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const tipos = [
  {
    value: "Primitivo",
    label: "Primitivo",
  },
  {
    value: "Elaborado",
    label: "Elaborado",
  },
];

const unidades = [
  {
    value: "lb",
  },
  {
    value: "Kg",
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
    backgroundColor: "white",
    border: "3px solid #14274e",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    margin: theme.spacing(2),
    outline: "none",
  },
  textField: {
    margin: "20px",
  },
  buttonField: {
    margin: "20px",
    paddingLeft: "25%",
  },

  typoField: {
    margin: "20px",
    paddingLeft: "20%",
  },

  root: {
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

  const {
    producto: { nombre, tipoP, peso, unidad, descripcion, img },
    openModal,
    handleOpenModal,
    handleCloseModal,
    actProducto,
    crearProducto,
  } = useContext(ProductoContext);

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
                id="tipoP"
                name="tipoP"
                select
                label="Tipo"
                value={tipoP}
                onChange={actProducto}
                variant="outlined"
                size="small"
                fullWidth
              >
                {tipos.map((option) => (
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
                value={nombre}
                onChange={actProducto}
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
                value={peso}
                onChange={actProducto}
              />
            </div>

            {/* Unidad */}
            <div className={classes.textField}>
              <TextField
                id="unidad"
                name="unidad"
                select
                label="Unidad"
                value={unidad}
                onChange={actProducto}
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
                value={descripcion}
                onChange={actProducto}
              />
            </div>

            {/*Img*/}
            <div className={classes.root}>
              <Typography variant="h4" color="initial">
                Subir foto
                <input
                  accept="image/*"
                  className={classes.input}
                  id="img"
                  name="img"
                  type="file"
                  value={img}
                  onChange={actProducto}
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

            {/* Receta */}
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>Accordion 1</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>

            {/*Crear*/}
            <div className={classes.buttonField}>
              <Button
                variant="contained"
                color="primary"
                onClick={() => {
                  crearProducto();
                }}
              >
                Crear
              </Button>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
