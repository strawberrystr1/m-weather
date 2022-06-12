import {
  INIT_USER_ERROR,
  RECEIVE_TOKEN,
  SET_CURRENT_CITY,
} from '../../constants/reduxActions'
import IDispatchUserAction from '../../interfaces/reduxAction'
import { IInitialUser } from './types'

const initialState: IInitialUser = {
  userError: false,
  token: '',
  currentCity: '',
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
    default:
      return state
  }
}

export default userReducer
