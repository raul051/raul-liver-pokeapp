import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPokemons } from "../pokedexSlice";
import { Link } from "react-router-dom";
import "./PokemonList.css";

const PokemonList = () => {
  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.pokedex.pokemons);
  const status = useSelector((state) => state.pokedex.status);
  const searchTerm = useSelector((state) => state.search.term);

  const filteredPokemons = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    if (pokemons.length === 0) {
      dispatch(fetchPokemons(0));
    }
  }, [pokemons.length, dispatch]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
          document.body.offsetHeight - 100 &&
        status !== "loading"
      ) {
        dispatch(fetchPokemons(pokemons.length));
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [status, pokemons.length, dispatch]);

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
        return "#A8A878";
    }
  }

  return (
    <>
      <div className="pokemon-grid">
        {filteredPokemons.map((pokemon) => (
          <Link
            key={pokemon.id}
            to={`/detail/${pokemon.name}`}
            className="pokemon-card"
            style={{ backgroundColor: getColorByType(pokemon.types[0]) }}
          >
            <div className="pokemon-info">
              <h3>{pokemon.name.toUpperCase()}</h3>
              <p>
                <strong>Tipo: </strong>
                {pokemon.types[0]}
              </p>
              <p>
                <strong>ID: </strong>
                {pokemon.id}
              </p>
            </div>
            <img src={pokemon.image} alt={pokemon.name} />
          </Link>
        ))}
      </div>

      {status === "loading" && (
        <div className="loader">
          <p>Cargando más Pokémon...</p>
        </div>
      )}
      {status === "failed" && (
        <div className="loader">
          <p>Error al cargar Pokédex.</p>
        </div>
      )}
    </>
  );
};

export default PokemonList;
