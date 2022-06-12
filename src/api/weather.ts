import { IP_API_URL, OPENWEATHER_API_KEY, OPENWEATHER_API_URL } from '../constants/api'
import { IIPResponse, IOpenweatherResponse } from '../interfaces/api'

export const getCityByIP = async () => {
  const response = await fetch(IP_API_URL)
  const data: IIPResponse = await response.json()
  return data
}

export const getWeatherByCityName = async (lat: number, lon: number) => {
  const response = await fetch(
    `${OPENWEATHER_API_URL}?lat=${lat}&lon=${lon}&units=metric&exclude=hourly,minutely&appid=${OPENWEATHER_API_KEY}`,
  )
  const data: IOpenweatherResponse = await response.json()
  console.log(data)
  return data
}

// const getWeather = async () => {
//   const coordResp = await fetch(`${GEO_API_URL}?city=Grodno&apiKey=${GEO_API_KEY}`)
//   const data = await coordResp.json()
//   console.log(data)
// }
