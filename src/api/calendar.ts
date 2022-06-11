import { ICalendarResponse } from '../interfaces/api'
import { AppDispatch } from '../redux'
import { getTodos } from '../redux/actions/userActions'
import { getISOStringForAPI, parseDateFromISOString } from '../utils/dateHandlers'

export default async (token: string, dispatch: AppDispatch) => {
  const todayDate = getISOStringForAPI()
  const nextDay = getISOStringForAPI(true)
  const response = await fetch(
    `https://www.googleapis.com/calendar/v3/calendars/primary/events?timeMin=${todayDate}&timeMax=${nextDay}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  )

  const data: ICalendarResponse = await response.json()

  const todos = data.items.map(item => {
    return {
      time: parseDateFromISOString(item.start.dateTime),
      todo: item.summary,
      description: item.description || '',
    }
  })
  dispatch(getTodos(todos))
}
