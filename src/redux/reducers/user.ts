import {
  INIT_USER_ERROR,
  RECEIVE_TOKEN,
  SET_CURRENT_CITY,
  SET_PREVIOUS_CITY,
  CHANGE_API,
  SET_PICTURE,
  LOADING_ON,
  LOADING_OFF,
  LOGOUT,
  SET_COUNTRY,
} from '@constants/reduxActions'
import IDispatchUserAction from '@interfaces/reduxAction'

import { IInitialUser } from './types'

const initialState: IInitialUser = {
  userError: false,
  token: '',
  currentCity: '',
  previousCity: '',
  country: '',
  currentAPI: 'openweather',
  currentPicture: '',
  loading: false,
}

const userReducer = (state = initialState, action: IDispatchUserAction): IInitialUser => {
  const { type, payload } = action

  switch (type) {
    case INIT_USER_ERROR:
      return { ...state, userError: true }
    case RECEIVE_TOKEN:
      return { ...state, token: payload }
    case SET_CURRENT_CITY:
      return { ...state, currentCity: payload }
    case SET_PREVIOUS_CITY:
      return { ...state, previousCity: payload }
    case CHANGE_API:
      return { ...state, currentAPI: payload }
    case SET_PICTURE:
      return { ...state, currentPicture: payload }
    case SET_COUNTRY:
      return { ...state, country: payload }
    case LOADING_ON:
      return { ...state, loading: true }
    case LOADING_OFF:
      return { ...state, loading: false }
    case LOGOUT:
      return { ...state, token: '' }
    default:
      return state
  }
}

export default userReducer
