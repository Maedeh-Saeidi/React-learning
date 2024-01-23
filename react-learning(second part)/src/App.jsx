import { useState } from 'react'
import './App.css'
import Hello from './components/Hello'
import Fruits from './components/Fruits'
import ConditionalComponent from './components/ConditionalComponent'
import Message from './components/Message'
import Counter from './components/Counter'

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
      <Fruits /> 
      <Message></Message>
          */}
      <Counter></Counter>
    </div>
  )
}

export default App
