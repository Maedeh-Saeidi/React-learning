import styles from "./form.module.css"
import { useState } from "react";
export default function Form({todos, setTodos}) {
  const [todo, setTodo] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo('');
  }
  return (
    <form onSubmit={handleSubmit} className={styles.todoform}>
      <div className={styles.inputContainer}>
        <input
          className={styles.modernInput}
          type="text"
          value={todo}
          onChange={e => {
            setTodo(e.target.value);
          }}
          placeholder="Enter todo item..."
        />
        <button
          className={styles.modernButton}
          type="submit"
        >
          Add</button>
      </div>
      </form>
  )
}