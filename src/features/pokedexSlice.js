import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPokemons = createAsyncThunk(
  'pokedex/fetchPokemons',
  async (offset = 0) => {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${offset}`);
    const basicList = response.data.results;

    const detailedList = await Promise.all(
      basicList.map(async (pokemon) => {
        const details = await axios.get(pokemon.url);
        return {
          name: details.data.name,
          id: details.data.id,
          image: details.data.sprites.front_default,
          types: details.data.types.map(t => t.type.name),
        };
      })
    );

    return detailedList;
  }
);


// Búsqueda por nombre
export const fetchPokemonByName = createAsyncThunk(
  'pokedex/fetchPokemonByName',
  async (name) => {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
    return [{
      name: response.data.name,
      id: response.data.id,
      image: response.data.sprites.front_default,
      types: response.data.types.map(t => t.type.name),
    }];
  }
);

const pokedexSlice = createSlice({
  name: 'pokedex',
  initialState: {
    pokemons: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokemons.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPokemons.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.pokemons = [...state.pokemons, ...action.payload];
      })
      .addCase(fetchPokemonByName.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPokemonByName.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.pokemons = action.payload;
      })
      .addCase(fetchPokemons.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchPokemonByName.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default pokedexSlice.reducer;
