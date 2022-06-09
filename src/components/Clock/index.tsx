import { Box, Typography } from '@mui/material'
import { useEffect, useState } from 'react'

import { TimeBox, TimeFormat, Time, TimeDate } from './styled'

const Clock = () => {
  const [time, setTime] = useState('')
  const [date, setDate] = useState('')

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().toLocaleTimeString().slice(0, -3)
      if (now !== time) setTime(now)
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    if (time === '00:00' || !time) {
      const now = new Date().toLocaleDateString('en-US', {
        weekday: 'long',
        month: 'long',
        day: '2-digit',
        year: 'numeric',
      })
      setDate(now)
    }
  }, [time])

  return (
    <Box>
      <TimeBox>
        <Time>{time}</Time>
        <TimeFormat>{+time.slice(0, 2) >= 12 ? 'PM' : 'AM'}</TimeFormat>
      </TimeBox>
      <TimeDate>{date}</TimeDate>
    </Box>
  )
}

export default Clock
