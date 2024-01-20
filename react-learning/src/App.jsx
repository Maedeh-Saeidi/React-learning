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
import Form from './components/Form'
import Todo from './components/Todo'
import ListItem from './components/ListItem'
import InlineComponent from './components/InlineComponent'
import StylesheetComponent from './components/StylesheetComponent'
import FragmentComponent from './components/FragmentComponent'
import Table from './components/table'
import Parent from './components/Parent'
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
      <FunctionalCounter></FunctionalCounter>
       <ConditionalComponent></ConditionalComponent>
      <Product></Product> 
      <Form></Form> 
      <Todo></Todo>
      <ListItem></ListItem> 
      <InlineComponent></InlineComponent>
      <StylesheetComponent />
      <FragmentComponent></FragmentComponent>
      <Table></Table>
         */}
      <Parent></Parent>
      </>
  )
}
export default App;
