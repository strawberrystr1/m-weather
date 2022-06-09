import { Container } from '@mui/material'
import { ThemeProvider } from '@emotion/react'

import bg from '../assets/images/1.jpg'
import UserInfo from '../components/UserInfo'
import WeatherInfo from '../components/WeatherInfo'
import theme from '../theme'

import { BackgroundPicture, ContainerFront } from './styled'

function App() {
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
