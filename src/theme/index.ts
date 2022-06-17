import { ThemeOptions, createTheme } from '@mui/material'
import { grey, blueGrey } from '@mui/material/colors'

import convertColor from '@utils/convertColor'

export const WHITE_COLOR = '#ffffff'
export const BLACK_COLOR = '#000000'
export const WEATHER_BG_COLOR = convertColor(blueGrey[600], '0.9')
export const API_BLOCK_MT = 30
export const ZERO_SIZE = 0

export const MARGIN = {
  30: 30,
  10: 10,
  5: 5,
}

export const WIDTH = {
  CITY_WRAPPER: 15,
  TODO_TIME: 12,
  TIME_WRAPPER: 35,
  TODAY_WRAPPER: 20,
  TODAY_IMAGE: 50,
  FULL: 100,
}

export const HEIGHT = {
  TODO_BLOCK: 80,
  FRONT_CONTAINER: 90,
  FULL: 100,
}

export const FONT_SIZE = {
  TIME_SIZE: 80,
  TIME_FORMAT: 30,
  TIME_DATE: 22,
  TODO_DESC: 16,
}

export const FONT_WEIGHT = {
  400: '400',
  500: '500',
  600: '600',
  700: '700',
  800: '800',
}

const themeOptions: ThemeOptions = {
  typography: {
    allVariants: {
      color: WHITE_COLOR,
    },
    subtitle1: {
      fontSize: 44,
      fontWeight: FONT_WEIGHT[700],
      letterSpacing: '2px',
      textAlign: 'end',
    },
    subtitle2: {
      fontSize: 30,
      fontWeight: FONT_WEIGHT[700],
      letterSpacing: '1px',
      textAlign: 'end',
    },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.className?.includes('badge') && {
            borderRadius: 12,
            fontSize: 18,
            background: grey[500],
            padding: '2px 8px',
            textTransform: 'uppercase',
          }),
          pointerEvents: 'none',
        }),
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          background: 'transparent',
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: '10px 0px',
          '&&:last-child': {
            padding: '10px 0px',
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          color: WHITE_COLOR,
          fontSize: 22,
        },
      },
    },
  },
}

const theme = createTheme(themeOptions)

export default theme
