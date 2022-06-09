import styled from '@emotion/styled'
import { Box } from '@mui/material'

export const BackgroundPicture = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  line-height: 0;
  font-size: 0;
  z-index: 1;
`
export const ContainerFront = styled(Box)`
  position: relative;
  z-index: 2;
  height: 90%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 0px 20px 20px rgba(115, 103, 102, 0.3);
`
