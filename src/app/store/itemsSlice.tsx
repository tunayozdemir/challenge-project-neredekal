// store/itemsSlice.ts

import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { fetchPokemons, fetchPokemonDetails } from '../lib/api';

interface ItemsState {
  items: any[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: ItemsState = {
  items: [],
  status: 'idle',
  error: null,
};

// Asenkron işlemi tanımlayın
export const fetchItemsAsync = createAsyncThunk(
  'items/fetchItems',
  async () => {
    const pokemons = await fetchPokemons();
    const detailedPokemons = await Promise.all(
      pokemons.map(async (pokemon) => {
        const details = await fetchPokemonDetails(pokemon.url);
        return { ...pokemon, details };
      })
    );
    return detailedPokemons;
  }
);

const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchItemsAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchItemsAsync.fulfilled, (state, action: PayloadAction<any[]>) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchItemsAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch items';
      });
  },
});

export default itemsSlice.reducer;
