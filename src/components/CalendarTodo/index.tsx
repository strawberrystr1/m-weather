import ToDo from '../ToDo'
import todos from './mock'
import OverflowBox from './styled'

const CalendarTodo = () => (
  <OverflowBox>
    {todos.map(({ time, todo }) => (
      <ToDo time={time} todo={todo} key={time} />
    ))}
  </OverflowBox>
)

export default CalendarTodo
