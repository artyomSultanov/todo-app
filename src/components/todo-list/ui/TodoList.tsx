import { observer } from 'mobx-react-lite'
import React from 'react'
import useFilteredList from '../model/filter-list'


const TodoList: React.FC<{ indexOption: number }> = ({ indexOption }) => {
  const filteredList = useFilteredList(indexOption)

  return (
    <ul className="todo-list">
      {filteredList}
    </ul>
  )
}

export default observer(TodoList)