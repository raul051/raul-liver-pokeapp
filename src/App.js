import './App.css';
import { Routes, Route } from 'react-router-dom';

import PokemonList from './features/pokemonList/PokemonList';
import PokemonDetail from './features/PokemonDetails/PokemonDetail';

function App() {
  return (
    <Routes>
      <Route path="/" element={<PokemonList />} />
      <Route path="/detail/:pokemonName" element={<PokemonDetail />} />
    </Routes>
  );
}

export default App;
