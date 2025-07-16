import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPokemons } from '../pokedexSlice';
import { Link } from 'react-router-dom';
import './PokemonList.css';

const PokemonList = () => {
  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.pokedex.pokemons);
  const status = useSelector((state) => state.pokedex.status);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchPokemons());
    }
  }, [status, dispatch]);

  if (status === 'loading') return <p>Cargando Pokédex...</p>;
  if (status === 'failed') return <p>Error al cargar Pokédex.</p>;

  return (
    <div className="pokemon-grid">
      {pokemons.map((pokemon, index) => (
        <Link key={index} to={`/detail/${pokemon.name}`} className="pokemon-card">
          <h3>{pokemon.name.toUpperCase()}</h3>
          <p>ID: {index + 1}</p>
        </Link>
      ))}
    </div>
  );
};

export default PokemonList;
