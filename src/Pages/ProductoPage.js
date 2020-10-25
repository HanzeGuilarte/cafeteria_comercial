import React, { useContext } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  Grid,
  Box,
  TextField,
  Typography,
  Slider,
  Card,
} from "@material-ui/core";
import { ProductoContext } from "../Context/ProductContext";
import Loading from "../Component/Loading";
import ModalProduct from "../Component/Producto/ModalProduct";
import Hero from "../Component/Hero";
import Producto from "../Component/Producto/Producto";

const useStyles = makeStyles((theme) => ({
  grid: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  typo: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: "25px",
  },
}));

export default function ProductoPage() {
  const classes = useStyles();
  const { loading, product } = useContext(ProductoContext);

  function valuetext(value) {
    return `${value} $`;
  }
  if (!loading) {
    return <Loading />;
  }

  return (
    <>
      <Hero>
        <ModalProduct />
      </Hero>

      <Box my={2} variant="outlined">
        <Typography align="center" variant="h3" color="primary">
          {`Productos: ${product.length}`}
        </Typography>
      </Box>

      <Grid container>
        <Grid className={classes.grid} item xs={12} md={4}>
          <Box my={2} variant="outlined">
            <TextField
              id="buscarPro"
              name="buscarPro"
              label="Buscar producto"
              variant="outlined"
              size="small"
            />
          </Box>
        </Grid>
        <Grid className={classes.grid} item xs={12} md={4}>
          <Box my={2} variant="outlined">
            <TextField
              id="tipoPro"
              name="tipoPro"
              label="Tipo de producto"
              variant="outlined"
              size="small"
            />
          </Box>
        </Grid>
        <Grid className={classes.grid} item xs={12} md={4}>
          <Box my={2} variant="outlined">
            <Typography id="discrete-slider-always" gutterBottom>
              Precio
            </Typography>
            <Box>
              <Slider
                defaultValue={0}
                getAriaValueText={valuetext}
                aria-labelledby="discrete-slider-always"
                step={5}
                valueLabelDisplay="auto"
              />
            </Box>
          </Box>
        </Grid>
      </Grid>

      <Grid container>
        {product.map((producto) => {
          return <Producto key={producto.id} {...producto} />;
        })}
      </Grid>
    </>
  );
}
