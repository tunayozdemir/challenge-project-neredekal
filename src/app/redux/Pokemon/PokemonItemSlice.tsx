import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { fetchPokemons, fetchPokemonDetails } from '../../utils/api';

// Pokémon nesnesi için daha kesin bir arayüz tanımı
interface Pokemon {
  name: string;
  url: string;
  details: PokemonDetails;
}

// Pokémon detayları için arayüz tanımı
interface PokemonDetails {
  id: number;
  name: string;
  sprites: { front_default: string; };
  abilities: { ability: { name: string; }; }[];
  types: { type: { name: string; }; }[];
}

// initialState tür tanımı
interface ItemsState {
  items: Pokemon[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: ItemsState = {
  items: [],
  status: 'idle',
  error: null,
};

export const fetchItemsAsync = createAsyncThunk('items/fetchItems',
  async () => {
    const pokemons = await fetchPokemons();
    const detailedPokemons = await Promise.all(
      pokemons.map(async (pokemon: any) => {
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
      .addCase(fetchItemsAsync.fulfilled, (state, action: PayloadAction<Pokemon[]>) => {
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
