import { CallEffect, PutEffect, SelectEffect, TakeEffect } from 'redux-saga/effects'
import {
  IClientObject,
  IIPResponse,
  IOpenweatherResponse,
  IWeatherPayload,
} from '../../interfaces/api'

export type InitGeneratorFirstArg<T> = CallEffect<T> | PutEffect<{ type: string }>

export type InitGenerator = Generator<
  InitGeneratorFirstArg<IClientObject>,
  void,
  IClientObject
>

export type WeatherByIPGenerator = Generator<
| TakeEffect
| CallEffect<IIPResponse>
| PutEffect<{
  type: string
  payload: string
}>
| SelectEffect
| CallEffect<IOpenweatherResponse>
| PutEffect<{
  type: string
  payload: IWeatherPayload
}>,
void,
unknown
>
export type TokenGenerator = Generator<InitGeneratorFirstArg<string>, void, string>
