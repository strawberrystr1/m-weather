import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from '@mui/material'

import BoxWrapper from './styled'

const APIChoiseBlock = () => (
  <BoxWrapper>
    <FormControl>
      <Typography>API choice:</Typography>
      <RadioGroup defaultValue="openweather">
        <FormControlLabel control={<Radio />} value="openweather" label="OpenWeather" />
        <FormControlLabel control={<Radio />} value="stormglass" label="Stormglass" />
      </RadioGroup>
    </FormControl>
  </BoxWrapper>
)

export default APIChoiseBlock
