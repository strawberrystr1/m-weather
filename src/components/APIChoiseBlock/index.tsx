import React from 'react'
import { FormControl, FormControlLabel, Radio, RadioGroup, Typography } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'

import { RootState } from '@redux/index'
import { changeAPI } from '@redux/actions/userActions'

import BoxWrapper from './styled'

const APIChoiseBlock = () => {
  const { currentAPI } = useSelector((state: RootState) => state.user)
  const dispatch = useDispatch()

  const handleAPIChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeAPI(e.target.value))
  }

  return (
    <BoxWrapper>
      <FormControl>
        <Typography>API choice:</Typography>
        <RadioGroup value={currentAPI} onChange={handleAPIChange}>
          <FormControlLabel control={<Radio />} value="openweather" label="OpenWeather" />
          <FormControlLabel control={<Radio />} value="stormglass" label="Stormglass" />
        </RadioGroup>
      </FormControl>
    </BoxWrapper>
  )
}

export default APIChoiseBlock
