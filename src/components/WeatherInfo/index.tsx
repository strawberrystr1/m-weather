import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Typography } from '@mui/material'

import { WEATHER_BG_COLOR } from '@theme/index'
import TodayWeather from '@components/TodayWeather'
import WeekWeather from '@components/WeekWeather'
import { weatherByIP } from '@redux/actions/userActions'
import { RootState } from '@redux/index'
import { WeatherKeys } from '@redux/reducers/types'
import ErrorBoundary from '@components/ErrorBoundary'

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
    <ErrorBoundary fallback="Something went wrong with weather service, try to reload the page">
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
    </ErrorBoundary>
  )
}

export default WeatherInfo
