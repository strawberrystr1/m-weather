import { Container } from '@mui/material'
import { ThemeProvider } from '@emotion/react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import { Triangle } from 'react-loader-spinner'

import UserInfo from '@components/UserInfo'
import WeatherInfo from '@components/WeatherInfo'
import theme from '@theme/index'
import useScript from '@hooks/useScript'
import { initClient } from '@api/initUser'
import { RootState } from '@redux/index'
import { GOOGLE_URL, GOOGLE_USERID } from '@constants/api'
import backgrounds from '@constants/backgrounds'

import { BackgroundPicture, ContainerFront, LoaderBox } from './styled'

function App() {
  const dispatch = useDispatch()
  const { token, currentPicture, loading } = useSelector((state: RootState) => state.user)

  const initProfile = () => {
    initClient(dispatch)
  }

  useEffect(() => {
    window.addEventListener('load', initProfile)

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
        <BackgroundPicture src={backgrounds[currentPicture]} />
        <ContainerFront maxWidth="xl">
          <UserInfo />
          <WeatherInfo />
        </ContainerFront>
        {loading && (
          <LoaderBox>
            <Triangle color="white" wrapperStyle={{ zIndex: '2' }} width="200" height="200" />
          </LoaderBox>
        )}
      </Container>
    </ThemeProvider>
  )
}

export default App
