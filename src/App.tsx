import React, { useState } from 'react'
import { TodoList, TodoFilter } from './components/todo-list'
import TodoForm from './components/todo-form'

import './styles/index.scss'

function App() {
  const [indexOption, setIndexOptions] = useState(0)

  return (
    <div className='container'>
      <div className='todo'>
        <TodoForm />
        <TodoFilter onFilterClick={setIndexOptions} />
        <TodoList indexOption={indexOption} />
      </div>
    </div>
  )
}

export default App
