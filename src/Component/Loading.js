import React from "react";
import styled from "styled-components";
import loading from "../assets/loading.gif";
/* import image from "../assets/fondo.png"; */

export default function Loading() {
  return (
    <DivWrapper>
      <div className="loading">
        <h2>Cargando...</h2>
        <img src={loading} alt="loading gif" />
      </div>
    </DivWrapper>
  );
}

const DivWrapper = styled.div`
  .loading {
    text-transform: capitalize;
    text-align: center;
    font-size: 1.7rem;
    margin-top: 3rem;
    letter-spacing: 0.3rem;
  }
  h2 {
    color: #c3aed6;
  }
`;

/* background-image: url(${image}); */
