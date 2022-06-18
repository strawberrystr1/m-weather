import { Box, Button } from '@mui/material'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getToken } from '@api/initUser'
import { RootState } from '@redux/index'
import CalendarTodo from '@components/CalendarTodo'
import Clock from '@components/Clock'
import loadCalendar from '@api/calendar'
import { logoutUser } from '@redux/actions/userActions'

import CalendarWrapper from './styled'

const CalendarBlock = () => {
  const { token } = useSelector((state: RootState) => state.user)
  const dispatch = useDispatch()

  useEffect(() => {
    if (token) {
      loadCalendar(token, dispatch)
    }
  }, [token])

  const handleLogout = () => dispatch(logoutUser('logout'))

  return (
    <CalendarWrapper>
      <Clock />
      {token && (
        <>
          <Button variant="contained" color="warning" onClick={handleLogout}>
            Log out
          </Button>
          <CalendarTodo />
        </>
      )}
      {!token && (
        <Button size="small" variant="contained" sx={{ marginTop: '20px' }} onClick={getToken}>
          Login to load calendar
        </Button>
      )}
    </CalendarWrapper>
  )
}

export default CalendarBlock
