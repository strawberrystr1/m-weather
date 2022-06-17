import { CallEffect, PutEffect, SelectEffect, TakeEffect } from 'redux-saga/effects'

import {
  IClientObject,
  IIPResponse,
  IOpenweatherResponse,
  IStormglassResponse,
  IWeatherPayload,
} from '@interfaces/api'

export type InitGeneratorFirstArg<T> = CallEffect<T> | PutEffect<{ type: string }>

export type InitGenerator = Generator<InitGeneratorFirstArg<IClientObject>, void, IClientObject>

export type WeatherByIPGenerator = Generator<
| CallEffect<IIPResponse>
| TakeEffect
| PutEffect<{
  type: string
  payload: string
}>,
void,
unknown
>

export type SetWeatherGenerator = Generator<
| CallEffect<IIPResponse | Error>
| SelectEffect
| CallEffect<IOpenweatherResponse | IStormglassResponse | Error>
| PutEffect<{
  type: string
  payload: string
}>
| PutEffect<{
  type: string
  payload: IWeatherPayload
}>
| PutEffect<{
  type: string
}>,
void,
unknown
>

export type TokenGenerator = Generator<InitGeneratorFirstArg<string>, void, string>
