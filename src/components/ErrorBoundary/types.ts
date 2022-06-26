import { ReactNode } from "react";

export interface IProps { children: ReactNode, fallback?: string }
export interface IState { error: boolean }