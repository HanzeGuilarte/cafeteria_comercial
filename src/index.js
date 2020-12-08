import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { SideProvider } from "./Context/InitialContext";
import { ProductProvider } from "./Context/ProductContext";
import { TurnoProvider } from "./Context/TurnoContext";
import { LoginProvider } from "./Context/LoginContext";

ReactDOM.render(
  <SideProvider>
    <LoginProvider>
      <ProductProvider>
        <TurnoProvider>
          <App />
        </TurnoProvider>
      </ProductProvider>
    </LoginProvider>
  </SideProvider>,

  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
