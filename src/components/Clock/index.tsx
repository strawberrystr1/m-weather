import { Box } from '@mui/material'
import { useEffect, useState } from 'react'

import { getDate, getTime, getTimeFormat } from '../../utils/dateHandlers'

import { TimeBox, TimeFormat, Time, TimeDate } from './styled'

const Clock = () => {
  const [currentDate, setCurrentDate] = useState<Date>(() => new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date()
      if (now.getMinutes() !== currentDate.getMinutes()) setCurrentDate(now)
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <Box>
      <TimeBox>
        <Time>{getTime(currentDate)}</Time>
        <TimeFormat>{getTimeFormat(currentDate)}</TimeFormat>
      </TimeBox>
      <TimeDate>{getDate(currentDate)}</TimeDate>
    </Box>
  )
}

export default Clock
