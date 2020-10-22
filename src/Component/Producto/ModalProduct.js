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
} from "@material-ui/core";
import { ProductoContext } from "../../Context/ProductContext";
import { IoMdAddCircle } from "react-icons/io";

const currencies = [
  {
    value: "Primitivo",
  },
  {
    value: "Elaborado",
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
    border: "8px solid #726a95",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    margin: theme.spacing(1),
  },
  textField: {
    margin: "20px",
    alignItems: "center",
    justifyContent: "center",
  },
}));

export default function TransitionsModal() {
  const classes = useStyles();

  const { openModal, handleOpenModal, handleCloseModal } = useContext(
    ProductoContext
  );

  const [currency, setCurrency] = React.useState("Primitivo");

  const handleChange = (event) => {
    setCurrency(event.target.value);
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
            <Typography variant="h4" color="initial">
              Crear Producto
            </Typography>
            {/*tipo */}
            <div className={classes.textField}>
              <TextField
                id="tipo"
                select
                label="Tipo"
                value={currency}
                onChange={handleChange}
                variant="outlined"
                size="small"
                fullWidth="true"
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
                label="Nombre"
                variant="outlined"
                size="small"
              />
            </div>
            {/* Precio */}
            <div className={classes.textField}>
              <TextField
                id="precio"
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
                label="Peso"
                variant="outlined"
                size="small"
                placeholder="Lb"
              />
            </div>

            {/*Descripcion*/}
            <div className={classes.textField}>
              <TextField
                id="descripcion"
                label="Descripcion"
                multiline
                rows={2}
                rowsMax={4}
                variant="outlined"
                size="small"
                fullWidth="true"
              />
            </div>

            {/*Descripcion*/}
            <div className={classes.textField}>
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
