import { Typography } from '@mui/material'
import { Component } from 'react'

import { IProps, IState } from './types'

export default class ErrorBoundary extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    this.state = {
      error: false,
    }
  }

  static getDerivedStateFromError() {
    return {
      error: true,
    }
  }

  render() {
    const { children, fallback } = this.props
    const { error } = this.state

    if (error) {
      if (fallback) return <Typography>{fallback}</Typography>
      return <Typography>Something went wrong...</Typography>
    }

    return children
  }
}
