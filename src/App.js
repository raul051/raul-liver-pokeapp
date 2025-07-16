import "./App.css";
import { Routes, Route } from "react-router-dom";
import PokemonList from "./features/pokemonList/PokemonList";
import PokemonDetail from "./features/PokemonDetails/PokemonDetail";
import MainLayout from "./layouts/MainLayout";
import AuthPage from "./pages/authPage";
import PrivateRoute from "./components/privateRoute/privateRoute";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<AuthPage />} />
      <Route
        path="/"
        element={
          <PrivateRoute>
            <MainLayout showSearchBar={true}>
              <PokemonList />
            </MainLayout>
          </PrivateRoute>
        }
      />
      <Route
        path="/detail/:pokemonName"
        element={
          <PrivateRoute>
            <MainLayout>
              <PokemonDetail />
            </MainLayout>
          </PrivateRoute>
        }
      />
    </Routes>
  );
}

export default App;
