import { useState } from 'react'
import './App.css'
import Hello from './components/Hello'
import Message from './components/Message'
import Profile from './components/Profile'
import Counter from './components/Counter'
import Resume from './components/Resume'
import FunctionEvent from './components/FunctionEvent'
import ClassEvnet from './components/ClassEvent'
import FunctionalCounter from './components/FunctionalCounter'
import ConditionalComponent from './components/ConditionalComponent'
import Product from './components/Product'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
       {/*<Hello />
      <Message messagecode="10" messagecontent = "This is a message from props!"/>
      <Profile name="Hendry" lastname="Ford" >
        <h3>This is a profile of a person.</h3>
      </Profile>
      <Counter></Counter>
      <Resume name="FOod" ></Resume>
      <FunctionEvent />
      <ClassEvnet />
      <FunctionalCounter></FunctionalCounter> */}
      <ConditionalComponent></ConditionalComponent>
      <Product></Product>
    </>
  )
}
export default App
