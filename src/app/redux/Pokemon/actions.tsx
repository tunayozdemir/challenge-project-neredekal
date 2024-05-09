import types from './types';

interface Pokemon {
  name: string;
  url: string;
}

interface SetPokemonListAction {
  type: typeof types.SET_ALL_POKEMON_LIST;
  payload: Pokemon[];
}

interface GetPokemonListAction {
  type: typeof types.GET_ALL_POKEMON_LIST;
  payload: Pokemon[];
}

interface PokemonActions {
  setPokemonList: (items: Pokemon[]) => SetPokemonListAction;
  getPokemonList: (items: Pokemon[]) => GetPokemonListAction;
}

const setPokemonList = (items: Pokemon[]): SetPokemonListAction => ({
  type: types.SET_ALL_POKEMON_LIST,
  payload: items,
});

const getPokemonList = (items: Pokemon[]): GetPokemonListAction => ({
  type: types.GET_ALL_POKEMON_LIST,
  payload: items,
});


const pokemonActions: PokemonActions = {
  setPokemonList,
  getPokemonList,
};

export default pokemonActions;