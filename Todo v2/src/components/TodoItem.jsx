import styles from "./todoitem.module.css"
import formstyles from "./form.module.css"
import { useState } from "react";
export default function TodoItem({ item, todos, setTodos }) {

  function handleDelete(item) {
    console.log(`delete button clicked for ${item}`);
    setTodos(todos.filter((todo) => todo !== item));
  }
  function handleClick(name) {
    setTodos(todos.map((item) => item.name === name ? { ...item, done: !item.done } : item));
  }
  const className = item.done ? styles.compeleted : "";
  return (
    <div className={styles.item}>
      <h3 className={styles.itemName}>
        <span
          className={className}
          onClick={() => handleClick(item.name)}>
          {item.name}
        </span>
        <span>
          <button
            className={styles.deleteButton + ' ' + formstyles.modernButton}
            onClick={() => handleDelete(item)}
          >x</button>
        </span>
      </h3>
      <hr className={styles.line} />
    </div>
  )
}

