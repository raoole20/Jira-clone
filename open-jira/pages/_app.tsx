import '../styles/globals.css'
// import '../app/assets/sass/main.sass'
import type { AppProps } from 'next/app'
import { ThemeProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material'
import { darkTheme, lightTheme } from '../themes'
import { Provider } from 'react-redux'
import { store } from 'app/store'
import { useState } from 'react'


interface NewProps extends AppProps {
  onChangeMode: any
}

export default function App ({ Component, pageProps }: NewProps) {
  const [mode, setMode] = useState('dark')

  const handleChangeMode = () => { 
    setMode(mode === 'dark' ? 'light' : 'dark')
  }

  return (
    <Provider store={store}>
      <ThemeProvider theme={ mode === 'dark' ? darkTheme : lightTheme }>
        <CssBaseline />
        <Component {...pageProps}  onChangeMode={handleChangeMode} />
      </ThemeProvider>
    </Provider>
  )
}
