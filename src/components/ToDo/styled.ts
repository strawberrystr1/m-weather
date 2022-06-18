import styled from '@emotion/styled'
import { Box, Typography } from '@mui/material'

import { FONT_SIZE, MARGIN, WIDTH } from '@theme/index'

export const BoxFlex = styled(Box)`
  display: flex;
  align-items: flex-start;
  margin-top: ${MARGIN[10]}px;
`

export const TodoTime = styled(Typography)`
  width: ${WIDTH[70]}px;
  text-align: center;
`

export const TodoText = styled(Typography)`
  font-size: ${FONT_SIZE.TIME_DATE}px;
  margin-left: ${MARGIN[30]}px;
`

export const TodoDescription = styled(Typography)`
  font-size: ${FONT_SIZE.TODO_DESC}px;
  margin-left: ${MARGIN[30]}px;
`
