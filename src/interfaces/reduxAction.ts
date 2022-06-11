import { ICalendarTodo } from './api'

export default interface IDispatchUserAction {
  type: string
  payload: string
}

export interface IDispatchTodoAction {
  type: string
  payload: ICalendarTodo[]
}
