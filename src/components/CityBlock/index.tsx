import { useSelector, useDispatch } from 'react-redux'

import APIChoiseBlock from '@components/APIChoiseBlock'
import { setCurrentCity, setPreviousCity } from '@redux/actions/userActions'
import { RootState } from '@redux/index'

import BoxWrapper, { City, CityInput, Country } from './styled'

const CityBlock = () => {
  const { currentCity, country } = useSelector((state: RootState) => state.user)
  const dispatch = useDispatch()

  const handleCityChange = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      dispatch(setPreviousCity(currentCity))
      dispatch(setCurrentCity((e.target as HTMLInputElement).value))
    }
  }

  return (
    <BoxWrapper>
      <City variant="subtitle1">{currentCity}</City>
      <Country variant="subtitle2">{country}</Country>
      <CityInput variant="standard" placeholder={currentCity} onKeyDown={handleCityChange} />
      <APIChoiseBlock />
    </BoxWrapper>
  )
}

export default CityBlock
