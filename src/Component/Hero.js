import React from "react";


export default function Hero({ children }) {
  return (
    <div className="hero">
      <div className="banner">
        <h1>Disfruta tu cocina</h1>
        <h3>Tus ingredientes los son todo</h3>
      </div>
      {children}
    </div>
  );
}
