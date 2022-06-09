import styled from '@emotion/styled'
import { Box } from '@mui/material'

const BoxWrapper = styled(Box)<{ height: string }>`
  width: 100%;
  height: ${props => props.height};
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 20px;
`

export const BoxFlexRow = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 100%;
`

export default BoxWrapper
