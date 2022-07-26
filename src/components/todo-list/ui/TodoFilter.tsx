import React from 'react'

const TodoFilter = () => {
  return (
    <select name="todo">
      <option value="Все">Все</option>
      <option value="Прочитанные">Прочитанные</option>
      <option value="Непрочитанные">Непрочитанные</option>
    </select>
  )
}

export default TodoFilter