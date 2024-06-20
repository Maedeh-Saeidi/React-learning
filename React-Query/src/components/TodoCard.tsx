import { Todo } from "../entities/Todo"

interface TodoCardProps{
  todo: Todo;
}

export default function TodoCard({todo} : TodoCardProps) {
  return (
    <div>{todo.title}</div>
  )
}
