import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getDivisionPage,
  getPageDogs,
  newCurrentPage,
} from "../redux/dogsDucks";
import "./Paginated.css";
export default function Paginated() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getDivisionPage(state.allDogsGlobal));
    dispatch(getPageDogs(state.currentPageGlobal, state.allDogs));
  }, []);

  function changePage(b) {
    dispatch(getPageDogs(b, state.allDogsGlobal));
    dispatch(newCurrentPage(b));
  }

  return (
    <div className="paginator">
     
      {state.divitionPage.length > 0 &&
        state.allDogs.length !== 1 &&
        state.divitionPage.map((b, key) => {
          return (
            <button
              className="btnPag"
              key={key + Date.now}
              onClick={() => {
                changePage(b)
              }}
            >
              {b + 1}
            </button>
          );
        })}
        
    </div>
  );
}
