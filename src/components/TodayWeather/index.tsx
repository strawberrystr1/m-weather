import WeatherCard from '@components/WeatherCard'

import { TodayBox } from './styled'
import IProps from './types'

const TodayWeather = ({ weather }: IProps) => {
  return (
    <TodayBox>
      {weather && <WeatherCard icon={weather.icon} today day="today" temperature={weather.temp} />}
    </TodayBox>
  )
}

export default TodayWeather
