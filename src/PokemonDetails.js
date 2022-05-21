import style from "./PokemonDetails.module.css";

export default function PokemonDetails({ pokemon }) {
  return (
    <div className={style.mainSection}>
      <div className={style.innerSection}>
        <h2 className={style.heading}>
          #{pokemon.id.toString().padStart(3, "0")} - {pokemon.name}
        </h2>
        <img
          className={style.image}
          src={pokemon.imageUrl}
          alt={"image of " + pokemon.name}
        />
        <p className={style.discription}>{pokemon.dexEntry}</p>
      </div>
    </div>
  );
}
