import { OPENWEATHER_API_IMG_URL } from '@constants/api'
import WeatherCard from '@components/WeatherCard'

import { TodayBox, TodayImage } from './styled'
import IProps from './types'

const TodayWeather = ({ weather }: IProps) => {
  return (
    <TodayBox>
      {weather && <WeatherCard icon={weather.icon} today day="today" temperature={weather.temp} />}
    </TodayBox>
  )
}

export default TodayWeather
