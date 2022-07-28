import { observer } from 'mobx-react-lite'
import React from 'react'
import useTodoForm from '../model/todo-form'

import './todo-form.scss'

const TodoForm = () => {
  const { title, handleSubmit, handleChange } = useTodoForm()

  return (
    <form onSubmit={handleSubmit} className='todo_form'>
      <input
        type='text'
        value={title}
        placeholder='Введите задачу'
        maxLength={30}
        minLength={3}
        autoComplete='off'
        onChange={handleChange}
        className='todo_form__input'
      />
      <input type='submit' value='Добавить' className='todo_form__button' />
    </form>
  )
}

export default observer(TodoForm)
