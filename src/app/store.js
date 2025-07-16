import { configureStore } from '@reduxjs/toolkit';
import pokedexReducer from '../features/pokedexSlice';

export const store = configureStore({
  reducer: {
    pokedex: pokedexReducer,
  },
});
