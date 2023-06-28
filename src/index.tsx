import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyle from '../src/style/GlobalStyle.ts'
import Routes from "./routes.tsx"

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Routes/>
    <GlobalStyle />
  </React.StrictMode>,
)
