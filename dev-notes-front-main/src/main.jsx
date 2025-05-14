import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import AppRouter from './routes/routes.jsx'
import GlobalStyle from './styles/globalStyles.js'
import AppProvider from './hooks/index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppProvider>
        <AppRouter />
      </AppProvider>
    </BrowserRouter>
    <GlobalStyle />
  </React.StrictMode>
)