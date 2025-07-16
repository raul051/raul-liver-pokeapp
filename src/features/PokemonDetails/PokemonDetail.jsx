import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./PokemonDetail.css";
import {getColorByType} from "../../helpers/getColorByType";

/**
 * Componente que muestra los detalles de un Pokémon específico.
 *
 * Obtiene la información del Pokémon desde la API de PokeAPI usando el nombre proporcionado en la URL.
 * Muestra información básica como nombre, número, tipos, imagen, altura, peso y estadísticas.
 *
 * @component
 * @returns {JSX.Element} Elemento JSX que representa la tarjeta de detalle del Pokémon.
 *
 * @example
 * <PokemonDetail />
 *
 * @see https://pokeapi.co/
 */

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
        console.log("Pokemon data:", response.data);
      } catch (error) {
        console.error("Error al cargar el Pokémon:", error);
      }
    };

    getPokemon();
  }, [pokemonName]);

  

  if (!pokemon) return <p>Cargando detalle de {pokemonName}...</p>;

  return (
    <div className="pokemon-detail-card">
      <div className="pokemon-header" style={{ background: `linear-gradient(135deg, ${getColorByType(pokemon.types[0].type.name)[0]}, ${getColorByType(pokemon.types[0].type.name)[1]})` }}>
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
        <div className="pokemon-details">
          <p>
          <strong>Altura:</strong> {pokemon.height / 10} m
        </p>
        <p>
          <strong>Peso:</strong> {pokemon.weight / 10} kg
        </p>
        </div>
        <div className="pokemon-stats-section">
          <h3>Estadísticas</h3>
          <div className="pokemon-stats-container">
            {pokemon.stats.map((stat) => (
              <div key={stat.stat.name} className="pokemon-stat">
                <span className="stat-name">
                  {stat.stat.name.toUpperCase()}:
                </span>
                <span className="stat-value">{stat.base_stat}</span>
                <div className="stat-bar">
                  <div
                    className="stat-bar-fill"
                    style={{ width: `${(stat.base_stat / 200) * 100}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetail;
