import actionTypes from './types';
import { Action } from 'redux'; // Redux'tan Action tipi import ediliyor

interface Pokemon { }

interface PokemonAction extends Action {
  type: typeof actionTypes.SET_ALL_POKEMON_LIST;
  payload: Pokemon[];
}


const initialState: Pokemon[] = [];


const reducer = (state = initialState, action: PokemonAction): Pokemon[] => {
  switch (action.type) {
    case actionTypes.SET_ALL_POKEMON_LIST:
      return [...state, ...action.payload];
    default:
      return state;
  }
};

export default reducer;
