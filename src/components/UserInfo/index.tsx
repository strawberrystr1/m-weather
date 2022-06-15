import CalendarBlock from '@components/CalendarBlock'
import CityBlock from '@components/CityBlock'
import BoxWrapper from '@components/styled'

const UserInfo = () => (
  <BoxWrapper height="70%" sx={{ justifyContent: 'space-between' }}>
    <CalendarBlock />
    <CityBlock city="Minsk" country="Belarus" />
  </BoxWrapper>
)

export default UserInfo
