import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchPokemonByName, fetchPokemons } from '../../features/pokedexSlice';
import './SearchBar.css';

const SearchBar = () => {
  const dispatch = useDispatch();
  const [localSearch, setLocalSearch] = useState('');

  const handleSearch = () => {
    if (localSearch.trim() !== '') {
      dispatch(fetchPokemonByName(localSearch.toLowerCase()));
    }
  };

  const handleClear = () => {
    setLocalSearch('');
    dispatch(fetchPokemons());
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Buscar Pokémon..."
        value={localSearch}
        onChange={(e) => setLocalSearch(e.target.value)}
      />
      <button onClick={handleSearch}>Buscar</button>
      <button onClick={handleClear}>Limpiar</button>
    </div>
  );
};

export default SearchBar;
