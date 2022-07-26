import React, { useState } from 'react'
import { TodoType } from 'models/types'
import TodoStore from 'stores/todoStore'
import { observer } from 'mobx-react-lite'

const TodoItem: React.FC<{todo: TodoType}> = ({ todo }) => {
  const [checked, setChecked] = useState(false)

  return (
    <li>
      <input type="checkbox" name="todo" checked={checked} onChange={() => {setChecked(!checked);TodoStore.readTodo(todo)}}/>
      <span>{todo.title}</span>
      <span onClick={() => TodoStore.deleteTodo(todo.id)}>X</span>
    </li>
  )
}

export default observer(TodoItem)