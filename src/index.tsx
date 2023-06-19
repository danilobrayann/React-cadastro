import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home/index.tsx'
import Users from './pages/Useres/index.tsx'
import GlobalStyle from './GlobalStyle.ts'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Users /> 
   
    <GlobalStyle/>
  </React.StrictMode>,
)
