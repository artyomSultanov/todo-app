import { observer } from 'mobx-react-lite'
import React from 'react'
import TodoStore from 'stores/todoStore'
import { TodoType } from 'models/types'
import TodoItem from 'components/todo-item/ui/TodoItem'


const TodoList = () => {
  return (
    TodoStore.todos.length > 0 
    ? <ul className="todo-list">
    {TodoStore.todos.map((todo: TodoType) => (
      <TodoItem key={todo.id} todo={todo}/>
    ))}
    </ul>
    : <p>List is empty</p>
  )
}

export default observer(TodoList)