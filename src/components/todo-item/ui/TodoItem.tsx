import React, { useState } from 'react'
import { TodoType } from 'models/types'
import todoStore from 'stores/todoStore'
import { observer } from 'mobx-react-lite'

const TodoItem: React.FC<{todo: TodoType}> = ({ todo }) => {
  const [checked, setChecked] = useState(todoStore.todos.find((todoFromStore: TodoType) => todoFromStore.id === todo.id)?.completed)

  return (
    <li>
      <input type="checkbox" name="todo" checked={checked} onChange={() => {setChecked(!checked);todoStore.readTodo(todo)}}/>
      <span>{todo.title}</span>
      <span onClick={() => todoStore.deleteTodo(todo.id)}>X</span>
    </li>
  )
}

export default observer(TodoItem)