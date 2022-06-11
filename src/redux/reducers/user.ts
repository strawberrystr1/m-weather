import { INIT_USER_ERROR, RECEIVE_TOKEN } from '../../constants/reduxActions'
import IDispatchUserAction from '../../interfaces/reduxAction'
import { IInitialUser } from './types'

const initialState: IInitialUser = {
  userError: false,
  token: '',
}

const userReducer = (state = initialState, action: IDispatchUserAction): IInitialUser => {
  const { type, payload } = action

  switch (type) {
    case INIT_USER_ERROR:
      return { ...state, userError: true }
    case RECEIVE_TOKEN:
      return { ...state, token: payload }
    default:
      return state
  }
}

export default userReducer
