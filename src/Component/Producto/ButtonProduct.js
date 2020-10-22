import React, { useContext } from "react";
import { IoMdAddCircle } from "react-icons/io";
import { ProductoContext } from "../../Context/ProductContext";
import ModalProduct from "./ModalProduct";

export default function ButtonProduct() {
  const { handleOpenModal, openModal } = useContext(ProductoContext);
  console.log(openModal);

  /* const scrollBackToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }; */
  return (
    <button className={"scroll-btn"} onClick={handleOpenModal}>
      <IoMdAddCircle></IoMdAddCircle>
    </button>
  );
}
