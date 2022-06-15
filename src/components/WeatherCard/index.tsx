import { Card, CardContent, CardMedia } from '@mui/material'
import { OPENWEATHER_API_IMG_URL } from '@constants/api'

import { Day, Temperature } from './styled'
import IProps from './types'

const WeatherCard = ({ today, day, temperature, icon }: IProps) => (
  <Card
    sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
    }}
  >
    <CardContent>
      <Day variant="overline" className="badge">
        {day}
      </Day>
    </CardContent>
    {!today && (
      <CardMedia
        component="img"
        sx={{ maxWidth: '70px' }}
        image={`${OPENWEATHER_API_IMG_URL}${icon}@2x.png`}
        alt="weather icon"
      />
    )}
    <CardContent>
      <Temperature fontSize={today ? 40 : 22}>
        {temperature}
        <sup> o</sup>
      </Temperature>
    </CardContent>
  </Card>
)

export default WeatherCard
