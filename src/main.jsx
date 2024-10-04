import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import {ThemeProvider} from 'styled-components'
import GlobalStyles from './styles/global'
import theme from './styles/theme'
import {Home} from './pages/Home'
import {Signin} from './pages/Signin'

createRoot(document.getElementById('root')).render(
  <StrictMode >
    <ThemeProvider theme={theme}>
      <Signin/>
      <GlobalStyles/>
    </ThemeProvider>
  </StrictMode>,
)
