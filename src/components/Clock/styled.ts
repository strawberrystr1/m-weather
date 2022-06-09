import styled from '@emotion/styled'
import { Box, Typography } from '@mui/material'
import { FONT_WEIGHT } from '../../theme'

export const TimeBox = styled(Box)`
  width: 35%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`

export const Time = styled(Typography)`
  line-height: 75px;
  font-size: 80px;
  font-weight: ${FONT_WEIGHT[600]};
`

export const TimeFormat = styled(Typography)`
  font-weight: ${FONT_WEIGHT[700]};
  font-size: 30px;
  margin-left: 10px;
`

export const TimeDate = styled(Typography)`
  font-size: 22px;
  font-weight: ${FONT_WEIGHT[600]};
  margin-top: 5px;
`
