import { OptionType, TodoFilterType } from 'models/types';
import React, { ChangeEvent } from 'react'
import { filterOptions } from '../model/filter-options';

const TodoFilter: React.FC<TodoFilterType> = ({ onFilterClick }) => {

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    // console.log(e.target.selectedIndex);
    
    onFilterClick(e.target.selectedIndex)
  }

  return (
    <select onChange={handleChange}>
      {Object.values(filterOptions).map((option: OptionType) => (
        <option key={option.id} value={option.value}>{option.value}</option>
      ))}
    </select>
  )
}

export default TodoFilter