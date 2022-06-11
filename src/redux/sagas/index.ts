import { all, call, spawn } from 'redux-saga/effects'

export default function* () {
  const sagas = [].map(saga => {
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
