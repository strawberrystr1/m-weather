import WeatherCard from '../WeatherCard'
import { TodayBox, TodayImage } from './styled'

const TodayWeather = () => (
  <TodayBox>
    <TodayImage src="http://openweathermap.org/img/wn/10d@2x.png" alt="current weather" />
    <WeatherCard today day="today" temperature="37" />
  </TodayBox>
)

export default TodayWeather
