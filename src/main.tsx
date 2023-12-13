import { Grommet } from 'grommet';
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import theme from './theme.ts';
import GlobalStyle from './GlobalStyles';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Grommet
    theme={theme}
    themeMode="dark"
    full
  >
    <GlobalStyle />
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Grommet>,
)
