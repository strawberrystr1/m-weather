import { TextField } from '@mui/material'
import { useSelector } from 'react-redux'

import APIChoiseBlock from '../APIChoiseBlock'
import { RootState } from '../../redux'

import IProps from './types'
import { BoxWrapper, City, Country } from './styled'

const CityBlock = ({ city, country }: IProps) => {
  const { currentCity } = useSelector((state: RootState) => state.user)

  return (
    <BoxWrapper>
      <City variant="subtitle1">{currentCity}</City>
      <Country variant="subtitle2">{country}</Country>
      <TextField
        variant="standard"
        placeholder={currentCity}
        sx={{ marginTop: '20px' }}
      />
      <APIChoiseBlock />
    </BoxWrapper>
  )
}

export default CityBlock
