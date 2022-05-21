export default function PokemonDetails({ pokemon }) {
  return (
    <div>
      <h2>
        #{pokemon.id.toString().padStart(3, "0")} - {pokemon.name}
      </h2>
      <img src={pokemon.imageUrl} alt={"image of " + pokemon.name} />
      <p>{pokemon.dexEntry}</p>
    </div>
  );
}
