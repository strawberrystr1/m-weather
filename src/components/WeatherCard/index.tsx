import { CardContent, Typography } from '@mui/material'
import { OPENWEATHER_API_IMG_URL } from '@constants/api'

import IProps from './types'
import { CardPicture, CardWrapper, DayBadge } from './styled'

const WeatherCard = ({ today, day, temperature, icon }: IProps) => (
  <CardWrapper raised={today}>
    <CardContent sx={{ height: '20%', padding: 0 }}>
      <DayBadge variant="overline" className="badge">
        {day}
      </DayBadge>
    </CardContent>
    <CardPicture bg={`${OPENWEATHER_API_IMG_URL}${icon}@2x.png`} />
    <CardContent sx={{ padding: 0 }}>
      <Typography
        fontSize={today ? 34 : 22}
        sx={{ '@media (max-width: 400px)': { fontSize: today ? '24px' : '18px' } }}
      >
        {temperature}
        <sup> o</sup>
      </Typography>
    </CardContent>
  </CardWrapper>
)

export default WeatherCard
