import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { WEATHER_BG_COLOR } from '@theme/index'
import TodayWeather from '@components/TodayWeather'
import WeekWeather from '@components/WeekWeather'
import { weatherByIP } from '@redux/actions/userActions'
import { RootState } from '@redux/index'
import { WeatherKeys } from '@redux/reducers/types'
import { Typography } from '@mui/material'

import BoxWrapper from './styled'

const WeatherInfo = () => {
  const dispatch = useDispatch()
  const {
    user: { currentCity, currentAPI },
    weather,
    errors: { cityError },
  } = useSelector((state: RootState) => state)

  useEffect(() => {
    dispatch(weatherByIP())
  }, [])

  return (
    <BoxWrapper height="30%" sx={{ background: WEATHER_BG_COLOR }}>
      {weather[currentAPI as WeatherKeys][currentCity] && (
        <>
          <TodayWeather weather={weather[currentAPI as WeatherKeys][currentCity].current} />
          <WeekWeather weather={weather[currentAPI as WeatherKeys][currentCity].daily} />
        </>
      )}
      {cityError && (
        <Typography sx={{ width: '100%', alignSelf: 'center' }} fontSize={34} textAlign="center">
          {cityError}
        </Typography>
      )}
    </BoxWrapper>
  )
}

export default WeatherInfo
