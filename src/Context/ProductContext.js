import React, { useState, createContext, useEffect } from "react";
import data from "../Context/localProducts";

const ProductoContext = createContext();

function ProductProvider({ children }) {
  /* VARIABLES DEL PRODUCTO */

  const [producto, setProducto] = React.useState({
    nombre: "",
    tipoP: "Primitivo",
    peso: 0,
    unidad: "Kg",
    descripcion: "",
    img: "",
  });

  /* ARREGLO DE PRODUCTOS */
  const [product, setProduct] = useState([]);
  /* PRODUCTOS FILTRADOS */
  const [filterProducts, setFilterProducts] = useState([]);
  /*BOTONES PARA FILTRADO*/
  const [filter, setFilter] = React.useState({
    buscarPro: "",
    tipoPro: "Todo",
  });

  const leo = "leo";

  /* ABRIR O CERRAR MODAL */
  const [openModal, setOpenModal] = useState(false);

  /* LOADING PARA EL BACK */
  const [loading, setLoading] = useState(true);

  /* FUNCIONES ABRIR O CERRAR MODAL */
  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  /* UPDATE FILTROS EN UI */
  const actFiltros = (e) => {
    const filtered = e.target.name;
    const value = e.target.value;
    let filterValue = value;

    setFilter({ ...filter, [filtered]: filterValue });
  };

  /* USE EFFECT PARA INICIALIZAR LAS VARIABLES */
  useEffect(() => {
    setLoading(false);
    setProduct(data);
    setFilterProducts(product);
    setLoading(true);
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* USE EFFECT PARA REALIZAR LOS FILTRADOS */
  React.useLayoutEffect(() => {
    let newProducts = [...product];

    const { buscarPro, tipoPro } = filter;
    //
    if (tipoPro !== "Todo") {
      newProducts = newProducts.filter((item) => item.tipo === tipoPro);
    }

    if (buscarPro !== "") {
      newProducts = newProducts.filter((item) => {
        let nombre = item.nombre.toLowerCase().trim();
        return nombre.startsWith(buscarPro) ? item : null;
      });
    }
    setFilterProducts(newProducts);
  }, [filter, product]);

  /* UPDATE PARA CREAR UN PRODUCTO */
  const actProducto = (e) => {
    const filtered = e.target.name;
    const value = e.target.value;
    let filterValue = value;

    setProducto({ ...producto, [filtered]: filterValue });
  };

  /* CREAR PRODUCTO */

  const crearProducto = (nombre, tipoP, peso, unidad, descripcion, img) => {
    console.log(`${nombre} / ${tipoP} / ${peso} `);

    /* let pro = { nombre, tipoP, peso, unidad, descripcion, img };

    const newPro = [...product, pro];
    setProduct(newPro); */
  };

  return (
    <ProductoContext.Provider
      value={{
        producto,
        product,
        filterProducts,
        loading,
        openModal,
        filter,
        handleCloseModal,
        handleOpenModal,
        actFiltros,
        actProducto,
        crearProducto,
      }}
    >
      {children}
    </ProductoContext.Provider>
  );
}

export { ProductProvider, ProductoContext };
