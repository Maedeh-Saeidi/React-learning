import { useState } from 'react'
import './App.css'
import Hello from './components/Hello'
import Fruits from './components/Fruits'
import ConditionalComponent from './components/ConditionalComponent'

function App() {
  const person = {
    name: "Rob",
    message: "Hi there!",
    emoji: "😎",
    seatNumbers: [1, 4, 7]
  }
  return (
    <div className='App'>
      {/* <Hello person={person} />  
      <ConditionalComponent></ConditionalComponent>
       */}
      <Fruits /> 
    </div>
  )
}

export default App
