import { all } from 'redux-saga/effects'
import Pokemon from './Pokemon/sagas'

function* rootSaga() {
  yield all([
    Pokemon()
  ])
}

export default rootSaga;