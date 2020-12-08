import React, { createContext, useState, useEffect } from "react";
import Axios from "axios";
import url from "../utils/URL";

const TurnoContext = createContext();

function TurnoProvider({ children }) {
  /* LISTA USUARIOS */
  const [userList, setUserList] = useState([]);

  /* USURIOS FILTRADOS */
  const [filterUser, setFilterUser] = useState([]);
  /* ABRIR O CERRAR MODAL */
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    async function fetchMyAPI() {
      let response = await Axios.get(`${url}/usuario/`);
      setUserList(response.data.lista);
    }
    fetchMyAPI();
  }, []);

  /* FUNCIONES ABRIR O CERRAR MODAL */
  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  /* FUNCIONES Add User */
  const [checkedElab, setCheckedElab] = useState([]);
  const [checkedAlm, setCheckedAlm] = useState([]);
  const [checkedVenta, setCheckedVenta] = useState([]);
  const [userAlm, setUserAlm] = useState([]);
  const [userVenta, setUserVenta] = useState([]);
  const [userElab, setUserElab] = useState([]);

  const handleToggleElab = (value) => () => {
    const currentIndex = checkedElab.indexOf(value);
    const newCheckedElb = [...checkedElab];

    if (currentIndex === -1) {
      newCheckedElb.push(value);
    } else {
      newCheckedElb.splice(currentIndex, 1);
    }

    setCheckedElab(newCheckedElb);
  };

  const handleToggleAlm = (value) => () => {
    const currentIndex = checkedAlm.indexOf(value);
    const newCheckedAlm = [...checkedAlm];

    if (currentIndex === -1) {
      newCheckedAlm.push(value);
    } else {
      newCheckedAlm.splice(currentIndex, 1);
    }

    setCheckedAlm(newCheckedAlm);
  };
  const handleToggleVenta = (value) => () => {
    const currentIndex = checkedVenta.indexOf(value);
    const newCheckedVenta = [...checkedVenta];

    if (currentIndex === -1) {
      newCheckedVenta.push(value);
    } else {
      newCheckedVenta.splice(currentIndex, 1);
    }

    setCheckedVenta(newCheckedVenta);
  };

  const devolverVenta = () => {
    console.log(checkedVenta);
    if (checkedVenta.length !== 0) {
      for (let i = 0; i < checkedVenta.length; i++) {
        userVenta.push(checkedVenta[i]);
      }
      setUserVenta(userVenta);
      console.log(userVenta);
    } else {
      alert("Escoja un usuario");
    }
  };
  const devolverAlm = () => {
    console.log(checkedAlm);
    if (checkedAlm.length !== 0) {
      for (let i = 0; i < checkedAlm.length; i++) {
        userAlm.push(checkedAlm[i]);
      }
      setUserAlm(userAlm);
      console.log(userAlm);
    } else {
      alert("Escoja un usuario");
    }
  };
  const devolverElab = () => {
    console.log(checkedElab);
    if (checkedElab.length !== 0) {
      for (let i = 0; i < checkedElab.length; i++) {
        userElab.push(checkedElab[i]);
      }
      setUserElab(userElab);
      console.log(userElab);
    } else {
      alert("Escoja un usuario");
    }
  };

  return (
    <TurnoContext.Provider
      value={{
        userList,
        openModal,
        handleCloseModal,
        handleOpenModal,
        checkedElab,
        checkedAlm,
        checkedVenta,
        handleToggleElab,
        handleToggleVenta,
        handleToggleAlm,
        devolverVenta,
        userElab,
        devolverAlm,
        devolverElab,
        userAlm,
        userVenta,
      }}
    >
      {children}
    </TurnoContext.Provider>
  );
}

export { TurnoProvider, TurnoContext };
