import React from "react";
import { Link } from "react-router-dom";
import "../index.css";
import "./Landing.css";

export default function Landing() {
  return (
    <div className="container">
      <div className="caja1"></div>

      <div className="caja2">
      <div className="welcome"> BIENVENIDOS A MI </div>
      <div className="welcome"> PROYECTO INDIVIDUAL </div>
      <div className="welcome"> DE PERRITOS </div>
        <button className="btn">
          <a href= "/home"><span>Entrar</span></a>
        </button>
      </div>
    </div>
  );
}
//<Link to="/home"> Entrar </Link>
