import { createTheme } from "@mui/material";

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
      primary: {
        main: '#011627',
      },
      secondary: {
        main: '#2ec4b6'
      },
      contrast: {
        main: '#fdfffc'
      },
      background: {
        default: '#011627',
        paper: '#011627'
      }
    },
  custom: {
    red: '#e71d36',
    mostasa: '#e71d36',
    blackCoffe2: '#35292cff',
    tan: '#D6B996ff',
    sanddleBrown:'#964726ff',
  },
})

declare module '@mui/material/styles' {
  interface Theme {
    custom?: Palette['primary'];
  }

  interface Palette {
    contrast: Palette['primary'];
  }

  interface PaletteOptions {
    contrast?: {
      main: string
    };
  }

  interface PaletteColor {
    darker?: string;
  }

  interface SimplePaletteColorOptions {
    darker?: string;
  }

  interface ThemeOptions {
    custom?: any
  }
}