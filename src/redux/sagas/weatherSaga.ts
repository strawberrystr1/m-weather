import { takeEvery, take, call, put, select } from 'redux-saga/effects'

import { getCityByIP, getWeatherByCityName } from '../../api/weather'
import { CHANGE_CITY, LOAD_WEATHER_BY_IP } from '../../constants/reduxActions'
import { IIPResponse, IOpenweatherResponse, IWeatherPayload } from '../../interfaces/api'
import { setCity, setCurrentCity } from '../actions/userActions'
import mapOpenweatherResponse from '../../utils/weatherResponseMappers'

import { WeatherByIPGenerator } from './types'

// function* getNewWeather() {
//   try {
//   } catch (error) {}
// }

// function* watchCityChange() {
//   takeEvery(CHANGE_CITY, getNewWeather)
// }

function* watchNewIP(): WeatherByIPGenerator {
  yield take(LOAD_WEATHER_BY_IP)
  const coords = yield call(getCityByIP)
  yield put(setCurrentCity((coords as IIPResponse).city))
  const city = yield select(state => state.weather[(coords as IIPResponse).city])
  if (city) return
  const weather = yield call(
    getWeatherByCityName,
    (coords as IIPResponse).latitude,
    (coords as IIPResponse).longitude,
  )

  const [current, daily] = mapOpenweatherResponse(weather as IOpenweatherResponse)

  const payload: IWeatherPayload = {
    city: (coords as IIPResponse).city,
    weather: {
      current,
      daily,
    },
  }
  yield put(setCity(payload))
}

export default function* () {
  yield watchNewIP()
}
