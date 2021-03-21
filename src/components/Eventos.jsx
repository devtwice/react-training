import React, { Fragment, useState } from "react";

const Eventos = () => {
  const [texto, setTexto] = useState("Texto viejo");

  const cambiarTexto = () => {
    setTexto("Texto nuevo");
  };

  return (
    <Fragment>
      <hr />
      <h2>Eventos</h2>
      <p>Texto cambiado : {texto}</p>
      <button onClick={() => cambiarTexto()}>Cambiar texto</button>
    </Fragment>
  );
};

export default Eventos;
