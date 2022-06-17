import {
  GEO_API_KEY,
  GEO_API_URL,
  IP_API_URL,
  OPENWEATHER_API_KEY,
  OPENWEATHER_API_URL,
  STORMGLASS_API_KEY,
  STORMGLASS_API_URL,
} from '@constants/api'
import {
  IGeolocationData,
  IIPResponse,
  IOpenweatherResponse,
  IStormglassResponse,
} from '@interfaces/api'
import { getFutureDate } from '@utils/dateHandlers'
import APIResponseMock from './mock'

export const getCityByIP = async () => {
  const response = await fetch(IP_API_URL)
  const data: IIPResponse = await response.json()
  return data
}

export const getWeatherByCityNameOpenweather = async (lat: number, lon: number) => {
  const response = await fetch(
    `${OPENWEATHER_API_URL}?lat=${lat}&lon=${lon}&units=metric&exclude=hourly,minutely&appid=${OPENWEATHER_API_KEY}`,
  )
  const data: IOpenweatherResponse = await response.json()
  console.log(data)
  return data
}

export const getCityCoords = async (city: string): Promise<IIPResponse | Error> => {
  try {
    const coordResp = await fetch(
      `${GEO_API_URL}?text=${city}&lang=en&type=city&format=json&apiKey=${GEO_API_KEY}`,
    )
    const data: IGeolocationData = await coordResp.json()
    return {
      country: data.results[0].country,
      city: data.results[0].city,
      latitude: data.results[0].lat,
      longitude: data.results[0].lon,
    }
  } catch (error) {
    return new Error('No data for this city')
  }
}

export const getWeatherByCityNameStormglass = async (
  lat: number,
  lon: number,
): Promise<IStormglassResponse> => {
  const date = getFutureDate(7).getTime() / 1000

  const response = await fetch(
    `${STORMGLASS_API_URL}?lat=${lat}&lng=${lon}&params=airTemperature&end=${date}&source=sg`,
    {
      headers: {
        Authorization: STORMGLASS_API_KEY,
      },
    },
  )

  const data: IStormglassResponse = await response.json()
  console.log('data: ', data)

  return {
    hours: data.hours.filter(item => {
      return new Date(item.time).getHours() === 12
    }),
  }
}
