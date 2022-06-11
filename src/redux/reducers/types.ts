import { ICalendarTodo } from '../../interfaces/api'

export interface IInitialTodos {
  todos: ICalendarTodo[]
}

export interface IInitialUser {
  userError: boolean
  token: string
}
