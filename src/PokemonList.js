import style from "./PokemonList.module.css";

export default function PokemonList({ pokemonList, changeID }) {
  return (
    <ul className={style.mainSection}>
      {pokemonList.map((pokemon) => (
        <li
          className={style.listItem}
          key={pokemon.id}
          onClick={() => changeID(pokemon.id)}
        >
          {pokemon.id.toString().padStart(3, "0")} - {pokemon.name}
        </li>
      ))}
    </ul>
  );
}
