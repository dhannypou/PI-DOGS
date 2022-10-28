import React from "react";
import { Card } from "./Card";
import Nav from "./Nav";
import SearchBar from "./SearchBar";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getDogsAction,
  allDogGlobal,
  getTemperaments,
  getPageDogs,
  getDivisionPage,
} from "../redux/dogsDucks";
import "./Home.css";
import Paginated from "./Paginated";
import OrderBy from "./OrderBy";

export default function Home() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTemperaments());

    fetch("http://localhost:3001/dogs").then((r) =>
      r.json().then((rta) => {
        dispatch(getDogsAction(rta));

        dispatch(allDogGlobal());
      })
    );
  }, []);

  useEffect(() => {
    dispatch(getPageDogs(state.currentPageGlobal, state.allDogs));
    dispatch(getDivisionPage(state.allDogs));
  }, [state.allDogs]);

  return (
    <div className="home">
      <div className="navbar">
        <div className="title">
          <h1> AQUI HAY MUCHO AMOR!! </h1>
        </div>
        <SearchBar />
        <Nav />
      </div>
      <div>
        <OrderBy />
      </div>
      {state.allDogsGlobal.length > 0 && (
        <div className="paginatorContainer">
          <Paginated />
        </div>
      )}
      <div className="container__cards">
        {state.eigthDogs.length > 0 && state.eigthDogs[0] !== undefined ? (
          state.eigthDogs.map((doggy, key) => (
            <Card key={key + Date.now} dog={doggy} />
          ))
        ) : (
          <div className="center">
            <div className="ring">
          <span>Perame Tantito...</span>
        </div>
          </div>
        )}
      </div>
      
    </div>
  );
}
