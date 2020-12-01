import React, { useContext } from "react";
import { ProductoContext } from "../../Context/ProductContext";
import { makeStyles } from "@material-ui/core/styles";

import { Grid, Box, TextField, Typography, MenuItem } from "@material-ui/core";

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
  text: {
    width: "200px",
  },
}));

const tipos = [
  {
    value: "Primitivo",
    label: "Primitivo",
  },
  {
    value: "Elaborado",
    label: "Elaborado",
  },
  {
    value: "Todo",
    label: "Todo",
  },
];

export default function FilterProduct() {
  const {
    filterProducts,
    filter: { buscarPro, tipoPro },
    actFiltros,
  } = useContext(ProductoContext);

  const classes = useStyles();

  /*  function valuetext(value) {
    return `${value} $`;
  } */
  return (
    <>
      <Box my={2} variant="outlined">
        <Typography align="center" variant="h3" color="primary">
          {`Productos: ${filterProducts.length}`}
        </Typography>
      </Box>

      <Grid container>
        <Grid className={classes.grid} item xs={12} md={6}>
          <Box my={2} variant="outlined">
            <TextField
              id="buscarPro"
              name="buscarPro"
              label="Buscar producto"
              variant="outlined"
              size="small"
              value={buscarPro}
              onChange={actFiltros}
            />
          </Box>
        </Grid>
        <Grid className={classes.grid} item xs={12} md={6}>
          <Box my={2} variant="outlined">
            <TextField
              className={classes.text}
              id="tipoPro"
              name="tipoPro"
              select
              label="Tipo"
              value={tipoPro}
              onChange={actFiltros}
              variant="outlined"
              size="small"
            >
              {tipos.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Box>
        </Grid>

        {/* <Grid className={classes.grid} item xs={12} md={4}>
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
        </Grid> */}
      </Grid>
    </>
  );
}
