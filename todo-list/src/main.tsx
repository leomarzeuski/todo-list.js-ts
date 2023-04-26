import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Header from './compenets/header/Header'
import Input from './compenets/input/Input'
import TodoList from './compenets/todolist/TodoList'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Header />
    <TodoList />


  </React.StrictMode>,
)
