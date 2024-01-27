import { useState } from 'react';
import TodoItem from './TodoItem';
import Form from './form';
import TodoList from './TodoList';
import Footer from './Footer';

export default function Todo() {
  const [todos, setTodos] = useState([]);
  const completedTodos = todos.filter((todo) => todo.done === true).length;
  const totalTodos = todos.length

  return (
    <div>
      <Form todos={todos} setTodos={setTodos} ></Form>
      <TodoList todos={todos} setTodos={setTodos} ></TodoList>
      <Footer completedTodos={completedTodos} totalTodos={totalTodos}></Footer>
    </div>
  )
}
