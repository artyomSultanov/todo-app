import React from 'react'
import { TodoType } from 'models/types'
import { observer } from 'mobx-react-lite'

import './todo-item.scss'
import useItem from '../model/todo-item'

const TodoItem: React.FC<{ todo: TodoType }> = ({ todo }) => {
  const { checked, handleChange, handleClick } = useItem(todo)

  return (
    <li className='todo_item'>
      <div className='todo_item__label_wrapper'>
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
      <div className='todo_item__delete' onClick={handleClick}></div>
    </li>
  )
}

export default observer(TodoItem)
