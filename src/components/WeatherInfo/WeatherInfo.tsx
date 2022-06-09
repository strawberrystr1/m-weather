import BoxWrapper from '../styled'
import { WEATHER_BG_COLOR } from '../../theme'
import TodayWeather from '../TodayWeather'
import WeekWeather from '../WeekWeather'

const WeatherInfo = () => (
  <BoxWrapper height="30%" sx={{ background: WEATHER_BG_COLOR }}>
    <TodayWeather />
    <WeekWeather />
  </BoxWrapper>
)

export default WeatherInfo
