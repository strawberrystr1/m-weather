import { ICalendarTodo, IWeatherStorageItem } from '../../interfaces/api'

export interface IInitialTodos {
  todos: ICalendarTodo[]
}

export interface IInitialUser {
  userError: boolean
  token: string
  currentCity: string
}

export type IInitialWeather = {
  [key: string]: {
    current: IWeatherStorageItem
    daily: IWeatherStorageItem[]
  }
}
