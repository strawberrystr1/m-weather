import styled from '@emotion/styled'
import { Card, Typography } from '@mui/material'

import { HEIGHT, WIDTH } from '@theme/index'

export const DayBadge = styled(Typography)`
  @media (max-width: 600px) {
    font-size: 16px;
  }
  @media (max-width: 400px) {
    font-size: 14px;
  }
`

export const CardPicture = styled.div<{ bg: string }>`
  background-image: ${props => `url(${props.bg})`};
  background-position: center;
  background-size: 140%;
  width: 70px;
  height: 70px;

  @media (max-height: 600px) {
    width: 30px;
    height: 30px;
  }
  @media (max-width: 600px) and (max-height: 500px) {
    width: 30px;
    height: 30px;
  }
`

export const CardWrapper = styled(Card)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  height: ${HEIGHT.FULL}%;
  width: ${props => (props.raised ? WIDTH.CITY_WRAPPER : WIDTH[16])}%;

  @media (max-width: 800px) {
    width: ${props => (props.raised ? WIDTH.HALF : WIDTH[33])}%;
  }
  @media (max-width: 800px) {
    width: ${props => (props.raised ? WIDTH[70] : WIDTH[33])}%;
  }
`
