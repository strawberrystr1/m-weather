import { Box } from '@mui/material'
import CalendarTodo from '../CalendarTodo'
import Clock from '../Clock'

const CalendarBlock = () => (
  <Box sx={{ width: '40%', height: '100%' }}>
    <Clock />
    <CalendarTodo />
  </Box>
)

export default CalendarBlock
