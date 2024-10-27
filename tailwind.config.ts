import type { Config } from 'tailwindcss'
// eslint-disable-next-line @typescript-eslint/no-require-imports
const colors = require('tailwindcss/colors')

const base = colors.zinc // slate, neutral, gray, stone
const primary = colors.cyan
const secondary = colors.sky
const success = colors.emerald
const warning = colors.amber
const error = colors.red
const info = colors.violet

const config: Config = {
  darkMode: 'selector',
  content: ['./src/app/**/*.{ts,tsx}', './src/@core/**/*.{ts,tsx}', './src/components/**/*.{ts,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      blank: {
        light: base[200],
        DEFAULT: base[200],
        dark: base[950],
        text: {
          light: base[950],
          DEFAULT: base[950],
          dark: base[100]
        }
      },
      paper: {
        1: {
          light: base[300],
          DEFAULT: base[300],
          dark: base[900],
          text: {
            light: base[950],
            DEFAULT: base[950],
            dark: base[100]
          }
        },
        2: {
          light: base[400],
          DEFAULT: base[400],
          dark: base[800],
          text: {
            light: base[950],
            DEFAULT: base[950],
            dark: base[100]
          }
        },
        3: {
          light: base[500],
          DEFAULT: base[500],
          dark: base[700],
          text: {
            light: base[100],
            DEFAULT: base[100],
            dark: base[100]
          }
        },
        4: {
          light: base[600],
          DEFAULT: base[600],
          dark: base[600],
          text: {
            light: base[100],
            DEFAULT: base[100],
            dark: base[100]
          }
        },
        5: {
          light: base[700],
          DEFAULT: base[700],
          dark: base[500],
          text: {
            light: base[100],
            DEFAULT: base[100],
            dark: base[100]
          }
        },
        6: {
          light: base[800],
          DEFAULT: base[800],
          dark: base[400],
          text: {
            light: base[100],
            DEFAULT: base[100],
            dark: base[950]
          }
        },
        7: {
          light: base[900],
          DEFAULT: base[900],
          dark: base[300],
          text: {
            light: base[100],
            DEFAULT: base[100],
            dark: base[950]
          }
        },
        8: {
          light: base[950],
          DEFAULT: base[950],
          dark: base[200],
          text: {
            light: base[100],
            DEFAULT: base[100],
            dark: base[950]
          }
        }
      },
      primary: { light: primary[500], DEFAULT: primary[600], dark: primary[700] },
      secondary: { light: secondary[500], DEFAULT: secondary[600], dark: secondary[700] },
      success: { light: success[500], DEFAULT: success[600], dark: success[700] },
      warning: { light: warning[500], DEFAULT: warning[600], dark: warning[700] },
      error: { light: error[500], DEFAULT: error[600], dark: error[700] },
      info: { light: info[500], DEFAULT: info[600], dark: info[700] },
      white: '#fefefe'
    }
  },
  plugins: []
}
export default config

