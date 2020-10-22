import React, { useState, createContext } from "react";

const ProductoContext = createContext();

function ProductProvider({ children }) {
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");
  const [peso, setPeso] = useState("");
  const [tipo, setTipo] = useState("primario");
  const [descripcion, setDescripcion] = useState("");
  const [img, setImg] = useState("");
  const [product, setProduct] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);

  const [openModal, setOpenModal] = useState(false);

  const [loading, setLoading] = useState(true);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <ProductoContext.Provider
      value={{
        nombre,
        precio,
        peso,
        tipo,
        descripcion,
        img,
        product,
        filterProducts,
        loading,
        openModal,
        handleCloseModal,
        handleOpenModal,
      }}
    >
      {children}
    </ProductoContext.Provider>
  );
}

export { ProductProvider, ProductoContext };
