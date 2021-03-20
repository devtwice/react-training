import React from "react";

const Variables = () => {
  const saludo = "Hola desde constante";
  const imagen =
    "https://upload.wikimedia.org/wikipedia/commons/1/1f/TWICE_LOGO_UNIVERSAL.png";
  return (
    <div>
      <h2>Nuevo componente {saludo}</h2>
      <div>
        <img style={{ width: "40%" }} src={imagen} alt="" />
      </div>
    </div>
  );
};

export default Variables;
