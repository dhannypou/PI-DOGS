import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
export default function Nav() {
  return (
    <div className="optionNavBar">
      <ul>
        <Link className="link" to="/Home"> Perritos</Link>
      </ul>
      <ul>
        <Link className="link" to="/CreateRace"> Crear perritos </Link>
      </ul>
    </div>
  );
}
