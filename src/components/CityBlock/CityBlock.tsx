import { TextField } from '@mui/material'
import IProps from './types'
import { BoxWrapper, City, Country } from './styled'
import APIChoiseBlock from '../APIChoiseBlock'
import { WHITE_COLOR } from '../../theme'

const CityBlock = ({ city, country }: IProps) => (
  <BoxWrapper>
    <City variant="subtitle1">{city}</City>
    <Country variant="subtitle2">{country}</Country>
    <TextField variant="standard" defaultValue="Minsk" sx={{ marginTop: '20px' }} />
    <APIChoiseBlock />
  </BoxWrapper>
)

export default CityBlock
