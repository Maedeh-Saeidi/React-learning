import { useState } from 'react'
import Header from './components/header'
import Form from './components/Form'
import './App.css'
import Todo from './components/Todo'

function App() {
  const [count, setCount] = useState(0)
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  return (
    <div className='App'>
      <Header></Header>
      <Form
        todo={todo}
        setTodo={setTodo}
        todoList={todoList}
        setTodoList={setTodoList}></Form>
      <Todo/>
    </div>

  )
}

export default App
