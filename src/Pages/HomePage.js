import React from "react";
import { useHistory } from "react-router-dom";
import { Button, Grid } from "@material-ui/core";

export default function HomePage() {
  const history = useHistory();

  const actionRender = async (e) => {
    e.preventDefault();
    history.push("/almacen");
  };
  return (
    <>
      <Grid
        container
        direction="row"
        justify="space-around"
        alignItems="center"
      >
        <Button href="/Producto" variant="contained" color="primary">
          Crear Producto
        </Button>
        <Button href="/Producto" variant="contained" color="primary">
          Listar Producto
        </Button>
      </Grid>
    </>
  );
}
