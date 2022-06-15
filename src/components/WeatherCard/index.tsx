import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import { OPENWEATHER_API_IMG_URL } from '@constants/api'

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
      <Typography variant="overline" className="badge">
        {day}
      </Typography>
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
      <Typography fontSize={today ? 40 : 22}>
        {temperature}
        <sup> o</sup>
      </Typography>
    </CardContent>
  </Card>
)

export default WeatherCard
