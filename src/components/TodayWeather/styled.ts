import styled from '@emotion/styled'
import { Box } from '@mui/material'
import { HEIGHT, WIDTH } from '@theme/index'

export const TodayBox = styled(Box)`
  height: ${HEIGHT.FULL}%;
  width: ${WIDTH.CITY_WRAPPER}%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const TodayImage = styled.img`
  height: auto;
  width: ${WIDTH[40]}%;
`
