import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./PokemonDetail.css";

const PokemonDetail = () => {
  const { pokemonName } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const getPokemon = async () => {
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
        );
        setPokemon(response.data);
        console.log('Pokemon data:', response.data);
        
      } catch (error) {
        console.error("Error al cargar el Pokémon:", error);
      }
    };

    getPokemon();
  }, [pokemonName]);

  if (!pokemon) return <p>Cargando detalle de {pokemonName}...</p>;

  return (
    <div className="pokemon-detail-card">
      <div className="pokemon-header">
        <div className="basic-info">
          <h2>{pokemon.name.toUpperCase()}</h2>
          <p>#{pokemon.id.toString().padStart(3, "0")}</p>
        </div>
        <div className="pokemon-types">
          {pokemon.types.map((t) => (
            <span key={t.slot} className={`type-badge ${t.type.name}`}>
              {t.type.name}
            </span>
          ))}
        </div>
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      </div>

      <div className="pokemon-info-section">
        <p>
          <strong>Altura:</strong> {pokemon.height / 10} m
        </p>
        <p>
          <strong>Peso:</strong> {pokemon.weight / 10} kg
        </p>
      </div>
    </div>
  );
};

export default PokemonDetail;
