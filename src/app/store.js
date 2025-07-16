import { configureStore } from '@reduxjs/toolkit';
import pokedexReducer from '../features/pokedexSlice';
import searchReducer from '../features/searchSlice';

export const store = configureStore({
  reducer: {
    pokedex: pokedexReducer,
    search: searchReducer,
  },
});
