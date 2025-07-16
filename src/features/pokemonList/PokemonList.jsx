import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPokemons } from "../pokedexSlice";
import { Link } from "react-router-dom";
import "./PokemonList.css";

const PokemonList = () => {
  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.pokedex.pokemons);
  const status = useSelector((state) => state.pokedex.status);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchPokemons());
    }
  }, [status, dispatch]);

  if (status === "loading") return <p>Cargando Pokédex...</p>;
  if (status === "failed") return <p>Error al cargar Pokédex.</p>;

  function getColorByType(type) {
    switch (type) {
      case "grass":
        return "#78C850";
      case "fire":
        return "#F08030";
      case "water":
        return "#6890F0";
      case "electric":
        return "#F8D030";
      case "psychic":
        return "#F85888";
      case "bug":
        return "#A8B820";
      case "normal":
        return "#A8A878";
      default:
        return "#f4f4f4";
    }
  }

  return (
    <div className="pokemon-grid">
      {pokemons.map((pokemon) => (
        <Link
          key={pokemon.id}
          to={`/detail/${pokemon.name}`}
          className="pokemon-card"
          style={{ backgroundColor: getColorByType(pokemon.types[0]) }}
        >
          <div className="pokemon-info">
            <h3>{pokemon.name.toUpperCase()}</h3>
            <p>Tipo: {pokemon.types[0]}</p>
            <p>ID: {pokemon.id}</p>
          </div>
          <img src={pokemon.image} alt={pokemon.name} />
        </Link>
      ))}
    </div>
  );
};

export default PokemonList;
