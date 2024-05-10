
import { configureStore } from '@reduxjs/toolkit';
import PokemonReducer from './Pokemon/PokemonItemSlice';
import CounterReducer from './Counter/CounterSlice';

const store = configureStore({
    reducer: {
        items: PokemonReducer,
        counter: CounterReducer,
    },
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
