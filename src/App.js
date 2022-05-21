import pokemonData from "./pokemon.json";
import PokemonList from "./PokemonList.js";
import PokemonDetails from "./PokemonDetails.js";

import React, { useState } from "react";

function App() {
  const [currentID, setCurrentID] = useState(1);

  const changePokemonID = (id) => {
    setCurrentID(id);
  };

  return (
    <div className="container">
      <p> test</p>
      <PokemonDetails pokemon={pokemonData[currentID - 1]} />
      <PokemonList pokemonList={pokemonData} changeID={changePokemonID} />
    </div>
  );
}

export default App;
