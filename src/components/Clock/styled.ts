import styled from '@emotion/styled'
import { Box, Typography } from '@mui/material'

import { FONT_SIZE, FONT_WEIGHT, WIDTH, MARGIN } from '@theme/index'

export const TimeBox = styled(Box)`
  width: ${WIDTH.TIME_WRAPPER}%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`

export const Time = styled(Typography)`
  line-height: 75px;
  font-size: ${FONT_SIZE.TIME_SIZE}px;
  font-weight: ${FONT_WEIGHT[600]};
  @media (max-width: 650px) {
    font-size: ${FONT_SIZE.TIME_SIZE_650}px;
    line-height: ${FONT_SIZE.TIME_SIZE_650}px;
  }
`

export const TimeFormat = styled(Typography)`
  font-weight: ${FONT_WEIGHT[700]};
  font-size: ${FONT_SIZE.TIME_FORMAT}px;
  margin-left: ${MARGIN[30]}px;
  @media (max-width: 650px) {
    font-size: ${FONT_SIZE.TIME_FORMAT_650}px;
    margin-left: ${MARGIN[10]}px;
  }
`

export const TimeDate = styled(Typography)`
  font-size: ${FONT_SIZE.TIME_DATE}px;
  font-weight: ${FONT_WEIGHT[600]};
  margin-top: ${MARGIN[5]}px;
  @media (max-width: 650px) {
    font-size: ${FONT_SIZE.TIME_DATE_650}px;
  }
`
