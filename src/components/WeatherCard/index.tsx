import { CardContent, CardMedia, Typography } from '@mui/material'
import { OPENWEATHER_API_IMG_URL } from '@constants/api'

import IProps from './types'
import { CardWrapper, DayBadge } from './styled'

const WeatherCard = ({ today, day, temperature, icon }: IProps) => (
  <CardWrapper raised={today}>
    <CardContent sx={{ height: '20%' }}>
      <DayBadge variant="overline" className="badge">
        {day}
      </DayBadge>
    </CardContent>
    <CardMedia
      component="img"
      sx={{ height: '40%', width: '70%' }}
      image={`${OPENWEATHER_API_IMG_URL}${icon}@2x.png`}
      alt="weather icon"
    />
    <CardContent>
      <Typography
        fontSize={today ? 34 : 22}
        sx={{ '@media (max-width: 400px)': { fontSize: today ? '28px' : '22px' } }}
      >
        {temperature}
        <sup> o</sup>
      </Typography>
    </CardContent>
  </CardWrapper>
)

export default WeatherCard
