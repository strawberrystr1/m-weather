import { useSelector } from 'react-redux'
import { OPENWEATHER_API_IMG_URL } from '../../constants/api'
import { RootState } from '../../redux'
import WeatherCard from '../WeatherCard'

import { TodayBox, TodayImage } from './styled'
import IProps from './types'

const TodayWeather = ({ weather }: IProps) => {
  return (
    <TodayBox>
      {weather && (
        <>
          <TodayImage
            src={`${OPENWEATHER_API_IMG_URL}${weather.icon}@2x.png`}
            alt="current weather"
          />
          <WeatherCard today day="today" temperature={weather.temp} />
        </>
      )}
    </TodayBox>
  )
}

export default TodayWeather
