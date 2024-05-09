import axios from 'axios';
import { takeLatest, call, put } from 'redux-saga/effects';
import types from './types';
import actions from './actions';

const fetchPokemon = async (): Promise<any> => {
  try {
    const { data } = await axios.get('http://www.omdbapi.com/?i=tt3896198&apikey=2319ff36&s=spider&page=1');
    return data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

function* handleGetPokemon(): Generator {
  try {
    const response: any = yield call(fetchPokemon);
    yield put(actions.setPokemonList(response));
  } catch (err) {
    console.log(err);
    alert(err);
  }
}

export default function* rootSaga(): Generator {
  yield takeLatest(types.GET_ALL_POKEMON_LIST, handleGetPokemon);
}
