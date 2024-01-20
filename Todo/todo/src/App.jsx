import { useState } from 'react'
import Header from './components/header'
import Form from './components/Form'
import './App.css'
import TodoList from './components/TodoList'

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
      <TodoList
        setTodoList={setTodoList}
        todoList={todoList} />
    </div>

  )
}

export default App
