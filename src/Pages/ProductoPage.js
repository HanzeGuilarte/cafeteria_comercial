import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Container, FormControl, InputLabel, Input } from "@material-ui/core";
import { ProductoContext } from "../Context/ProductContext";
import Loading from "../Component/Loading";
import ModalProduct from "../Component/Producto/ModalProduct";
import Hero from "../Component/Hero";

const useStyles = makeStyles((theme) => ({}));

export default function ProductoPage() {
  const classes = useStyles();
  const { loading } = React.useContext(ProductoContext);
  if (!loading) {
    return <Loading />;
  }

  return (
    <>
      <Hero>
        <ModalProduct />
      </Hero>
    </>
  );
}
