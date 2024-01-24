import { useState } from 'react'
import './App.css'
import Todo from './components/Todo'
import Header from './components/Header'

function App() {

  return (
    <div className='App'>
      <Header></Header>
      <Todo></Todo>
    </div>
  )
}

export default App
