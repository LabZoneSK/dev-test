import {call} from 'redux-saga/effects'
import cardsSaga from './card-list/saga'

export function* rootSaga() {
   yield call(cardsSaga)
}