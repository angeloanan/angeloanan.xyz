import type { ThemeExtension, ThemeOverride } from '@chakra-ui/react'
import { theme, extendTheme } from '@chakra-ui/react'

const systemFonts =
  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'

const themeExtension: ThemeExtension | ThemeOverride = {
  styles: {
    global: {
      body: {
        bg: '#121212',
        color: theme.colors.white,
        minHeight: '100vh',
        textRendering: 'optimizeLegibility',
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale'
      }
    }
  },

  colors: {
    accent: theme.colors.yellow,
    contrast: {
      50: '#e7f3fe',
      100: '#b6dcfc',
      200: '#85c2f9',
      300: '#55a5f7',
      400: '#2488f5',
      500: '#0070f3',
      600: '#0050b6',
      700: '#003986',
      800: '#002255',
      900: '#000e25'
    },
    text: {
      primary: theme.colors.white,
      secondary: theme.colors.gray[300]
    },
    red: {
      50: '#fde7e7',
      100: '#fab7b7',
      200: '#f78787',
      300: '#f45858',
      400: '#f12828',
      500: '#ee0000',
      600: '#b60000',
      700: '#860000',
      800: '#550000',
      900: '#250000'
    },
    orange: {
      50: '#fef5e7',
      100: '#fce2b6',
      200: '#f9cf85',
      300: '#f7bb54',
      400: '#f5a623',
      500: '#cb891d',
      600: '#a16c17',
      700: '#764f10',
      800: '#4c320a',
      900: '#211604'
    },
    spotify: '#1DB954',
    green: {
      50: '#ebfaf6',
      100: '#c2f0e4',
      200: '#99e5d1',
      300: '#70dbbd',
      400: '#48d1a8',
      500: '#1fc791',
      600: '#00bf80',
      700: '#008456',
      800: '#005437',
      900: '#002517'
    },
    turquoise: {
      50: '#e6fffc',
      100: '#b3fff5',
      200: '#80ffec',
      300: '#4dffe2',
      400: '#1affd6',
      500: '#00ffcd',
      600: '#00b690',
      700: '#008668',
      800: '#005641',
      900: '#00251c'
    },
    ultramarine: {
      50: '#eaeefa',
      100: '#c0c9f1',
      200: '#97a4e8',
      300: '#6d7edf',
      400: '#4355d5',
      500: '#2234ce',
      600: '#1a249c',
      700: '#131973',
      800: '#0c0f49',
      900: '#050620'
    },
    purple: {
      50: '#f4ebfa',
      100: '#dec2f0',
      200: '#c599e6',
      300: '#ab70dc',
      400: '#8f47d2',
      500: '#7928ca',
      600: '#581e98',
      700: '#3f1670',
      800: '#260e47',
      900: '#10061f'
    },
    magenta: {
      50: '#ffe6f6',
      100: '#ffb3e3',
      200: '#ff80cc',
      300: '#ff4db2',
      400: '#ff1493',
      500: '#d71176',
      600: '#aa0d58',
      700: '#7d093d',
      800: '#500625',
      900: '#23020f'
    }
  },

  components: {
    Heading: {
      baseStyle: {
        fontWeight: 700
      }
    },
    Text: {
      baseStyle: {
        fontWeight: 300
      }
    }
  },

  fonts: {
    body: `InterVariable, Inter, ${systemFonts}`,
    heading: `InterVariable, Inter, ${systemFonts}`,
    mono: 'Jetbrains Mono, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace, monospace'
  }
}

const customTheme = extendTheme(themeExtension)

export default customTheme
