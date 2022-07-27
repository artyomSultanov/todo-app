import React, { ChangeEvent, FormEvent, useState } from 'react'
import todoStore from 'stores/todoStore'

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
      <input type="text" value={title} onChange={handleChange}/>
    </form>
  )
}

export default TodoForm