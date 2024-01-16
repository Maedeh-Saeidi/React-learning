import { useState } from "react";
import ListItem from "./ListItem";
export default function Todo() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  const handleChange = (event) => {
    setTodo(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    let tempList = todoList;
    tempList.push(todo);
    setTodoList(tempList);
    console.log(todoList);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} type="text" value={todo}></input>
        <button onChange={handleSubmit} type="submit">Add</button>
      </form>
      {todoList.map((item) => <ListItem key={item} name={item}>
        List Item
      </ListItem>)}
   </div>
 ) 
}