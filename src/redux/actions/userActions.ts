import {
  INIT_USER_ERROR,
  GET_TOKEN,
  RECEIVE_TOKEN,
  GET_TODOS,
} from '../../constants/reduxActions'
import { ICalendarTodo } from '../../interfaces/api'

export const initUserError = () => ({ type: INIT_USER_ERROR, payload: '' })
export const getTokenAction = () => ({ type: GET_TOKEN })
export const receiveToken = (payload: string) => ({ type: RECEIVE_TOKEN, payload })
export const getTodos = (payload: ICalendarTodo[]) => ({ type: GET_TODOS, payload })
