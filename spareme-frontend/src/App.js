import { ThemeProvider } from '@mui/material/styles'
import React from 'react'
import Main from './routing/Main'
import CallsContextProvider from './services/calls-context'
import InterfaceContextProvider from './services/interface-context'
import theme from './styles/theme'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CallsContextProvider>
        <InterfaceContextProvider>
          <Main></Main>
        </InterfaceContextProvider>
      </CallsContextProvider>
    </ThemeProvider>
  )
}

export default App
