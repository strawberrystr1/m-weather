import CalendarBlock from '../CalendarBlock'
import CityBlock from '../CityBlock'
import BoxWrapper from '../styled'

const UserInfo = () => (
  <BoxWrapper height="70%" sx={{ justifyContent: 'space-between' }}>
    <CalendarBlock />
    <CityBlock city="Minsk" country="Belarus" />
  </BoxWrapper>
)

export default UserInfo
