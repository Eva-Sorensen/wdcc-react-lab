import MainPage from "./MainPage.js";
import PokemonDetails from "./PokemonDetails.js";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />}>
        <Route path=":id" element={<PokemonDetails />} />
      </Route>
    </Routes>
  );
}

export default App;
