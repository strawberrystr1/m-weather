import CalendarBlock from '@components/CalendarBlock'
import CityBlock from '@components/CityBlock'
import ErrorBoundary from '@components/ErrorBoundary'
import BoxWrapper from '@components/styled'

const UserInfo = () => (
  <BoxWrapper height="70%" sx={{ justifyContent: 'space-between', overflow: 'auto' }}>
    <ErrorBoundary fallback="We can't load calendar, try to reload the page">
      <CalendarBlock />
    </ErrorBoundary>
    <ErrorBoundary fallback="We can't load city information, try to reload the page">
      <CityBlock />
    </ErrorBoundary>
  </BoxWrapper>
)

export default UserInfo
