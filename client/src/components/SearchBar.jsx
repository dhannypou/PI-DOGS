import React, { useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDogsByNameAction } from "../redux/dogsDucks";
import "./SearchBar.css";
export default function SearchBar() {
  const [search, setSearch] = useState("");
  let dispatch = useDispatch();
  const state = useSelector((state) => state);



  function onSubmit(e) {
    e.preventDefault();
    dispatch(getDogsByNameAction(search));
    setSearch("");
    setSearch(state.allGlobalDogs)
  }
  function onInputChange(e) {
    e.preventDefault();
    setSearch(e.target.value);
  }
  return (
    <div >
      <form className="container_search" onSubmit={onSubmit}>
        <input
          type="search"
          onChange={onInputChange}
          value={search}
          placeholder="Type..."
          className="inputSearch"
        />
        <button type="submit" value="Search" className="btnSend">
          <svg
            width="25"
            height="25"
            className="svgColor"
            viewBox="0 0 32 32"
            version="1.1"
            aria-hidden="false"
          >
            <path d="M22 20c1.2-1.6 2-3.7 2-6 0-5.5-4.5-10-10-10S4 8.5 4 14s4.5 10 10 10c2.3 0 4.3-.7 6-2l6.1 6 1.9-2-6-6zm-8 1.3c-4 0-7.3-3.3-7.3-7.3S10 6.7 14 6.7s7.3 3.3 7.3 7.3-3.3 7.3-7.3 7.3z"></path>
          </svg>
        </button>
      </form>
    </div>
  );
}
