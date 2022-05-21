import pokemonData from "./pokemon.json";
import PokemonList from "./PokemonList.js";
import PokemonDetails from "./PokemonDetails.js";

import { useState } from "react";

function App() {
  const [currentID, setCurrentID] = useState(1);

  const changePokemonID = (id) => {
    setCurrentID(id);
  };

  return (
    <div className="flex-container">
      <PokemonList pokemonList={pokemonData} changeID={changePokemonID} />
      <PokemonDetails pokemon={pokemonData[currentID - 1]} />
    </div>
  );
}

export default App;
