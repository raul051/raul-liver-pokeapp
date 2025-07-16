import "./App.css";
import { Routes, Route } from "react-router-dom";
import PokemonList from "./features/pokemonList/PokemonList";
import PokemonDetail from "./features/PokemonDetails/PokemonDetail";
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <MainLayout showSearchBar={true}>
            <PokemonList />
          </MainLayout>
        }
      />
      <Route
        path="/detail/:pokemonName"
        element={
          <MainLayout>
            <PokemonDetail />
          </MainLayout>
        }
      />
    </Routes>
  );
}

export default App;
