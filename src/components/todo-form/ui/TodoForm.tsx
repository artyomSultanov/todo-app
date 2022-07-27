import { observer } from 'mobx-react-lite'
import React, { ChangeEvent, FormEvent, useState } from 'react'
import todoStore from 'stores/todoStore'

import './todo-form.scss'

const TodoForm = () => {
  const [title, setTitle] = useState('')

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    title && todoStore.addTodo(title)
    setTitle('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        value={title}
        placeholder='Введите задачу'
        maxLength={18}
        minLength={3}
        autoComplete='off'
        onChange={handleChange}
        className='todo_input'
      />
    </form>
  )
}

export default observer(TodoForm)
