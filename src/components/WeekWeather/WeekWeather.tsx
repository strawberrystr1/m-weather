import { BoxFlexRow } from '../styled'
import WeatherCard from '../WeatherCard'

const WeekWeather = () => {
  const arr = ['THU', 'THU', 'THU', 'THU', 'THU', 'THU']
  // change keys
  return (
    <BoxFlexRow sx={{ width: '70%' }}>
      {arr.map(day => (
        <WeatherCard today={false} day={day} temperature="13" key={Math.random()} />
      ))}
    </BoxFlexRow>
  )
}

export default WeekWeather
