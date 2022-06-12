import { TextField } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'

import APIChoiseBlock from '../APIChoiseBlock'
import { setCurrentCity, setPreviousCity } from '../../redux/actions/userActions'
import { RootState } from '../../redux'

import IProps from './types'
import { BoxWrapper, City, Country } from './styled'

const CityBlock = ({ city, country }: IProps) => {
  const {
    user: { currentCity },
    weather,
  } = useSelector((state: RootState) => state)
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
      <TextField
        variant="standard"
        placeholder={currentCity}
        sx={{ marginTop: '20px' }}
        onKeyDown={handleCityChange}
      />
      <APIChoiseBlock />
    </BoxWrapper>
  )
}

export default CityBlock
