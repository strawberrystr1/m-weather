import { IOpenweatherResponse, IWeatherStorageItem } from '../interfaces/api'

export default (
  weather: IOpenweatherResponse,
): [IWeatherStorageItem, IWeatherStorageItem[]] => {
  const dailyWeather: IWeatherStorageItem[] = weather.daily
    .map(day => ({
      temp: Math.ceil(day.temp.day),
      icon: day.weather[0].icon,
      description: day.weather[0].description,
      date: new Date(day.dt * 1000).getDay(),
    }))
    .slice(1)
    .slice(0, -1)

  const currentWeather: IWeatherStorageItem = {
    temp: Math.ceil(weather.current.temp),
    icon: weather.current.weather[0].icon,
    description: weather.current.weather[0].description,
    date: new Date(weather.current.dt * 1000).getDay(),
  }

  return [currentWeather, dailyWeather]
}
