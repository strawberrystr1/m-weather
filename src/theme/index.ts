import { ThemeOptions, createTheme } from '@mui/material'
import { grey, blueGrey } from '@mui/material/colors'

import convertColor from '../utils/convertColor'

export const WHITE_COLOR = '#ffffff'
export const WEATHER_BG_COLOR = convertColor(blueGrey[600], '0.9')

const themeOptions: ThemeOptions = {
  typography: {
    allVariants: {
      color: WHITE_COLOR,
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
  },
}

const theme = createTheme(themeOptions)

export default theme
