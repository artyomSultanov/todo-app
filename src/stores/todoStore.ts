import { autorun, makeAutoObservable, set, toJS } from 'mobx'
import { TodosType, TodoType } from 'models/types'
import { v4 as uuidv4 } from 'uuid'

class TodoStore {
  todos: TodosType = []

  constructor() {
    makeAutoObservable(this)

    this.saveInLocalStorage()
  }

  readTodo(todo: TodoType) {
    todo.completed = !todo.completed
  }

  deleteTodo(id: string) {
    this.todos = this.todos.filter((todo: TodoType) => todo.id !== id)
  }

  addTodo(title: string) {
    const newTodo: TodoType = {
      id: uuidv4(),
      title,
      completed: false,
    }
    this.todos.push(newTodo)
  }

  saveInLocalStorage() {
    const storedData = localStorage.getItem('todos')

    if (storedData) set(this.todos, JSON.parse(storedData))

    autorun(() => {
      const value = toJS(this.todos)

      localStorage.setItem('todos', JSON.stringify(value))
    })
  }
}

const todoStore = new TodoStore()
export default todoStore
