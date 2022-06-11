import { IClientObject } from '../interfaces/api'
import { AppDispatch } from '../redux'
import { initUserError, receiveToken } from '../redux/actions/userActions'

let client: IClientObject
let token: string

export const getToken = () => {
  client.requestAccessToken()
}

export const initClient = (dispatch: AppDispatch) => {
  try {
    client = google.accounts.oauth2.initTokenClient({
      client_id:
        '1083307641056-5mudfltja82dgrpqsgte4efiv0jn5kc7.apps.googleusercontent.com',
      scope: 'https://www.googleapis.com/auth/calendar.readonly',
      callback: (tokenResponse: any) => {
        token = tokenResponse.access_token
        dispatch(receiveToken(token))
      },
    })
  } catch (error) {
    dispatch(initUserError())
  }
}
