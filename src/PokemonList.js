export default function PokemonList({ pokemonList, changeID }) {
  return (
    <ul>
      {pokemonList.map((pokemon) => (
        <li key={pokemon.id} onClick={() => changeID(pokemon.id)}>
          {pokemon.id.toString().padStart(3, "0")} {pokemon.name}
        </li>
      ))}
    </ul>
  );
}
