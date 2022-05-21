import pokemonData from "./pokemon.json";
import { Link } from "react-router-dom";
import style from "./PokemonList.module.css";

export default function PokemonList() {
  return (
    <ul className={style.mainSection}>
      {pokemonData.map((pokemon) => (
        <Link to={pokemon.id.toString()} key={pokemon.id}>
          <li className={style.listItem}>
            {pokemon.id.toString().padStart(3, "0")} - {pokemon.name}
          </li>
        </Link>
      ))}
    </ul>
  );
}
