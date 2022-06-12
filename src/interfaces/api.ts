export interface IClientObject {
  j: {
    client_id: string
  }
  requestAccessToken(overrideConfig?: OverridableTokenClientConfig): void
}

interface OverridableTokenClientConfig {}

export interface ICalendarResponse {
  items: ICalendarTodoResponse[]
}

export interface ICalendarTodoResponse {
  start: {
    dateTime: string
  }
  summary: string
  description: string | undefined
}

export interface ICalendarTodo {
  time: string
  todo: string
  description: string
}

export interface IWeatherStorageItem {
  temp: number
  icon: string
  description: string
  date: number
}

export interface IWeatherPayload {
  city: string
  weather: {
    current: IWeatherStorageItem
    daily: IWeatherStorageItem[]
  }
}

interface IOpenweatherWeather {
  icon: string
  description: string
}

interface IOpenweatherDailyItem {
  temp: {
    day: number
  }
  weather: IOpenweatherWeather[]
  dt: number
}
export interface IOpenweatherResponse {
  current: {
    temp: number
    weather: IOpenweatherWeather[]
    dt: number
  }
  daily: IOpenweatherDailyItem[]
}

export interface IIPResponse {
  country: string
  city: string
  latitude: number
  longitude: number
}

export interface IGeolocationData {
  results: {
    city: string
    country: string
    lat: number
    lon: number
  }[]
}
