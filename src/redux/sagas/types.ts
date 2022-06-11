import { CallEffect, PutEffect } from 'redux-saga/effects'
import { IClientObject } from '../../interfaces/api'

export type InitGeneratorFirstArg<T> = CallEffect<T> | PutEffect<{ type: string }>

export type InitGenerator = Generator<
  InitGeneratorFirstArg<IClientObject>,
  void,
  IClientObject
>

export type TokenGenerator = Generator<InitGeneratorFirstArg<string>, void, string>
