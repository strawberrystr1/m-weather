import { ICalendarTodo, IWeatherStorageItem } from '@interfaces/api'

export interface IInitialTodos {
  todos: ICalendarTodo[]
}

export interface IInitialUser {
  userError: boolean
  token: string
  currentCity: string
  previousCity: string
  currentAPI: string
}

export interface IInitialWeather {
  openweather: {
    [ket: string]: IWeatherItem
  }
  stormglass: {
    [ket: string]: IWeatherItem
  }
}

export type WeatherKeys = keyof IInitialWeather

export interface IWeatherItem {
  current: IWeatherStorageItem
  daily: IWeatherStorageItem[]
  createDate: number
}

export interface IInitialErrors {
  cityError: string
}
