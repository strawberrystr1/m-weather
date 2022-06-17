import { SET_CITY } from '@constants/reduxActions'
import { IDispatchWeatcherACtion } from '@interfaces/reduxAction'

import { IInitialWeather } from './types'

const initialState = {
  openweather: {},
  stormglass: {},
}

export default (state = initialState, action: IDispatchWeatcherACtion): IInitialWeather => {
  const { type, payload, meta } = action

  switch (type) {
    case SET_CITY: {
      if (meta === 'openweather') {
        return { ...state, openweather: { ...state.openweather, [payload.city]: payload.weather } }
      }
      return { ...state, stormglass: { ...state.stormglass, [payload.city]: payload.weather } }
    }
    default:
      return state
  }
}
