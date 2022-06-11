export interface IClientObject {
  j: {
    client_id: string
  }
  requestAccessToken(overrideConfig?: OverridableTokenClientConfig): void
}

interface OverridableTokenClientConfig {}

export interface ICalendarResponse {
  items: ICalendarTodoResponse[]
}

export interface ICalendarTodoResponse {
  start: {
    dateTime: string
  }
  summary: string
  description: string | undefined
}

export interface ICalendarTodo {
  time: string
  todo: string
  description: string
}