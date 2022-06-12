import { GOOGLE_API_SCOPE, GOOGLE_USERID } from '../constants/api'
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
      client_id: GOOGLE_USERID,
      scope: GOOGLE_API_SCOPE,
      callback: (tokenResponse: any) => {
        token = tokenResponse.access_token
        dispatch(receiveToken(token))
      },
    })
  } catch (error) {
    dispatch(initUserError())
  }
}
