import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getDivisionPage,
  getDogsAction,
  getPageDogs,
  orderByAzAction,
  orderByWeight,
} from "../redux/dogsDucks";
import Filter from "./Filter";
import FilterTemp from "./FilterTemp";

export default function OrderBy() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPageDogs(state.currentPageGlobal, state.allDogs));
    dispatch(getDivisionPage(state.allDogs));
  }, [state.allDogs]);

  const orderByAz = (option) => {

    if (option.target.value == "select") {
      dispatch(getDogsAction(state.allDogsGlobal))
      return
    }
 
 
    dispatch(orderByAzAction(state.allDogsGlobal, option.target.value))
 
  };

  function OrderByWeigth(option) {
    dispatch(orderByWeight(state.allDogsGlobal, option));
  }

  return (
    <div className="filterNav">
      <div>
        <label> POR ALFABETO </label>
        <select defaultValue={""} onChange={orderByAz}>
          <option>select</option>
          <option value={"A-z"}> A-Z</option>
          <option value={"Z-a"}>Z-A</option>
        </select>
      </div>
      <div>
        <label> POR PESO </label>
        <select
          defaultValue={""}
          onChange={(e) => {
            if (e.target.value === "") {
              return;
            }
            OrderByWeigth(e.target.value);
          }}
        >
          <option value={""}>select</option>
          <option value={"DES"}> DES </option>
          <option value={"ASC"}> ASC </option>
        </select>
      </div>
      <Filter />
      <FilterTemp />
    </div>
  );
}
