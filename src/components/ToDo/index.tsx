import { Divider, Box } from '@mui/material'

import IProps from './types'
import { BoxFlex, TodoTime, TodoText, TodoDescription } from './styled'

const ToDo = ({ time, todo, description }: IProps) => (
  <>
    <BoxFlex>
      <TodoTime className="badge">{time}</TodoTime>
      <Box sx={{ width: '80%' }}>
        <TodoText>{todo}</TodoText>
        {description && <TodoDescription>{description}</TodoDescription>}
      </Box>
    </BoxFlex>
    <Divider />
  </>
)

export default ToDo
