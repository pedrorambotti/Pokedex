import React from "react";
import { searchPokemon } from "../api";
const { useState } = React;

const Searchbar = () => {
  const [search, setSearch] = useState("");
  const [pokemon, setPokemon] = useState();

  const onChange = (evt) => {
    setSearch(evt.target.value);
  };
  const onClick = async (evt) => {
    const data = await searchPokemon(search);
    setPokemon(data);
  };
  return (
    <div>
      <div>
        <input placeholder="buscar Pokemon" onChange={onChange} />
      </div>
      <div>
        <button onClick>buscar</button>
      </div>
      <div>
        {" "}
        {pokemon && (
          <div>
            <div>nombre: {pokemon.name}</div>
            <div>peso:{pokemon.weight}</div>
            <img src={pokemon.sprites.front.default} />
          </div>
        )}
      </div>
    </div>
  );
};
export default Searchbar;
