import { Container } from '@mui/material'
import { ThemeProvider } from '@emotion/react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import bg from '../assets/images/1.jpg'
import UserInfo from '../components/UserInfo'
import WeatherInfo from '../components/WeatherInfo'
import theme from '../theme'
import useScript from '../hooks/useScript'
import { initClient } from '../api/initUser'
import { RootState } from '../redux'

import { BackgroundPicture, ContainerFront } from './styled'

function App() {
  const dispatch = useDispatch()
  const { token } = useSelector((state: RootState) => state.user)

  const initProfile = () => {
    initClient(dispatch)
  }

  useEffect(() => {
    if (!token) window.addEventListener('load', initProfile)

    return () => window.removeEventListener('load', initProfile)
  }, [])

  useScript('https://accounts.google.com/gsi/client', () => {
    google.accounts.id.initialize({
      client_id:
        '1083307641056-5mudfltja82dgrpqsgte4efiv0jn5kc7.apps.googleusercontent.com',
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
