const getTime = (currentDate: Date) => currentDate.toLocaleTimeString().slice(0, -3)
const getDate = (currentDate: Date) => {
  return currentDate.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: '2-digit',
    year: 'numeric',
  })
}

const getTimeFormat = (currentDate: Date) => {
  const time = getTime(currentDate)
  return +time.slice(0, 2) >= 12 ? 'PM' : 'AM'
}

const getISOStringForAPI = (maxTime?: boolean) => {
  let date = new Date()
  if (maxTime) date = new Date(Date.now() + 8.64e7)
  const today = date.toISOString().split('T')[0]
  const timezoneOffset = date.getTimezoneOffset() / 60
  const timezoneOffsetPositive = Math.abs(timezoneOffset)
  let utcOffset = ''

  /* eslint-disable */

  if (Number.isInteger(timezoneOffsetPositive)) {
    utcOffset = timezoneOffsetPositive > 9
      ? `${timezoneOffsetPositive}:00`
      : `0${timezoneOffsetPositive}:00`
  } else {
    const integerPart = Math.floor(timezoneOffsetPositive)
    const floatPart = (timezoneOffsetPositive - integerPart) * 60

    utcOffset = timezoneOffsetPositive >= 10
      ? `${integerPart}:${floatPart}`
      : `0${integerPart}:${floatPart}`
  }

  /* eslint-enable */

  return `${today}T00:00:00${timezoneOffset > 0 ? '+' : '-'}${utcOffset}`
}

const parseDateFromISOString = (iso: string) => {
  const date = new Date(iso)

  return date.toLocaleTimeString().slice(0, -3)
}

const getFutureDate = (forwardDays: number) => {
  const currentDate = new Date()
  const nextDate = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    currentDate.getDate() + forwardDays,
  )
  return nextDate
}

export {
  getTime,
  getDate,
  getTimeFormat,
  getISOStringForAPI,
  parseDateFromISOString,
  getFutureDate,
}
