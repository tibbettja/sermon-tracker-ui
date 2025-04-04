export type PaletteProps = 'light' | 'dark'

const DefaultPalette = (mode: PaletteProps) => {
  const lightColor = '58, 53, 65'
  const darkColor = '255, 255, 255'
  const mainColor = mode === 'light' ? lightColor : darkColor

  return {
    customColors: {
      main: `rgba(${mainColor}, 1)`,
      primaryGradient: '#012160',
      tableHeaderBg: mode === 'light' ? '#F9FAFC' : '#3D3759'
    },
    common: {
      black: '#000',
      white: '#FFF'
    },
    mode,
    primary: {
      light: '#933988', //
      main: '#7f3276', // Byzantium
      dark: '#762e6d', //
      contrastText: '#FFF'
    },
    secondary: {
      light: '#40638c', //
      main: '#365476', // YinMn Blue
      dark: '#335070', //
      contrastText: '#000'
    },
    info: {
      light: '#4fbee3', //
      main: '#3eb7e1', // Aero
      dark: '#2bb1de', //
      contrastText: '#000'
    },
    success: {
      light: '#328558', //
      main: '#296B47', // Darmouth Green
      dark: '#276844', //
      contrastText: '#FFF'
    },
    attention: {
      light: '#ffe91f', //
      main: '#fee400', // Canary
      dark: '#f5dc00', //
      contrastText: '#000'
    },
    warning: {
      light: '#e99520', //
      main: '#d28415', // Fulvous
      dark: '#cc8014', //
      contrastText: '#000'
    },
    error: {
      light: '#D92716', // Chili Red
      main: '#AE2012', // Rufous
      dark: '#82170D', // Barn Red
      contrastText: '#FFF'
    },
    grey: {
      50: '#FAFAFA',
      100: '#F5F5F5',
      200: '#EEEEEE',
      250: '#E8E8E8',
      300: '#E0E0E0',
      400: '#BDBDBD',
      500: '#9E9E9E',
      600: '#757575',
      700: '#616161',
      800: '#424242',
      900: '#212121',
      A100: '#D5D5D5',
      A200: '#AAAAAA',
      A400: '#616161',
      A700: '#303030',
      light: '#D5D5D5',
      main: '#AAAAAA',
      dark: '#616161',
      contrastText: '#000'
    },
    bright: {
      light: '#FFFFFF',
      main: '#FFFFFF',
      dark: '#FFFFFF',
      contrastText: '#000'
    },
    text: {
      primary: `rgba(${mainColor}, 0.93)`,
      secondary: `rgba(${mainColor}, 0.74)`,
      disabled: `rgba(${mainColor}, 0.57)`,
      lightPrimary: `rgba(${lightColor}, 0.93)`
    },
    divider: `rgba(${mainColor}, 0.12)`,
    background: {
      paper: mode === 'light' ? '#FFEDDB' : '#001219',
      default: mode === 'light' ? '#E8D8C8' : '#000405',
      light: {
        paper: '#FFEDDB',
        default: '#E8D8C8'
      },
      dark: {
        paper: '#001219',
        default: '#000405'
      }
    },
    action: {
      active: `rgba(${mainColor}, 0.54)`,
      hover: `rgba(${mainColor}, 0.04)`,
      selected: `rgba(${mainColor}, 0.08)`,
      disabled: `rgba(${mainColor}, 0.30)`,
      disabledBackground: `rgba(${mainColor}, 0.18)`,
      focus: `rgba(${mainColor}, 0.12)`
    }
  }
}

export default DefaultPalette

// export type PaletteProps = 'light' | 'dark'

// const DefaultPalette = (mode: PaletteProps) => {
//   const lightColor = '58, 53, 65'
//   const darkColor = '255, 255, 255'
//   const mainColor = mode === 'light' ? lightColor : darkColor

//   return {
//     customColors: {
//       main: `rgba(${mainColor}, 1)`,
//       primaryGradient: '#012160',
//       tableHeaderBg: mode === 'light' ? '#F9FAFC' : '#3D3759'
//     },
//     common: {
//       black: '#000',
//       white: '#FFF'
//     },
//     mode,
//     primary: {
//       light: '#0085A1', // Blue (Munsell)
//       main: '#005F73', // Midnight Green
//       dark: '#004A59', // Gunmetal
//       contrastText: '#FFF'
//     },
//     secondary: {
//       light: '#0ECACF', // Robin Egg Blue
//       main: '#0A9396', // Dark Cyan
//       dark: '#09787A', // Teal
//       contrastText: '#000'
//     },
//     info: {
//       light: '#ADF7DF', // Aquamarine
//       main: '#94D2BD', // Tiffany Blue
//       dark: '#669183', // Viridian
//       contrastText: '#000'
//     },
//     success: {
//       light: '#748244', // Reseda Green
//       main: '#606C38', // Dark Moss Green
//       dark: '#3B4222', // Drab Dark Brown
//       contrastText: '#FFF'
//     },
//     attention: {
//       light: '#FFA600', // Orange (web)
//       main: '#EE9B00', // Gamboge
//       dark: '#C98300', // Harvest Gold
//       contrastText: '#000'
//     },
//     warning: {
//       light: '#FA7F02', // Orange Wheel
//       main: '#CA6702', // Alloy Orange
//       dark: '#B05A02', // Burnt Orange
//       contrastText: '#FFF'
//     },
//     error: {
//       light: '#D92716', // Chili Red
//       main: '#AE2012', // Rufous
//       dark: '#82170D', // Barn Red
//       contrastText: '#FFF'
//     },
//     grey: {
//       50: '#FAFAFA',
//       100: '#F5F5F5',
//       200: '#EEEEEE',
//       250: '#E8E8E8',
//       300: '#E0E0E0',
//       400: '#BDBDBD',
//       500: '#9E9E9E',
//       600: '#757575',
//       700: '#616161',
//       800: '#424242',
//       900: '#212121',
//       A100: '#D5D5D5',
//       A200: '#AAAAAA',
//       A400: '#616161',
//       A700: '#303030',
//       light: '#D5D5D5',
//       main: '#AAAAAA',
//       dark: '#616161',
//       contrastText: '#000'
//     },
//     bright: {
//       lgiht: '#FFFFFF',
//       main: '#FFFFFF',
//       dark: '#FFFFFF',
//       contrastText: '#000'
//     },
//     text: {
//       primary: `rgba(${mainColor}, 0.93)`,
//       secondary: `rgba(${mainColor}, 0.74)`,
//       disabled: `rgba(${mainColor}, 0.57)`,
//       lightPrimary: `rgba(${lightColor}, 0.93)`
//     },
//     divider: `rgba(${mainColor}, 0.12)`,
//     background: {
//       paper: mode === 'light' ? '#FFEDDB' : '#001219',
//       default: mode === 'light' ? '#E8D8C8' : '#000405'
//     },
//     action: {
//       active: `rgba(${mainColor}, 0.54)`,
//       hover: `rgba(${mainColor}, 0.04)`,
//       selected: `rgba(${mainColor}, 0.08)`,
//       disabled: `rgba(${mainColor}, 0.30)`,
//       disabledBackground: `rgba(${mainColor}, 0.18)`,
//       focus: `rgba(${mainColor}, 0.12)`
//     }
//   }
// }

// export default DefaultPalette
