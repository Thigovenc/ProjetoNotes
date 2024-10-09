import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import {ThemeProvider} from 'styled-components'
import GlobalStyles from './styles/global'
import theme from './styles/theme'
import {Home} from './pages/Home'
import {Profile} from './pages/Profile'

createRoot(document.getElementById('root')).render(
  <StrictMode >
    <ThemeProvider theme={theme}>
      <Profile/>
      <GlobalStyles/>
    </ThemeProvider>
  </StrictMode>,
)
