import React from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import '../styles/tailwind.css'

import GlobalStyle from '../styles/global'
import theme from '../styles/theme'
import Storeprovider from '../../utils/store'

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={ theme }>
      <Storeprovider>
        <Component { ...pageProps } />
        <GlobalStyle />
      </Storeprovider>
    </ThemeProvider>
  )
}

export default App

