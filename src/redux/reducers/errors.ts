import { SET_CITY_ERROR } from '@constants/reduxActions'
import { IDispatchErrorAction } from '@interfaces/reduxAction'

import { IInitialErrors } from './types'

const initialState: IInitialErrors = {
  cityError: '',
}

export default (state = initialState, action: IDispatchErrorAction): IInitialErrors => {
  const { type, payload } = action

  switch (type) {
    case SET_CITY_ERROR:
      return { ...state, cityError: payload }
    default:
      return state
  }
}
