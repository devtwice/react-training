import React, { useState } from "react";

const Contador = () => {
  const [count, setCount] = useState(0);
  const eventoClick = () => {
    console.log("le has dado al click");
  };

  return (
    <div>
      <p>Counter: {count}</p>
      <h2>{count > 9 ? "Felicidades" : "Aún falta"}</h2>
      <button onClick={() => eventoClick(setCount(count + 1))}>Click</button>
    </div>
  );
};

export default Contador;
