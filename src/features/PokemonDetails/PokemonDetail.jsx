import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './PokemonDetail.css';

const PokemonDetail = () => {
  const { pokemonName } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const getPokemon = async () => {
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        setPokemon(response.data);
      } catch (error) {
        console.error('Error al cargar el Pokémon:', error);
      }
    };

    getPokemon();
  }, [pokemonName]);

  if (!pokemon) return <p>Cargando detalle de {pokemonName}...</p>;

  return (
    <div className="pokemon-detail">
      <h2>{pokemon.name.toUpperCase()}</h2>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <p><strong>ID:</strong> {pokemon.id}</p>
      <p><strong>Altura:</strong> {pokemon.height}</p>
      <p><strong>Peso:</strong> {pokemon.weight}</p>
      <p><strong>Tipos:</strong> {pokemon.types.map(t => t.type.name).join(', ')}</p>
    </div>
  );
};

export default PokemonDetail;
