import styled from '@emotion/styled'
import { Box } from '@mui/material'

import { HEIGHT, WIDTH } from '@theme/index'

export default styled(Box)`
  width: ${WIDTH.HALF}%;
  height: ${HEIGHT.FULL}%;
  @media (max-width: 650px) {
    width: ${WIDTH.HALF}%;
  }
  @media (max-width: 400px) {
    width: ${WIDTH.FULL}%;
    margin-top: 30px;
    order: 2;
  }
`
