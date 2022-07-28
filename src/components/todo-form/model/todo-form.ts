import { ChangeEvent, FormEvent, useState } from 'react'
import todoStore from 'stores/todoStore'

const useTodoForm = () => {
  const [title, setTitle] = useState('')

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    title && todoStore.addTodo(title)
    setTitle('')
  }

  return { title, handleSubmit, handleChange }
}

export default useTodoForm
