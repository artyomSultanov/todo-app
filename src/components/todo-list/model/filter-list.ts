import { ConfigType, OptionType, TodoType } from 'models/types'
import todoStore from 'stores/todoStore'
import { filterOptions } from './filter-options'
import TodoItem from 'components/todo-item'
import React from 'react'

const useFilteredList = (indexOption: number) => {
  const filterOption: OptionType =
    filterOptions.find((option: OptionType) => option.id === indexOption) ??
    filterOptions[0]
  const filterConfig: ConfigType = filterOption.config

  const filteredList = todoStore.todos
    .map((todo: TodoType) => {
      return Object.keys(filterConfig).some(
        (key: string) =>
          todo[key as keyof TodoType] !== filterConfig[key as keyof ConfigType]
      )
        ? null
        : React.createElement(TodoItem, { key: todo.id, todo })
    })
    .filter(Boolean)

  if (Object.keys(filteredList).length) return filteredList

  return React.createElement(
    'div',
    { className: 'todo_list__empty' },
    'Список пуст!'
  )
}

export default useFilteredList
