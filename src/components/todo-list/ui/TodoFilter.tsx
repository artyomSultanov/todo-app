import { observer } from 'mobx-react-lite'
import { OptionType, TodoFilterType } from 'models/types'
import React, { ChangeEvent } from 'react'
import { filterOptions } from '../model/filter-options'

import './todo-filter.scss'

const TodoFilter: React.FC<TodoFilterType> = ({ onFilterClick }) => {
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    onFilterClick(e.target.selectedIndex)
  }

  return (
    <select className='todo_filter' onChange={handleChange}>
      {Object.values(filterOptions).map((option: OptionType) => (
        <option key={option.id} value={option.value}>
          {' '}
          {option.value}{' '}
        </option>
      ))}
    </select>
  )
}

export default observer(TodoFilter)
