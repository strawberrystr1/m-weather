import styled from '@emotion/styled'

import BoxWrapper from '@components/styled'

export default styled(BoxWrapper)`
  overflow-y: auto;
  padding: 10px;

  & img {
    max-height: 40%;
    width: 70%;
  }

  @media (max-width: 400px) {
    flex-direction: row;
  }
`
