import { TodoType } from 'models/types'
import { useState } from 'react'
import todoStore from 'stores/todoStore'

const useItem = (todo: TodoType) => {
  const [checked, setChecked] = useState(
    todoStore.todos.find(
      (todoFromStore: TodoType) => todoFromStore.id === todo.id
    )?.completed
  )

  const handleChange = () => {
    setChecked(!checked)
    todoStore.readTodo(todo)
  }

  const handleClick = () => todoStore.deleteTodo(todo.id)

  return { checked, handleChange, handleClick }
}

export default useItem
