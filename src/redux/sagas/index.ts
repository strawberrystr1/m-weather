import { all, call, spawn } from 'redux-saga/effects'

import weatherSaga from './weatherSaga'

export default function* () {
  const sagas = [weatherSaga].map(saga => {
    return spawn(function* () {
      while (true) {
        try {
          yield call(saga)
          break
        } catch (e) {
          console.log(e)
        }
      }
    })
  })

  yield all(sagas)
}
