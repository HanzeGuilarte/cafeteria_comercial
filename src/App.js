import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
  useLocation,
} from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AlmacenPage from "./Pages/AlmacenPage";
import VentasPage from "./Pages/VentasPage";
import LoginPage from "./Pages/LoginPage";
import IpvPage from "./Pages/IpvPage";
import TrazasPage from "./Pages/TrazasPage";
import UsuarioPage from "./Pages/UsuarioPage";
import AnalisisPage from "./Pages/AnalisisPage";
import SalarioPage from "./Pages/SalarioPage";
import ElaboracionPage from "./Pages/ElaboracionPage";
import ProductPage from "./Pages/ProductoPage";
import Error from "./Pages/Error";
import { SideContext } from "./Context/InitialContext";
import Maqueta from "./Component/Maqueta";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./Css/theme";

function App() {
  /* const { sideOpen, authenticate } = React.useContext(SideContext);

   */
  return (
    <>
      <>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Switch>
              <Switch>
                <Route exact path="/" component={LoginPage} />
                <Maqueta>
                  <Switch>
                    <Route exact path="/home" component={HomePage} />
                    <Route exact path="/almacen" component={AlmacenPage} />
                    <Route
                      exact
                      path="/elaboracion"
                      component={ElaboracionPage}
                    />
                    <Route exact path="/ipv" component={IpvPage} />
                    <Route exact path="/producto" component={ProductPage} />
                    <Route exact path="/salario" component={SalarioPage} />
                    <Route exact path="/trazas" component={TrazasPage} />
                    <Route exact path="/usuario" component={UsuarioPage} />
                    <Route exact path="/analisis" component={AnalisisPage} />
                    <Route exact path="/ventas" component={VentasPage} />
                    <Route exact path="/error" component={Error} />
                  </Switch>
                </Maqueta>
              </Switch>
            </Switch>
          </BrowserRouter>
        </ThemeProvider>
      </>
    </>
  );
}

export default App;
