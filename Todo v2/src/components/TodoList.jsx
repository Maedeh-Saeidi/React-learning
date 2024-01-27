import TodoItem from "./TodoItem"
import styles from "./todolist.module.css"
export default function TodoList({ todos, setTodos }) {
  return (
    <div className={styles.list}>
      {todos.map((item) => (
        <TodoItem todos={todos} item={item} key={item.name} setTodos={setTodos} />
      ))}
    </div>
  )
}