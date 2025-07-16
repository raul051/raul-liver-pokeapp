import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPokemons = createAsyncThunk('pokedex/fetchPokemons', async () => {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=20');
    const pokemonBasicList = response.data.results;

    const detailedList = await Promise.all(
        pokemonBasicList.map(async (pokemon) => {
            const details = await axios.get(pokemon.url);
            return {
                name: pokemon.name,
                id: details.data.id,
                image: details.data.sprites.front_default,
                types: details.data.types.map(t => t.type.name),
            };

        })
    );

    return detailedList;
});

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
                state.pokemons = action.payload;
            })
            .addCase(fetchPokemons.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export default pokedexSlice.reducer;
