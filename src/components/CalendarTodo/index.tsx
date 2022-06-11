import { useSelector } from 'react-redux'

import { RootState } from '../../redux'
import ToDo from '../ToDo'

import OverflowBox from './styled'

const CalendarTodo = () => {
  const { todos } = useSelector((state: RootState) => state.todo)

  return (
    <OverflowBox>
      {todos.map(({ time, todo, description }) => (
        <ToDo time={time} todo={todo} key={time} description={description} />
      ))}
    </OverflowBox>
  )
}

export default CalendarTodo
