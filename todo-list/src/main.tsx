import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import './index.css'
import Header from './compenets/Header'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
    <Header />
  </React.StrictMode>,
)
