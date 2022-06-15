import { SET_CITY } from '@constants/reduxActions'
import { IDispatchWeatcherACtion } from '@interfaces/reduxAction'

import { IInitialWeather } from './types'

const initialState = {}

export default (
  state = initialState,
  action: IDispatchWeatcherACtion,
): IInitialWeather => {
  const { type, payload } = action

  switch (type) {
    case SET_CITY:
      return { ...state, [payload.city]: payload.weather }
    default:
      return state
  }
}
