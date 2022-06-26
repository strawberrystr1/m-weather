import { takeEvery, take, call, put, select, fork } from 'redux-saga/effects'

import {
  getCityByIP,
  getCityCoords,
  getWeatherByCityNameOpenweather,
  getWeatherByCityNameStormglass,
} from '@api/weather'
import { CHANGE_API, LOAD_WEATHER_BY_IP, SET_CURRENT_CITY } from '@constants/reduxActions'
import {
  IIPResponse,
  IOpenweatherResponse,
  IStormglassResponse,
  IWeatherPayload,
} from '@interfaces/api'
import {
  changePicture,
  loadingOff,
  loadingOn,
  setCity,
  setCityError,
  setCountry,
  setCurrentCity,
} from '@redux/actions/userActions'
import mapOpenweatherResponse, { mergeWithOpenWeather } from '@utils/weatherResponseMappers'
import { IInitialErrors, IInitialUser, IInitialWeather } from '@redux/reducers/types'

import { SetWeatherGenerator, WeatherByIPGenerator } from './types'

function* setNewWeather(): SetWeatherGenerator {
  const user = yield select(state => state.user)
  const weatherStore = yield select(state => state.weather)
  const errorStore = yield select(state => state.errors)

  yield put(loadingOn())

  if ((errorStore as IInitialErrors).cityError) {
    yield put(setCityError(''))
  }

  const { currentCity, currentAPI } = user as IInitialUser
  const storeTyped = weatherStore as IInitialWeather
  const todayDay = new Date().getDate()

  /* prettier-ignore */

  if (
    storeTyped[currentAPI as keyof IInitialWeather][currentCity]
    && storeTyped[currentAPI as keyof IInitialWeather][currentCity].createDate === todayDay
  ) {
    yield put(loadingOff())
    return
  }

  const coords = yield call(getCityCoords, currentCity)
  yield put(setCountry((coords as IIPResponse).country))

  if (coords instanceof Error) {
    yield put(setCityError(coords.message))
    yield put(loadingOff())
    return
  }

  const weather = yield call(
    getWeatherByCityNameOpenweather,
    (coords as IIPResponse).latitude,
    (coords as IIPResponse).longitude,
  )

  const [current, daily] = mapOpenweatherResponse(weather as IOpenweatherResponse)

  let payload: IWeatherPayload

  if (currentAPI === 'stormglass') {
    const stormglassWeather = yield call(
      getWeatherByCityNameStormglass,
      (coords as IIPResponse).latitude,
      (coords as IIPResponse).longitude,
    )

    if (stormglassWeather instanceof Error) {
      yield put(setCityError(stormglassWeather.message))
      yield put(loadingOff())
      return
    }

    const weatherData = mergeWithOpenWeather(
      stormglassWeather as IStormglassResponse,
      current,
      daily,
    )
    payload = {
      city: currentCity,
      weather: {
        current: weatherData[0],
        daily: weatherData[1],
        createDate: todayDay,
      },
    }
  } else {
    payload = {
      city: currentCity,
      weather: {
        current,
        daily,
        createDate: todayDay,
      },
    }
  }

  yield put(setCity(payload, currentAPI))
  yield put(changePicture(current.icon))
  yield put(loadingOff())
}

function* watchNewIP(): WeatherByIPGenerator {
  yield take(LOAD_WEATHER_BY_IP)
  const coords = yield call(getCityByIP)
  yield put(setCurrentCity((coords as IIPResponse).city))
}

function* watchCityChange() {
  yield takeEvery(SET_CURRENT_CITY, setNewWeather)
}

function* watchAPIChange() {
  yield takeEvery(CHANGE_API, setNewWeather)
}

export default function* weatherSaga() {
  yield fork(watchNewIP)
  yield fork(watchCityChange)
  yield fork(watchAPIChange)
}
