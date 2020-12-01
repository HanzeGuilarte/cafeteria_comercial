import React, { useState, createContext, useEffect } from "react";

import axios from "axios";
import url from "../utils/URL";

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
    receta: [],
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

  /* ABRIR O CERRAR MODAL */
  const [openModal, setOpenModal] = useState(false);

  /* LOADING PARA EL BACK */
  const [loading, setLoading] = useState(true);

  /*Actualizar UI*/

  const [updateUI, setUpdateUI] = useState(false); 

  ////////////////////////FUNCIONES////////////////////////////////////////////////

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
    async function getProductAPI() {
      let response = await axios.get(
        `http://localhost:3000/api/v1/inventario/producto`
      );
      setProduct(response.data.Productos);
    }

    getProductAPI();
    setFilterProducts(product);
    setLoading(true);
  }, []);

  /* USE EFFECT PARA REALIZAR LOS FILTRADOS */
  React.useLayoutEffect(() => {
    let newProducts = [...product];

    const { buscarPro, tipoPro } = filter;
    //
    if (tipoPro !== "Todo") {
      newProducts = newProducts.filter((item) => item.tipoProducto === tipoPro);
    }

    if (buscarPro !== "") {
      newProducts = newProducts.filter((item) => {
        let nombre = item.nombre.toLowerCase().trim();
        return nombre.startsWith(buscarPro) ? item : null;
      });
    }
    setFilterProducts(newProducts);
 /*    setUpdateUI(false); */
  }, [filter, product]);

  /* UPDATE PARA CREAR UN PRODUCTO */
  const actProducto = (e) => {
    const filtered = e.target.name;
    const value = e.target.value;
    let filterValue = value;

    setProducto({ ...producto, [filtered]: filterValue });
  };

  /* CREAR PRODUCTO */

  async function crearProducto() {
    try {
    

      const response = await axios.post(`${url}/producto/create`, {
        nombre: producto.nombre,
        tipoProducto: producto.tipoP,
        descripcion: producto.descripcion,
        unidad: producto.unidad,
        peso: producto.peso,
        image: producto.img,
        recetas: producto.recetas,
      });

      setOpenModal(false);
  
      return response;
    } catch (e) {
      console.log(e);
    }
  }

  async function eliminarProducto(id) {
    try {
      const response = await axios.delete(`${url}/producto/${id}`);
     /*  setUpdateUI(true); */
      console.log(response.data);
    } catch (e) {
      console.log(e);
    }
  }

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
        eliminarProducto,
      }}
    >
      {children}
    </ProductoContext.Provider>
  );
}

export { ProductProvider, ProductoContext };
