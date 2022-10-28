import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Nav from "./Nav";
import SearchBar from "./SearchBar";
import { getTemperaments } from "../redux/dogsDucks";
import "./CreateRace.css";
export default function CreateRace() {
  const { temperaments } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    if (temperaments.length === 0) {
      dispatch(getTemperaments());
    }
  }, []);

  const [optionSelects, setOptionSelects] = useState([]);

  const [inputErrors, setInputErrors] = useState({
    name: {
      status: false,
      mjs: "",
    },
    minHeight: {
      status: false,
      msj: "",
    },
    maxHeight: {
      status: false,
      msj: "",
    },
    minWeight: {
      status: false,
      msj: "",
    },
    maxWeight: {
      status: false,
      msj: "",
    },
    lifeSpan: {
      status: false,
      msj: "",
    },
    image: {
      status: false,
      msj: "",
    },
  });

  const [input, setInput] = useState({
    name: "",
    minHeight: "",
    maxHeight: "",
    minWeight: "",
    maxWeight: "",
    lifeSpan: "",
    image: "",
  });

  function onChangeInput(e) {
    if (e.target.name === "minHeight" && e.target.value > input.maxHeight) {
      setInputErrors({
        ...inputErrors,
        minHeight: {
          status: true,
          msj: "Este valor no puede superar el Máximo",
        },
      });
      return;
    } else if (
      e.target.name === "maxHeight" &&
      e.target.value < input.minHeight
    ) {
      return;
    }
    if (e.target.name === "minWeight" && e.target.value > input.maxWeight) {
      setInputErrors({
        ...inputErrors,
        minWeight: {
          status: true,
          msj: "Este valor no puede superar el Máximo",
        },
      });
      return;
    } else if (
      e.target.name === "maxWeight" &&
      e.target.value < input.minWeight
    ) {
      return;
    }

    if (e.target.name === "image" && e.target.value.trim().length < 3) {
      setInputErrors({
        ...inputErrors,
        image: {
          status: true,
          msj: "URL no valida",
        },
      });
    }

    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  async function onHandleSubmit(event) {
    event.preventDefault();

   

    for (const key in input) {
          if(input[key].length === 0 ){
            alert('Los campos no pueden estar vacios')
            return
          }

    }

    for (const key in inputErrors) {
        if(inputErrors[key].status === true){
          alert('Corrija los errores')
          return
        }
    }

    if(optionSelects.length <= 0){
      alert('escoge un temperamento')
      return;
    }



    let arrStr = optionSelects.map((r) => ` ${r}`);

    let bodySend = {
      name: input.name,
      image: input.image,
      height: `${input.minHeight} - ${input.maxHeight}`,
      weight: `${input.minWeight} - ${input.maxWeight}`,
      temperament: arrStr.toString(),
      lifeSpan: input.lifeSpan,
    };
    const save = await fetch("http://localhost:3001/dogs/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify(bodySend),
    });

    const rta = await save.json();
    if (rta.id) {
      setInput({
        name: "",
        minHeight: "",
        maxHeight: "",
        minWeight: "",
        maxWeight: "",
        lifeSpan: "",
        image: "",
      });
      setOptionSelects([]);
      alert(`EL perro: ${rta.name} ha sido creado con exito`);
    } else if(!rta.id){

      alert(
        `EL perro: ${rta.name} no ha sido creado, por favor valide los campos`
      );
    }
  }

  return (
    <div>
      <div className="navbar">
        <SearchBar />
        <Nav />
      </div>
      <div className="containerCreate">
        <form className="form" onSubmit={onHandleSubmit}>
          <div className="headerCreate"></div>
          <p className="titleForm">CREA TU NUEVO PERRO!</p>

          <div className="contenedorCajas">
            <div className="containerInputs">
              <label> Name </label>
              <input
                onChange={(e) => {
                  if (e.target.value === "") {
                    setInputErrors({
                      ...inputErrors,
                      name: {
                        status: true,
                        mjs: "El campo tiene que estar lleno",
                      },
                    });
                    onChangeInput(e);
                  } else {
                    setInputErrors({
                      ...inputErrors,
                      name: {
                        status: false,
                        mjs: "El campo tiene que estar lleno",
                      },
                    });
                  }
                  onChangeInput(e);
                }}
                name="name"
                value={input.name}
                className="inputGeneric"
              />

              {inputErrors.name.status && (
                <p className="error">{inputErrors.name.mjs}</p>
              )}

              <label> Height </label>
              <div className="containerInputNumber">
                <input
                  className="inputGeneric numberInput"
                  type="number"
                  onChange={(e) => {
                    setInputErrors({
                      ...inputErrors,
                      minHeight: {
                        status: false,
                        msj: "",
                      },
                    });

                    onChangeInput(e);
                  }}
                  name="minHeight"
                  value={input.minHeight}
                  placeholder="MIN"
                />

                <input
                  className="inputGeneric numberInput"
                  type="number"
                  onChange={onChangeInput}
                  name="maxHeight"
                  value={input.maxHeight}
                  placeholder="MÁX"
                />
              </div>
              {inputErrors.minHeight.status && (
                <p className="error">{inputErrors.minHeight.msj}</p>
              )}
              <label> Weight </label>
              <div className="containerInputNumber">
                <input
                  className="inputGeneric numberInput"
                  type="number"
                  onChange={(e) => {
                    setInputErrors({
                      ...inputErrors,
                      minWeight: {
                        status: false,
                        msj: "",
                      },
                    });
                    onChangeInput(e);
                  }}
                  name="minWeight"
                  value={input.minWeight}
                  placeholder="MIN"
                />
                <input
                  className="inputGeneric numberInput"
                  type="number"
                  onChange={onChangeInput}
                  name="maxWeight"
                  value={input.maxWeight}
                  placeholder="MÁX"
                />
                 
              </div>
              {inputErrors.minWeight.status && (
                <p className="error">{inputErrors.minWeight.msj}</p>
              )}
              <label> Life Span </label>
              <input
               onChange={(e) => {
                if (e.target.value === "") {
                  setInputErrors({
                    ...inputErrors,
                    lifeSpan: {
                      status: true,
                      mjs: "El campo tiene que estar lleno",
                    },
                  });
                  onChangeInput(e);
                } else {
                  setInputErrors({
                    ...inputErrors,
                    lifeSpan: {
                      status: false,
                      mjs: "El campo tiene que estar lleno",
                    },
                  });
                }
                onChangeInput(e);
              }}
              name="lifeSpan"
              value={input.lifeSpan}
              className="inputGeneric"
              />
              <div/>
              {inputErrors.lifeSpan.status && (
                <p className="error">{inputErrors.lifeSpan.mjs}</p>
              )}
              <label> Image URL </label>
              <input
                onChange={(e) => {
                  setInputErrors({
                    ...inputErrors,
                    image: {
                      status: false,
                      msj: "",
                    },
                  });
                  onChangeInput(e);
                }}
                name="image"
                value={input.image}
                className="inputGeneric"
              />
                 {inputErrors.image.status && (
                <p className="error">{inputErrors.image.msj}</p>
              )}
            </div>
         

            <div className="segundaCaja">
              {/* Caja seleccionados */}
              <div className="container__options">
                {optionSelects.map((s, i) => {
                  return (
                    <ul
                      key={s + i}
                      onClick={() => {
                        let rta = optionSelects.filter((p) => p !== s);
                        setOptionSelects(rta);
                        if(optionSelects){}
                      }}
                      className="option__select"
                    >
                      {s}
                    </ul>
                  );
                })}
              </div>

              {/* Caja opciones*/}
              <div className="container__options">
                {temperaments.map((t, i) => {
                  return (
                    <ul
                      key={t + i}
                      onClick={() => {
                        let filt = optionSelects.filter((e) => e === t.name);

                        if (filt.length > 0) {
                          return;
                        }

                        setOptionSelects([...optionSelects, t.name]);
                      }}
                      className="option__select"
                    >
                      {t.name}
                    </ul>
                  );
                })}
              </div>
            </div>
          </div>

          <button className="buttonCreate" type="submit">
            A Crearlooo!!!
          </button>
        </form>
      </div>
    </div>
  );
}
