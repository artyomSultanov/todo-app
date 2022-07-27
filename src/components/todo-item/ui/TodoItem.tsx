import React, { useState } from 'react'
import { TodoType } from 'models/types'
import todoStore from 'stores/todoStore'
import { observer } from 'mobx-react-lite'

import './todo-item.scss'

const TodoItem: React.FC<{ todo: TodoType }> = ({ todo }) => {
  const [checked, setChecked] = useState(
    todoStore.todos.find(
      (todoFromStore: TodoType) => todoFromStore.id === todo.id
    )?.completed
  )

  const handleChange = () => {
    setChecked(!checked)
    todoStore.readTodo(todo)
  }

  return (
    <li className='todo_item'>
      <div>
        <label className='todo_item__label'>
          <input
            className='todo_item__checkbox'
            type='checkbox'
            name='todo'
            checked={checked}
            onChange={handleChange}
          />
          <span className='todo_item__checkbox_custom'></span>
        </label>
        <span className='todo_item__title'>{todo.title}</span>
      </div>
      <div
        className='todo_item__delete'
        onClick={() => todoStore.deleteTodo(todo.id)}
      ></div>
    </li>
  )
}

export default observer(TodoItem)
