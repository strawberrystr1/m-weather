import styled from '@emotion/styled'
import { Box, TextField, Typography } from '@mui/material'

import { FONT_SIZE, MARGIN, WIDTH } from '@theme/index'

export default styled(Box)`
  width: ${WIDTH.CITY_WRAPPER}%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  @media (max-width: 1050px) {
    width: ${WIDTH.HALF}%;
  }
  @media (max-width: 400px) {
    width: ${WIDTH.FULL}%;
    justify-content: center;
    align-items: center;
    order: 1;
  }
`

export const City = styled(Typography)`
  @media (max-width: 650px) {
    font-size: ${FONT_SIZE.CITY_650}px;
  }
  @media (max-width: 400px) {
    font-size: ${FONT_SIZE.CITY_400}px;
  }
`

export const Country = styled(Typography)`
  @media (max-width: 650px) {
    font-size: ${FONT_SIZE.COUNTRY_650}px;
  }
  @media (max-width: 400px) {
    font-size: ${FONT_SIZE.CITY_650}px;
  }
`

export const CityInput = styled(TextField)`
  margin-top: 20px;
  width: ${WIDTH.HALF}%;
  @media (max-width: 650px) {
    width: ${WIDTH[70]}%;
  }
  @media (max-width: 400px) {
    width: ${WIDTH.FULL}%;
  }
`
