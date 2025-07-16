import './App.css';
import { Routes, Route } from 'react-router-dom';

import PokemonList from './features/pokemonList/PokemonList';
import PokemonDetail from './features/PokemonDetails/PokemonDetail';
import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar'

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <SearchBar />
              <PokemonList />
            </>
          }
        />
        <Route path="/detail/:pokemonName" element={<PokemonDetail />} />
      </Routes>
    </>
  );
}

export default App;
