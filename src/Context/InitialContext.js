import React, { useState, createContext } from "react";

// @ts-ignore
const SideContext = createContext();


function getUserFromLocalStorage() {
  return localStorage.getItem("authenticate")
    ? JSON.parse(localStorage.getItem("authenticate"))
    :  localStorage.setItem("authenticate",  JSON.stringify(false));
}

function SideProvider({ children }) {
  const [sideOpen, setSideOpen] = useState(true);
  const [authenticate, setAuthenticate] = useState(getUserFromLocalStorage());

  const handleSidebar = () => {
    
    setSideOpen(!sideOpen);
  };

  const handleAuthenticate = () => {
    
     
    setAuthenticate(true)
    localStorage.setItem("authenticate",  JSON.stringify(true)); 
     
  };

  return (
    <SideContext.Provider value={{ sideOpen,handleAuthenticate ,handleSidebar,authenticate }}>
      {children}
    </SideContext.Provider>
  );
}

export { SideContext, SideProvider };
