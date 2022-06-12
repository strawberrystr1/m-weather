import { createStore, applyMiddleware, combineReducers } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from '@redux-devtools/extension'
import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer } from 'redux-persist'

import rootSaga from './sagas'
import userReducer from './reducers/user'
import todoReducer from './reducers/todos'
import weatherReducer from './reducers/weather'

const persistCongif = {
  key: 'root',
  storage,
}

const sagaMiddleware = createSagaMiddleware()
const rootReducer = combineReducers({
  user: userReducer,
  todo: todoReducer,
  weather: weatherReducer,
})

const persistedReducer = persistReducer(persistCongif, rootReducer)

const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
)

sagaMiddleware.run(rootSaga)
export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
