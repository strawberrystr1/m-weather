import { GOOGLE_CALENDAR_URL } from '@constants/api'
import { ICalendarResponse } from '@interfaces/api'
import { AppDispatch } from '@redux/index'
import { getTodos } from '@redux/actions/userActions'
import { getISOStringForAPI, parseDateFromISOString } from '@utils/dateHandlers'

export default async (token: string, dispatch: AppDispatch) => {
  const todayDate = getISOStringForAPI()
  const nextDay = getISOStringForAPI(true)
  const response = await fetch(
    `${GOOGLE_CALENDAR_URL}?timeMin=${todayDate}&timeMax=${nextDay}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  )

  const data: ICalendarResponse = await response.json()

  const todos = data.items
    .map(item => {
      return {
        time: parseDateFromISOString(item.start.dateTime),
        todo: item.summary,
        description: item.description || '',
      }
    })
    .sort((a, b) => +a.time.slice(0, 2) - +b.time.slice(0, 2))

  dispatch(getTodos(todos))
}
