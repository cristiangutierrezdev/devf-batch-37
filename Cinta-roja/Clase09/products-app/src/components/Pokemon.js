import React, { useState, useEffect } from "react";
import axios from "axios";

function Pokemon(props) {
  // const [pokemones, setPokemones] = useState([]);

  const [pokemon, setPokemon] = useState([])

  useEffect(() => {
    // getPokemones();
    getPokemon()
  }, []);

  // const getPokemones = () => {
  //   axios
  //     .get("https://pokeapi.co/api/v2/pokemon")
  //     .then(result => {
  //       const { results } = result.data;
  //       setPokemones(results);
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // };

  // const showPokemones = () => {
  //   if (pokemones.length > 0) {
  //     return pokemones.map((elem, index) => {
  //       return <li key={index}>{elem.name}</li>;
  //     });
  //   }
  // };

  const getPokemon =  () => {
    let param = props.match.params.name
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${param}`)
      .then(result => {
        const { data } = result;
        setPokemon(data);
      })
      .catch(err => {
        console.log(err);
      });
  }

  const showPokemon = () => {
    console.log(props)
    if (pokemon) {
        return <h1>{pokemon.name}</h1>;
    }
  };


  return (
    <div>
      <ul id="pokemones">
        {/* {showPokemones()} */}
        {showPokemon()}
        </ul>
    </div>
  );
}

export default Pokemon;
