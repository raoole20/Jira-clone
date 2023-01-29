import { createTheme } from "@mui/material";

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#038c7f',
      light: '#A9d9d0',
      dark: '#027373'
    },
    secondary: {
      main: '#f2e7dc'
    },
    contrast: {
      main: '#0d0d0d'
    }
  },
  custom: {
    light: '',
    main: '',
    dark: '',
    contrastText: '',
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
    custom?: Palette['primary']
  }
}