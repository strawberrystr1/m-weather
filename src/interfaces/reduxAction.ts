import { ICalendarTodo, IWeatherPayload } from './api'

interface IDispatchAction {
  type: string
}
export default interface IDispatchUserAction extends IDispatchAction {
  payload: string
}

export interface IDispatchTodoAction extends IDispatchAction {
  payload: ICalendarTodo[]
}

export interface IDispatchWeatcherACtion extends IDispatchAction {
  payload: IWeatherPayload
}

export interface IDispatchErrorAction extends IDispatchAction {
  payload: string
}
