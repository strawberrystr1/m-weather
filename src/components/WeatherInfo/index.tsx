import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import BoxWrapper from '../styled'
import { WEATHER_BG_COLOR } from '../../theme'
import TodayWeather from '../TodayWeather'
import WeekWeather from '../WeekWeather'
import { weatherByIP } from '../../redux/actions/userActions'
import { RootState } from '../../redux'

const WeatherInfo = () => {
  const dispatch = useDispatch()
  const {
    user: { currentCity },
    weather,
  } = useSelector((state: RootState) => state)

  useEffect(() => {
    dispatch(weatherByIP())
  }, [])

  return (
    <BoxWrapper height="30%" sx={{ background: WEATHER_BG_COLOR }}>
      {weather[currentCity] && (
        <>
          <TodayWeather weather={weather[currentCity].current} />
          <WeekWeather weather={weather[currentCity].daily} />
        </>
      )}
    </BoxWrapper>
  )
}

export default WeatherInfo
