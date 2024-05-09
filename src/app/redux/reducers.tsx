import { combineReducers } from 'redux'
import PokemonReducer from './Pokemon/reducers'

export default combineReducers({
  ProductCart: PokemonReducer,
})

// import { combineReducers } from 'redux';

// import productCartReducer from './Pokemon/reducers';

// const rootReducer = combineReducers({
//   ProductCart: productCartReducer,
//   // Diğer dilimleri (slices) burada ekleyin...
// });

// export type RootState = ReturnType<typeof rootReducer>;

// export default rootReducer;
