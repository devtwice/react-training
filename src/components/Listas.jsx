import React, { useState } from "react";

const Listas = () => {
  const initialState = [
    { id: 1, texto: "texto 1" },
    { id: 2, texto: "texto 2" },
    { id: 3, texto: "texto 3" },
  ];
  const [list, setList] = useState(initialState);

  // const arrayUno = ["Perro", "Gato", "Pollo"];
  // const arrayDos = ["Pato", "Tigre", "Cisne"];
  // const arrayJoin = [...arrayUno, ...arrayDos];

  // console.log(arrayJoin);

  const addItem = () => {
    console.log("item added");
    setList([...list, { id: 4, texto: "texto 4" }]);
  };

  return (
    <div>
      <h2>Listas</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ alignSelf: "start" }}>
          <button onClick={() => addItem()}>Añadir item nuevo</button>
        </div>
        <ul>
          {list.map((item) => (
            <li key={item.id}>{item.texto}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Listas;
