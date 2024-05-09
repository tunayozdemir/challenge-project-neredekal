
import { configureStore } from '@reduxjs/toolkit';
import itemsReducer from './itemsSlice';
import counterReducer from './counterSlice';

const store = configureStore({
    reducer: {
        items: itemsReducer,
        counter: counterReducer,
    },
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
