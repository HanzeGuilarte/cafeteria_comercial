import React, { useState, createContext, useEffect } from "react";
import data from "../Context/localProducts";

const ProductoContext = createContext();

function ProductProvider({ children }) {
  /* VARIABLES DEL PRODUCTO */
  const [nombre, setNombre] = useState("");
  const [peso, setPeso] = useState("");
  const [unidad, setUnidad] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [img, setImg] = useState("");

  /* ARREGLO DE PRODUCTOS */
  const [product, setProduct] = useState([]);
  /* PRODUCTOS FILTRADOS */
  const [filterProducts, setFilterProducts] = useState([]);
  /*BOTONES PARA FILTRADO*/

  const [filter, setFilter] = React.useState({
    buscarPro: "",
    tipoPro: "Todo",
  });

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

  useEffect(() => {
    setLoading(false);
    setProduct(data);
    setFilterProducts(product);
    setLoading(true);
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

  return (
    <ProductoContext.Provider
      value={{
        nombre,
        peso,

        descripcion,
        img,
        product,
        filterProducts,
        loading,
        openModal,
        filter,
        handleCloseModal,
        handleOpenModal,
        actFiltros,
      }}
    >
      {children}
    </ProductoContext.Provider>
  );
}

export { ProductProvider, ProductoContext };
