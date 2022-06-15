import { TextField, Typography } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'

import APIChoiseBlock from '@components/APIChoiseBlock'
import { setCurrentCity, setPreviousCity } from '@redux/actions/userActions'
import { RootState } from '@redux/index'

import IProps from './types'
import BoxWrapper from './styled'

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
      <Typography variant="subtitle1">{currentCity}</Typography>
      <Typography variant="subtitle2">{country}</Typography>
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
