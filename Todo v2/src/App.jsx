import { useState } from 'react'
import './App.css'
import Todo from './components/Todo'
import InlineComponent from './components/inlineComponent'

function App() {

  return (
    <div className='App'>
      <h1>App</h1>
      {/* <Todo></Todo> */}
      <InlineComponent></InlineComponent>
    </div>
  )
}

export default App
