import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    filterDogs,
    filterByTemperaments,
} from "../redux/dogsDucks";


export default function OrderBy(){
    const { allDogs } = useSelector((state) => state); 
    const state = useSelector((state) => state);
    const dispatch = useDispatch()
  


    function filterFunctionOrigin(e) {
        dispatch(filterDogs(state.allDogsGlobal, e.target.value));
      }
  
    
return (
    <div className="sourceTemp">
         <div >
          <label>PERRITOS! </label>
          <select defaultValue={""} onChange={filterFunctionOrigin}>
            <option value={""}>select</option>
            <option value={"API"}> API </option>
            <option value={"BD"}> BD </option>
          </select>
        </div>

    </div>


)    
}
    