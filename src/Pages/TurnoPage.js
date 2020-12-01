import React, { useContext } from "react";
import { TurnoContext } from "../Context/TurnoContext";
import { Grid, Button } from "@material-ui/core/";
import '../Css/TurnoCss.css';

export default function TurnoPage() {
  const { userList } = useContext(TurnoContext);
  return (
    <>
      <Grid container>
        <Grid className="elaboracion" item xs={12} md={4}>
          <div>
            <h1>Elaboracion</h1>
            {userList.map((val, key) => {
              return (
                <div key={key}>
                  <h3> {val.nombre}</h3>
                </div>
              );
            })}
          </div>
          <Button variant="contained" color="primary">
          Agregar usuarios
        </Button>
        </Grid>

        <Grid className="almacen" item xs={12} md={4}>
          <div>
            <h1>Almacen</h1>
            {userList.map((val, key) => {
              return (
                <div key={key}>
                  <h3> {val.nombre}</h3>
                </div>
              );
            })}
          </div>
          <Button variant="contained" color="primary">
          Agregar usuarios
        </Button>
        </Grid>
        <Grid className="venta" item xs={12} md={4}>
          <h1>Venta</h1>
          {userList.map((val, key) => {
            return (
              <div key={key}>
                <h3> {val.nombre}</h3>
              </div>
            );
          })}
          <Button variant="contained" color="primary">
          Agregar usuarios
        </Button>
        </Grid>
        <div className='buttonCrear'>
        <Button  variant="contained" color="primary">
          Crear Turno
        </Button>
        </div>
      </Grid>
    </>
  );
}
