import { createTheme } from "@mui/material";

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1E3D58',
    },
    secondary: {
      main: '#E8EEF1'
    },
    contrast: {
      main: '#01161F'
    },
    background: {
      paper: '#E8EEF1',
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
}