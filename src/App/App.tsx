import { Container } from '@mui/material'
import { ThemeProvider } from '@emotion/react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import bg from '@assets/images/1.jpg'
import UserInfo from '@components/UserInfo'
import WeatherInfo from '@components/WeatherInfo'
import theme from '@theme/index'
import useScript from '@hooks/useScript'
import { initClient } from '@api/initUser'
import { RootState } from '@redux/index'
import {
  GOOGLE_URL,
  GOOGLE_USERID,
  STORMGLASS_API_KEY,
  STORMGLASS_API_URL,
} from '@constants/api'

import { BackgroundPicture, ContainerFront } from './styled'

function App() {
  const dispatch = useDispatch()
  const { token } = useSelector((state: RootState) => state.user)

  const initProfile = () => {
    initClient(dispatch)
  }

  useEffect(() => {
    // const params = 'airTemperature,cloudCover,precipitation,humidity,gust'
    // const date = new Date(2022, 5, 16).getTime() / 1000
    // fetch(
    //   `${STORMGLASS_API_URL}?lat=52.3&lng=19.2167&params=${params}&end=${date}&source=sg`,
    //   {
    //     headers: {
    //       Authorization: STORMGLASS_API_KEY,
    //     },
    //   },
    // )
    //   .then(res => res.json())
    //   .then(res => console.log(res))

    if (!token) window.addEventListener('load', initProfile)

    return () => window.removeEventListener('load', initProfile)
  }, [])

  useScript(GOOGLE_URL, () => {
    google.accounts.id.initialize({
      client_id: GOOGLE_USERID,
      auto_select: false,
    })
  })

  return (
    <ThemeProvider theme={theme}>
      <Container
        maxWidth={false}
        sx={{
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <BackgroundPicture src={bg} />
        <ContainerFront maxWidth="xl">
          <UserInfo />
          <WeatherInfo />
        </ContainerFront>
      </Container>
    </ThemeProvider>
  )
}

export default App
