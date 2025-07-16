import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPokemons = createAsyncThunk('pokedex/fetchPokemons', async () => {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=20');
    return response.data.results;
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
