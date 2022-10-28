import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Nav from "./Nav";
import SearchBar from "./SearchBar";

import "./DetailDog.css";

export default function DetailDog() {
  const [dog, setDog] = useState([]);
  let { id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:3001/dogs/${id}`).then((respuesta) =>
      respuesta.json().then((body) => {
        let [doggy] = body;
        setDog(doggy);
      })
    );
  }, [id]);
  return (
    <div>
      <div className="navbar">
        <SearchBar />
        <Nav />
      </div>
      <div className="containerDetail">
        
        <div className="cardDetail">

          <div className="containerImage">
            <img src={dog.image ? dog.image  : ''} alt="" className="cardImage" />
          </div>

          <div className="containerDataDetail">
            <h1 className="titleDetail">{dog.name}</h1>
            <h1 className="temperamentDetail">Temperament: {dog.temperament}</h1>
            <h1 className="weigthDetail">Weight: {dog.weight}</h1>
            <h1 className="heigthDetail">Heigth: {dog.heigth}</h1>
            <h1 className="lifeSpanDetail">Life Span: {dog.life_span}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
