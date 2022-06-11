import { Box } from '@mui/material'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getToken } from '../../api/initUser'

import { RootState } from '../../redux'
import CalendarTodo from '../CalendarTodo'
import Clock from '../Clock'
import loadCalendar from '../../api/calendar'

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
        <button type="button" onClick={() => getToken()}>
          login
        </button>
      )}
    </Box>
  )
}

export default CalendarBlock
