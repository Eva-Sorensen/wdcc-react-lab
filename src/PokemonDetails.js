import pokemonData from "./pokemon.json";
import { useParams } from "react-router-dom";
import style from "./PokemonDetails.module.css";

export default function PokemonDetails() {
  const { id } = useParams();
  if (isNaN(id) || id > 150 || id < 1) {
    return (
      <div className={style.mainSection}>
        <div className={style.innerSection}>
          <p className={style.discription}>Not a valid pokemon id</p>
        </div>
      </div>
    );
  }

  let pokemon = pokemonData[id - 1];
  return (
    <div className={style.mainSection}>
      <div className={style.innerSection}>
        <h2 className={style.heading}>
          #{pokemon.id.toString().padStart(3, "0")} - {pokemon.name}
        </h2>
        <img
          className={style.image}
          src={"https://trex-sandwich.com/wdcc-workshop" + pokemon.imageUrl}
          alt={"image of " + pokemon.name}
        />
        <p className={style.discription}>{pokemon.dexEntry}</p>
      </div>
    </div>
  );
}
