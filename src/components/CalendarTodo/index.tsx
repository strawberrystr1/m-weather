import { useSelector } from 'react-redux'
import { Typography } from '@mui/material'

import { RootState } from '@redux/index'
import ToDo from '@components/ToDo'

import OverflowBox from './styled'

const CalendarTodo = () => {
  const { todos } = useSelector((state: RootState) => state.todo)

  return (
    <OverflowBox>
      {todos.length > 0 ? (
        todos.map(({ time, todo, description }) => (
          <ToDo time={time} todo={todo} key={time} description={description} />
        ))
      ) : (
        <Typography>You do not have any todos for today</Typography>
      )}
    </OverflowBox>
  )
}

export default CalendarTodo
