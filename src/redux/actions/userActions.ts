import {
  INIT_USER_ERROR,
  GET_TOKEN,
  RECEIVE_TOKEN,
  GET_TODOS,
  SET_CITY,
  LOAD_WEATHER_BY_IP,
  SET_CURRENT_CITY,
  SET_PREVIOUS_CITY,
  SET_CITY_ERROR,
} from '../../constants/reduxActions'
import { ICalendarTodo, IWeatherPayload } from '../../interfaces/api'

export const initUserError = () => ({ type: INIT_USER_ERROR, payload: '' })
export const getTokenAction = () => ({ type: GET_TOKEN })
export const receiveToken = (payload: string) => ({ type: RECEIVE_TOKEN, payload })
export const getTodos = (payload: ICalendarTodo[]) => ({ type: GET_TODOS, payload })
export const setCity = (payload: IWeatherPayload) => ({ type: SET_CITY, payload })
export const weatherByIP = () => ({ type: LOAD_WEATHER_BY_IP })
export const setCurrentCity = (payload: string) => ({ type: SET_CURRENT_CITY, payload })
export const setPreviousCity = (payload: string) => ({ type: SET_PREVIOUS_CITY, payload })
export const setCityError = (payload: string) => ({ type: SET_CITY_ERROR, payload })
