import { TextField } from '@mui/material'

import APIChoiseBlock from '../APIChoiseBlock'

import IProps from './types'
import { BoxWrapper, City, Country } from './styled'

const CityBlock = ({ city, country }: IProps) => (
  <BoxWrapper>
    <City variant="subtitle1">{city}</City>
    <Country variant="subtitle2">{country}</Country>
    <TextField variant="standard" defaultValue="Minsk" sx={{ marginTop: '20px' }} />
    <APIChoiseBlock />
  </BoxWrapper>
)

export default CityBlock
