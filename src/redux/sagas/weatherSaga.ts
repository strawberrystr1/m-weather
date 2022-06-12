import { takeEvery, take, call, put, select, fork } from 'redux-saga/effects'

import { getCityByIP, getCityCoords, getWeatherByCityName } from '../../api/weather'
import {
  CHANGE_CITY,
  LOAD_WEATHER_BY_IP,
  SET_CITY,
  SET_CURRENT_CITY,
} from '../../constants/reduxActions'
import { IIPResponse, IOpenweatherResponse, IWeatherPayload } from '../../interfaces/api'
import { setCity, setCityError, setCurrentCity } from '../actions/userActions'
import mapOpenweatherResponse from '../../utils/weatherResponseMappers'

import { SetWeatherGenerator, WeatherByIPGenerator } from './types'
import { IInitialErrors, IInitialUser, IInitialWeather } from '../reducers/types'

// function* getNewWeather() {
//   try {
//   } catch (error) {}
// }

// function* watchCityChange() {
//   takeEvery(CHANGE_CITY, getNewWeather)
// }

function* setNewWeather(): SetWeatherGenerator {
  const user = yield select(state => state.user)
  const weatherStore = yield select(state => state.weather)
  const errorStore = yield select(state => state.errors)

  if ((errorStore as IInitialErrors).cityError) {
    yield put(setCityError(''))
  }

  const { currentCity } = user as IInitialUser
  const weatherStoreTyped = weatherStore as IInitialWeather

  if (weatherStoreTyped[currentCity]) return

  const coords = yield call(getCityCoords, currentCity)

  if (coords instanceof Error) {
    yield put(setCityError(coords.message))
    return
  }

  const weather = yield call(
    getWeatherByCityName,
    (coords as IIPResponse).latitude,
    (coords as IIPResponse).longitude,
  )

  const [current, daily] = mapOpenweatherResponse(weather as IOpenweatherResponse)

  const payload: IWeatherPayload = {
    city: currentCity,
    weather: {
      current,
      daily,
    },
  }

  yield put(setCity(payload))
}

function* watchNewIP(): WeatherByIPGenerator {
  yield take(LOAD_WEATHER_BY_IP)
  const coords = yield call(getCityByIP)
  yield put(setCurrentCity((coords as IIPResponse).city))
}

function* watchCityChange() {
  yield takeEvery(SET_CURRENT_CITY, setNewWeather)
}

export default function* () {
  yield fork(watchNewIP)
  yield fork(watchCityChange)
}
