import styled from '@emotion/styled'
import { Box } from '@mui/material'

import { WIDTH, HEIGHT } from '@theme/index'

const BoxWrapper = styled(Box)<{ height: string }>`
  width: ${WIDTH.FULL}%;
  height: ${props => props.height};
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 20px;

  @media (max-width: 400px) {
    flex-direction: column;
  }
`

export const BoxFlexRow = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: ${HEIGHT.FULL}%;

  @media (max-width: 800px) {
    overflow: auto;
  }
`

export default BoxWrapper
