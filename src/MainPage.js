import PokemonList from "./PokemonList.js";
import { Outlet } from "react-router-dom";

export default function MainPage() {
  return (
    <div className="flex-container">
      <PokemonList />
      <Outlet />
    </div>
  );
}
