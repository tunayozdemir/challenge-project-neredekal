
import { configureStore } from '@reduxjs/toolkit';
import PokemonItemSlice from './Pokemon/PokemonItemSlice';
import counterReducer from './Counter/CounterSlice';
import SettingsReducer from './Pokemon/settingsSlice'; 

const store = configureStore({
  reducer: {
    items: PokemonItemSlice,
    counter: counterReducer,
    settings: SettingsReducer,
  },
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
