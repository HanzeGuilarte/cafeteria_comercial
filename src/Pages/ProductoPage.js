import React, { useContext } from "react";
import { Grid } from "@material-ui/core";
import { ProductoContext } from "../Context/ProductContext";
import Loading from "../Component/Loading";
import ModalProduct from "../Component/Producto/ModalProduct";

import Producto from "../Component/Producto/Producto";
import FilterProduct from "../Component/Producto/FilterProduct";

export default function ProductoPage() {
  const { loading, filterProducts } = useContext(ProductoContext);

  if (!loading) {
    return <Loading />;
  }

  return (
    <>
      {/* <Hero> */}
      <ModalProduct />
      {/*   </Hero> */}

      <FilterProduct />

      <Grid container>
        {filterProducts.map((producto) => {
          return <Producto key={producto._id} {...producto} />;
        })}
      </Grid>
    </>
  );
}
