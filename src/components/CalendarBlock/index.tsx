import { Box, Button } from '@mui/material'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getToken } from '@api/initUser'

import { RootState } from '@redux/index'
import CalendarTodo from '@components/CalendarTodo'
import Clock from '@components/Clock'
import loadCalendar from '@api/calendar'

const CalendarBlock = () => {
  const { token } = useSelector((state: RootState) => state.user)
  const dispatch = useDispatch()

  useEffect(() => {
    if (token) {
      loadCalendar(token, dispatch)
    }
  }, [token])

  return (
    <Box sx={{ width: '40%', height: '100%' }}>
      <Clock />
      {token && <CalendarTodo />}
      {!token && (
        <Button variant="contained" sx={{ marginTop: '20px' }} onClick={() => getToken()}>
          Login to load calendar
        </Button>
      )}
    </Box>
  )
}

export default CalendarBlock
