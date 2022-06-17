import styled from '@emotion/styled'
import { Box } from '@mui/material'
import { WIDTH, HEIGHT, ZERO_SIZE } from '@theme/index'

export const BackgroundPicture = styled.img`
  width: ${WIDTH.FULL}%;
  height: ${HEIGHT.FULL}%;
  position: absolute;
  top: ${ZERO_SIZE};
  left: ${ZERO_SIZE};
  line-height: ${ZERO_SIZE};
  font-size: ${ZERO_SIZE};
  z-index: 1;
`
export const ContainerFront = styled(Box)`
  position: relative;
  z-index: 2;
  height: ${HEIGHT.FRONT_CONTAINER}%;
  width: ${WIDTH.FULL}%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 0px 20px 20px rgba(115, 103, 102, 0.3);
`
