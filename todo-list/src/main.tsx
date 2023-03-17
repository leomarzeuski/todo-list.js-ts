import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Header from './compenets/header/Header'
import Input from './compenets/input/Input'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Header />
    <Input />
  </React.StrictMode>,
)
