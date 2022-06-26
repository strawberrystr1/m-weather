import { IOpenweatherResponse, IStormglassResponse, IWeatherStorageItem } from '../interfaces/api'

export default (weather: IOpenweatherResponse): [IWeatherStorageItem, IWeatherStorageItem[]] => {
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

export const mergeWithOpenWeather = (
  weather: IStormglassResponse,
  current: IWeatherStorageItem,
  daily: IWeatherStorageItem[],
): [IWeatherStorageItem, IWeatherStorageItem[]] => {
  const mappedData = weather.hours.map((item, i) => {
    if (i === 0) {
      return {
        icon: current.icon,
        temp: Math.floor(item.airTemperature.sg),
        description: current.description,
        date: current.date,
      }
    }
    return {
      icon: daily[i - 1].icon,
      temp: Math.floor(item.airTemperature.sg),
      description: daily[i - 1].description,
      date: daily[i - 1].date,
    }
  })
  return [mappedData[0], mappedData.slice(1)]
}
