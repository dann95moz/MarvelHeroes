import React from "react";
import ReactDOM from "react-dom";
//incorporamos estilos via global
import "./styles/global.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Rutas from "./Router/Rutas";


ReactDOM.render(
  <React.StrictMode>
    <Rutas />
  </React.StrictMode>,
  document.getElementById("root")
);
