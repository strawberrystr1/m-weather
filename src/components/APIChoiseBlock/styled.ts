import { Box } from '@mui/material'
import styled from '@emotion/styled'
import { MARGIN, WIDTH } from '@theme/index'

export default styled(Box)`
  margin-top: ${MARGIN[30]}px;
  width: ${WIDTH.HALF}%;
  @media (max-width: 650px) {
    width: ${WIDTH[70]}%;
  }
  @media (max-width: 400px) {
    width: ${WIDTH.FULL}%;
  }
`
