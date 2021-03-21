import React, { useState } from "react";

const Formulario = () => {
  const [fruit, setFruit] = useState("");
  const [description, setDescription] = useState("");
  const [listFruits, setListFruits] = useState([]);

  const addFruit = (e) => {
    e.preventDefault();
    if (!fruit.trim() || !description.trim()) {
      console.log("Rellene los campos");
      return; //se sale de la función si da error
    }

    setListFruits([...listFruits, { name: fruit, description: description }]);

    console.log("procesandoDatos");
    e.target.reset(); //limpia los campos
    setFruit("");
    setDescription("");
  };

  return (
    <div>
      <h3>Formulario</h3>
      <form action="" onSubmit={addFruit}>
        <input
          type="text"
          placeholder="Ingrese fruta"
          className="form-control mb-2"
          onChange={(e) => setFruit(e.target.value)}
        />
        <input
          type="text"
          placeholder="Ingrese descripción"
          className="form-control mb-2"
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className="btn btn-primary btn-block" type="submit">
          Agregar
        </button>
      </form>
      <div>
        <ul>
          {listFruits.length > 0
            ? listFruits.map((fruit, index) => (
                <li>
                  {fruit.name} - {fruit.description}
                </li>
              ))
            : null}
        </ul>
      </div>
    </div>
  );
};

export default Formulario;
