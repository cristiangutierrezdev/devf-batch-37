import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom"

function Button(props) {
  const [name, setName] = useState("Cargando nombre");
  const [lastName, setLastName] = useState("Cargando apellido");

  useEffect(() => {
    // alert("Usando effect");
    setTimeout(() => {
      setName("Cristian");
    }, 2000);
  }, [name]);

  const changeName = () => {
    return setLastName("Gutierrez");
  };
console.log(props)
  return (
    <div>
      <h3>
        {name} {lastName}
      </h3>
      <Link to="/pokemon/pikachu">Go to Pokemon</Link>
    </div>
  );
}

export default Button;
