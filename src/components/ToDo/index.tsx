import { Divider } from '@mui/material'

import IProps from './types'
import { BoxFlex, TodoTime, TodoText } from './styled'

const ToDo = ({ time, todo }: IProps) => (
  <>
    <BoxFlex>
      <TodoTime className="badge">{time}</TodoTime>
      <TodoText>{todo}</TodoText>
    </BoxFlex>
    <Divider />
  </>
)

export default ToDo
