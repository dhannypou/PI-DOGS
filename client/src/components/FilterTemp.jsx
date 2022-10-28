import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterByTemperaments } from "../redux/dogsDucks";

export default function OrderBy() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  function filterFunctionTemperaments(e) {
    dispatch(filterByTemperaments(state.allDogsGlobal, e.target.value));
  }

  useEffect(() => {
  }, [state]);

  return (
    <div>
      <div>
        <label> TEMPERAMENTOS </label>
        <select onChange={filterFunctionTemperaments}>
          <option value={""}>select</option>
          {state.temperaments.map((e) => {
            return (
              e.name !== "" && (
                <option key={e.id} value={e.name}>
                  {e.name}
                </option>
              )
            );
          })}
        </select>
      </div>
    </div>
  );
}
