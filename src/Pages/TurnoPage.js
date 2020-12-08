import React from "react";
import { Grid, Button } from "@material-ui/core/";
import "../Css/TurnoCss.css";
import ModalTurnoElaboracion from "../Component/Turno/ModalTurnoElaboracion";
import ModalTurnoAlmacen from "../Component/Turno/ModalTurnoAlmacen";
import ModalTurnoVenta from "../Component/Turno/ModalTurnoVenta";
import { TurnoContext } from "../Context/TurnoContext";

export default function TurnoPage() {
  
  const {
    // user: { nombre, rolCargoElaboracion },
    userElab,
    userAlm,
    userVenta,
  } = React.useContext(TurnoContext);

  return (
    <>
      <Grid container>
        <Grid className="elaboracion" item xs={12} md={4}>
          <div>
            <h1>Elaboracion</h1>
            {userElab.map((user,key) => {
              
              return <div key={user._id}> <h3>{user.nombre}</h3></div>
            })}
            
          </div>
          <div className="buttonCrear">
            <ModalTurnoElaboracion></ModalTurnoElaboracion>
          </div>
        </Grid>

        <Grid className="almacen" item xs={12} md={4}>
          <div>
            <h1>Almacen</h1>
            {userAlm.map((user, key) => {
              return <div key={user._id}><h3>{user.nombre}</h3></div>
            })}
          </div>
          <div className="buttonCrear">
            <ModalTurnoAlmacen></ModalTurnoAlmacen>
          </div>
        </Grid>
        <Grid className="venta" item xs={12} md={4}>
          <h1>Venta</h1>
          {userVenta.map((user) => {
              return <div key={user._id}><h3>{user.nombre}</h3></div>
            })}
          <div className="buttonCrear">
            <ModalTurnoVenta></ModalTurnoVenta>
          </div>
        </Grid>
        <div className="buttonCrear">
          <Button variant="contained" color="primary" >
            Crear Turno
          </Button>
        </div>
      </Grid>
    </>
  );
}
