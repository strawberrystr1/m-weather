import { BoxFlexRow } from '@components/styled'
import WeatherCard from '@components/WeatherCard'
import weekDays from '@constants/weekDays'

import IProps from './types'

const WeekWeather = ({ weather }: IProps) => {
  return (
    <BoxFlexRow sx={{ width: '70%', flexWrap: 'wrap' }}>
      {weather.map(day => (
        <WeatherCard
          today={false}
          day={weekDays[day.date]}
          temperature={day.temp}
          key={weekDays[day.date]}
          icon={day.icon}
        />
      ))}
    </BoxFlexRow>
  )
}

export default WeekWeather
