import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Container, FormControl, InputLabel, Input } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({}));

export default function ProductoPage() {
  const classes = useStyles();
  return (
    <Container>
      {/* Nombre */}
      <FormControl>
        <InputLabel htmlFor="nombre">nombre</InputLabel>
        <Input id="nombre" />
      </FormControl>
      {/* Precio */}
      <FormControl>
        <InputLabel htmlFor="precio">precio</InputLabel>
        <Input id="precio" />
      </FormControl>
    </Container>
  );
}
