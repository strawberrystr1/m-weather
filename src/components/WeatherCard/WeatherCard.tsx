import { Card, CardContent, CardMedia } from '@mui/material'

import { Day, Temperature } from './styled'
import IProps from './types'

const WeatherCard = ({ today, day, temperature }: IProps) => (
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
        image="http://openweathermap.org/img/wn/11n@2x.png"
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
